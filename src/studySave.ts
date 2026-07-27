// ── Study session submission ──────────────────────────────────────────────────
// Sends the current scene state to a Supabase table so participants can submit
// their work with one button (no download, no email). The anon key + an
// insert-only RLS policy make it safe to ship in the client. If the upload ever
// fails, we fall back to a local download so a session is never lost.
//
// Config (build-time env, see .env.example + STUDY_SETUP.md):
//   VITE_SUPABASE_URL        e.g. https://abcd.supabase.co
//   VITE_SUPABASE_ANON_KEY   the project's public anon key
//   VITE_STUDY_TABLE         table name (default "study_sessions")

const env = import.meta.env as Record<string, string | undefined>
const SUPABASE_URL  = env.VITE_SUPABASE_URL
const SUPABASE_KEY  = env.VITE_SUPABASE_ANON_KEY
const STUDY_TABLE   = env.VITE_STUDY_TABLE || 'study_sessions'

export interface StudyResult {
  ok:          boolean
  downloaded?: boolean   // true when we fell back to a local download
  error?:      string
}

/** Whether a real Supabase backend is configured (placeholders don't count). */
export function studyConfigured(): boolean {
  return !!(SUPABASE_URL && SUPABASE_KEY
    && !SUPABASE_URL.includes('YOUR-PROJECT')
    && !SUPABASE_KEY.includes('YOUR-ANON'))
}

/**
 * Participant id: taken from `?pid=` (or `?p=`) in the study URL, otherwise a
 * stable per-browser id (stored in localStorage) so repeat submits are grouped.
 */
export function getParticipantId(): string {
  const params  = new URLSearchParams(window.location.search)
  const fromUrl = params.get('pid') || params.get('p')
  if (fromUrl) { try { localStorage.setItem('study_pid', fromUrl) } catch { /* ignore */ } return fromUrl }
  let stored: string | null = null
  try { stored = localStorage.getItem('study_pid') } catch { /* ignore */ }
  if (!stored) {
    stored = 'P-' + Math.random().toString(36).slice(2, 8)
    try { localStorage.setItem('study_pid', stored) } catch { /* ignore */ }
  }
  return stored
}

/** Save the session as a downloadable JSON file (fallback / offline). */
export function downloadStudyJson(participant: string, data: unknown): void {
  const stamp = new Date().toISOString().replace(/[:.]/g, '-')
  const body  = { participant, savedAt: new Date().toISOString(), data }
  const blob  = new Blob([JSON.stringify(body, null, 2)], { type: 'application/json' })
  const url   = URL.createObjectURL(blob)
  const a     = document.createElement('a')
  a.href = url
  a.download = `phys-study-${participant || 'anon'}-${stamp}.json`
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

/**
 * Submit a session. Tries Supabase first; on any failure downloads a backup file
 * so the participant's work is never lost. `label` is an optional free note
 * (e.g. the task name / current scene name).
 */
export async function submitStudySession(participant: string, data: unknown, label = ''): Promise<StudyResult> {
  if (studyConfigured()) {
    try {
      const res = await fetch(`${SUPABASE_URL!.replace(/\/+$/, '')}/rest/v1/${STUDY_TABLE}`, {
        method:  'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey:         SUPABASE_KEY!,
          Authorization:  `Bearer ${SUPABASE_KEY!}`,
          Prefer:         'return=minimal',
        },
        body: JSON.stringify({ participant, label, data }),
      })
      if (res.ok) return { ok: true }
      const text = await res.text().catch(() => '')
      // Upload rejected — keep the data via a download so nothing is lost.
      downloadStudyJson(participant, data)
      return { ok: false, downloaded: true, error: `HTTP ${res.status} ${text}`.trim() }
    } catch (e) {
      downloadStudyJson(participant, data)
      return { ok: false, downloaded: true, error: (e as Error).message }
    }
  }
  // No backend configured → download so it still works.
  downloadStudyJson(participant, data)
  return { ok: false, downloaded: true, error: 'Study backend not configured.' }
}
