# Collecting study data (Supabase)

Participants click **"Submit my work"** in the toolbar and their full scene is sent
to a database you own. No downloads, no email, no server for you to run. You read
or export every session from a dashboard.

If the backend isn't set up (or the network fails), the button safely **downloads
a JSON backup** instead, so a session is never lost.

There are three one-time steps (~10 minutes, free).

---

## 1. Create the Supabase project + table

1. Sign up at <https://supabase.com> and create a new project (free tier is fine).
2. Open **SQL Editor** → **New query**, paste this, and run it:

```sql
create table if not exists public.study_sessions (
  id          bigint generated always as identity primary key,
  participant text,
  label       text,
  data        jsonb,
  created_at  timestamptz not null default now()
);

-- Turn on row-level security and allow ONLY anonymous inserts. This is what
-- makes it safe to ship the public key in the app: participants can submit,
-- but nobody can read or change data with that key.
alter table public.study_sessions enable row level security;

create policy "anon can insert study sessions"
  on public.study_sessions
  for insert
  to anon
  with check (true);
```

## 2. Get your keys

In the project: **Settings → API**. Copy:

- **Project URL** — e.g. `https://abcdefgh.supabase.co`
- **anon public** key — a long string. (Safe to expose; it can only insert,
  thanks to the policy above. Do **not** use the `service_role` key here.)

## 3. Put them in the build

Edit **`.env.production`** in this repo:

```
VITE_SUPABASE_URL=https://abcdefgh.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOi... (your anon key)
```

Then build and deploy as usual (e.g. `npm run build` → publish `dist/` to GitHub
Pages). These values are baked into the site at build time.

> The anon key ends up in the deployed JavaScript — that's expected and safe here
> because the RLS policy only allows inserts. Don't ever put the `service_role`
> key in `.env*`.

---

## Assigning participant IDs

Give each participant a link with a `pid`:

```
https://<you>.github.io/phys_tool/?pid=P01
https://<you>.github.io/phys_tool/?pid=P02
```

That id is stored with every submission. If no `?pid=` is given, the app makes a
stable per-browser id automatically (so repeat submits from the same person group
together).

Participants can submit as many times as they like (e.g. one per task) — each
click is a new row.

---

## Reading / exporting the data

In Supabase → **Table editor → `study_sessions`** you'll see every submission with
its `participant`, `created_at`, and the full scene in `data` (JSON).

- **Export**: the table editor has an **Export → CSV** button. For clean JSON, run
  in the SQL editor:

  ```sql
  select participant, created_at, data
  from study_sessions
  order by created_at;
  ```

  and use **Download** (JSON) on the result.

- Each `data` object is exactly what the app's Load dialog consumes, so you can
  drop any single session back into the tool to inspect it (paste it as a preset,
  or use the Load "Import" flow).

---

## Testing before the study

1. Fill in `.env.production`, run `npm run build && npm run preview` (or the dev
   server after also putting the values in `.env`).
2. Click **Submit my work** → the button turns green **"✓ Submitted"**.
3. Check the Supabase table editor — a new row should appear.

If the button turns orange **"✓ Saved (backup file)"**, the upload didn't go
through (bad URL/key, table/policy missing, or offline) and it downloaded a JSON
backup instead — check the browser console for the reason.
