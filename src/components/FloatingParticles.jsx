import { useMemo } from 'react'

/**
 * A sparse, elegant field of tiny glowing stars and slow drifting motes.
 * Kept intentionally low-count for performance and to respect
 * prefers-reduced-motion (handled globally in globals.css).
 */
export default function FloatingParticles({ count = 26, drifting = 6 }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 1.6 + 0.8,
        delay: Math.random() * 4,
        duration: Math.random() * 3 + 2.5,
      })),
    [count]
  )

  const drifters = useMemo(
    () =>
      Array.from({ length: drifting }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: Math.random() * 5 + 7,
        size: Math.random() * 2 + 2,
      })),
    [drifting]
  )

  return (
    <div
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}
    >
      {stars.map((s) => (
        <div
          key={`star-${s.id}`}
          style={{
            position: 'absolute',
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            borderRadius: '50%',
            background: '#fff',
            boxShadow: '0 0 4px rgba(255,255,255,0.8)',
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
      {drifters.map((d) => (
        <div
          key={`drift-${d.id}`}
          style={{
            position: 'absolute',
            bottom: '-10px',
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            borderRadius: '50%',
            background: 'var(--blue-soft)',
            boxShadow: '0 0 8px rgba(113,136,255,0.7)',
            animation: `driftUp ${d.duration}s ease-in ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
