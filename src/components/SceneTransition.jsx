import { useEffect, useState } from 'react'

/**
 * Wraps a scene and animates it in with a cinematic fade/blur/scale.
 * Every major scene should be rendered inside this.
 */
export default function SceneTransition({ children, className = '', duration = 1.2 }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div
      className={`scene ${className}`}
      style={{
        opacity: mounted ? 1 : 0,
        filter: mounted ? 'blur(0)' : 'blur(10px)',
        transform: mounted ? 'scale(1)' : 'scale(0.97)',
        transition: `opacity ${duration}s var(--ease-cinematic), filter ${duration}s var(--ease-cinematic), transform ${duration}s var(--ease-cinematic)`,
      }}
    >
      {children}
    </div>
  )
}
