import { Component, ReactNode, Suspense } from 'react'

/**
 * A GLB model can be missing (e.g. a preset references a model file that was
 * deleted or renamed). `useGLTF` throws in that case, which would blank the whole
 * scene. SafeModel catches the failure and renders a fallback instead, so presets
 * still open — with a placeholder where the model would be.
 */
class Boundary extends Component<{ fallback: ReactNode; children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  componentDidCatch() { /* swallow — the fallback communicates the missing model */ }
  render() { return this.state.failed ? <>{this.props.fallback}</> : <>{this.props.children}</> }
}

export function SafeModel({ fallback = null, children, resetKey }: {
  fallback?: ReactNode
  children:  ReactNode
  resetKey?: string   // change it (e.g. to the model URL) to retry after a swap
}) {
  return (
    <Boundary key={resetKey} fallback={fallback}>
      <Suspense fallback={null}>{children}</Suspense>
    </Boundary>
  )
}
