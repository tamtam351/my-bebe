import TitleScene from './TitleScene.jsx'

/* More realistic icons inspired by the reference video */

export function CameraIcon({ size = 54 }) {
  return (
    <svg width={size} height={size * 0.78} viewBox="0 0 64 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="camBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4a4a52" />
          <stop offset="50%" stopColor="#2e2e36" />
          <stop offset="100%" stopColor="#1a1a22" />
        </linearGradient>
        <linearGradient id="camLens" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3a3a48" />
          <stop offset="100%" stopColor="#0d0d14" />
        </linearGradient>
      </defs>
      <rect x="2" y="12" width="60" height="36" rx="5" fill="url(#camBody)" stroke="#7188FF" strokeOpacity="0.35" />
      <rect x="22" y="3" width="18" height="10" rx="2.5" fill="#2a2a34" stroke="#555" strokeOpacity="0.5" />
      <circle cx="32" cy="30" r="14" fill="url(#camLens)" stroke="#C6A96B" strokeWidth="1.6" />
      <circle cx="32" cy="30" r="8" fill="#0a0a12" stroke="#536DFF" strokeOpacity="0.5" />
      <circle cx="32" cy="30" r="3.5" fill="#1a1a28" />
      <circle cx="52" cy="20" r="2.5" fill="#C6A96B" />
      <rect x="8" y="18" width="8" height="4" rx="1" fill="#3a3a48" />
    </svg>
  )
}

export function VinylIcon({ size = 60, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="vinylGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2a2a32" />
          <stop offset="70%" stopColor="#0c0c14" />
          <stop offset="100%" stopColor="#05050a" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="31" fill="url(#vinylGrad)" stroke="#7188FF" strokeOpacity="0.25" />
      <circle cx="32" cy="32" r="24" fill="none" stroke="#1e1e28" strokeWidth="1.2" />
      <circle cx="32" cy="32" r="18" fill="none" stroke="#1e1e28" strokeWidth="1" />
      <circle cx="32" cy="32" r="12" fill="none" stroke="#1e1e28" strokeWidth="0.8" />
      <circle cx="32" cy="32" r="8" fill="#c41e3a" />
      <circle cx="32" cy="32" r="3" fill="#0c0c14" />
    </svg>
  )
}

export function GiftIcon({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="giftBox" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d4e4f7" />
          <stop offset="100%" stopColor="#a8c4e8" />
        </linearGradient>
        <linearGradient id="giftLid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8f0fc" />
          <stop offset="100%" stopColor="#b8d0f0" />
        </linearGradient>
      </defs>
      <rect x="8" y="22" width="40" height="28" rx="3" fill="url(#giftBox)" stroke="#8aa8d0" strokeOpacity="0.6" />
      <rect x="6" y="16" width="44" height="10" rx="2.5" fill="url(#giftLid)" stroke="#8aa8d0" strokeOpacity="0.5" />
      <rect x="24" y="16" width="8" height="34" fill="#f5a0c0" opacity="0.95" />
      <rect x="6" y="20" width="44" height="6" fill="#f5a0c0" opacity="0.9" />
      <path d="M28 16c-5-9-16-7-14 0" stroke="#f080b0" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M28 16c5-9 16-7 14 0" stroke="#f080b0" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <circle cx="28" cy="16" r="3.5" fill="#e870a8" />
    </svg>
  )
}

export function PocketWatchIcon({ size = 54 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="watchCase" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8e0d0" />
          <stop offset="50%" stopColor="#c0b090" />
          <stop offset="100%" stopColor="#a09070" />
        </linearGradient>
      </defs>
      <ellipse cx="28" cy="6" rx="5" ry="3.5" fill="none" stroke="#c0b090" strokeWidth="2" />
      <path d="M28 9.5v4" stroke="#c0b090" strokeWidth="2" />
      <circle cx="28" cy="36" r="24" fill="url(#watchCase)" stroke="#8a7a5a" strokeWidth="1.5" />
      <circle cx="28" cy="36" r="20" fill="#f8f4ec" />
      <circle cx="28" cy="18" r="1.2" fill="#3a3450" />
      <circle cx="28" cy="54" r="1.2" fill="#3a3450" />
      <circle cx="10" cy="36" r="1.2" fill="#3a3450" />
      <circle cx="46" cy="36" r="1.2" fill="#3a3450" />
      <line x1="28" y1="36" x2="28" y2="22" stroke="#3a3450" strokeWidth="2" strokeLinecap="round" />
      <line x1="28" y1="36" x2="40" y2="42" stroke="#3a3450" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="28" cy="36" r="2.2" fill="#c6a96b" />
    </svg>
  )
}

export function FrameIcon({ size = 46 }) {
  return (
    <svg width={size} height={size * 1.2} viewBox="0 0 46 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="44" height="54" rx="2" fill="#241E45" stroke="#C6A96B" strokeOpacity="0.7" strokeWidth="2.2" />
      <rect x="6" y="6" width="34" height="44" fill="#100735" />
      <circle cx="23" cy="24" r="7" fill="#2E2860" />
      <path d="M11 40l7-9 6 6 5-7 6 10z" fill="#2a2652" />
    </svg>
  )
}

export function BalloonIcon({ size = 30, color = '#536DFF' }) {
  return (
    <svg width={size} height={size * 1.5} viewBox="0 0 30 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="15" cy="16" rx="14" ry="16" fill={color} opacity="0.8" />
      <path d="M15 32c0 0 -2 4 0 6" stroke={color} strokeWidth="1.2" opacity="0.65" />
      <path d="M13 32h4l-2 12z" fill={color} opacity="0.55" />
    </svg>
  )
}

export function StarIcon({ size = 10, color = '#F8F6FF' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M5 0l1.2 3.2L9.5 4l-3 2.1L7.6 10 5 7.6 2.4 10l1.1-3.9-3-2.1 3.3-.8z" />
    </svg>
  )
}

export function NeonHeartIcon({ size = 36, color = '#7188FF' }) {
  return (
    <svg width={size} height={size * 0.9} viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 32.5C20 32.5 3 21.5 3 12.5C3 7.5 7 3.5 12 3.5C15.5 3.5 18.5 5.5 20 8.5C21.5 5.5 24.5 3.5 28 3.5C33 3.5 37 7.5 37 12.5C37 21.5 20 32.5 20 32.5Z"
        fill={color}
        fillOpacity="0.25"
        stroke={color}
        strokeWidth="2.2"
      />
    </svg>
  )
}

export function PlanetIcon({ size = 36 }) {
  return (
    <svg width={size} height={size * 0.75} viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="24" cy="18" rx="14" ry="14" fill="#c9a86c" />
      <ellipse cx="24" cy="18" rx="22" ry="5" fill="none" stroke="#e8d4a0" strokeWidth="2.5" opacity="0.85" />
      <ellipse cx="20" cy="14" rx="3" ry="2.5" fill="#a8884a" opacity="0.6" />
    </svg>
  )
}

export function WhaleIcon({ size = 40 }) {
  return (
    <svg width={size} height={size * 0.55} viewBox="0 0 48 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 16c4-8 14-12 24-10 6 1 10 4 14 2 0 0-2 4-1 7 2 1 5 2 6 4-4 1-8 0-10-1-6 4-16 5-24 2-4-1-7-3-9-4z" fill="#7a9ccc" opacity="0.9" />
      <circle cx="12" cy="12" r="1.8" fill="#1a2a44" />
      <path d="M38 10c2-3 5-4 7-3" stroke="#7a9ccc" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

/**
 * Full-screen interlude that repeats the chapter title, surrounded by
 * the major memory objects with floating parallax-friendly placement.
 */
export function MemoryObjectsInterlude({ onNext }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <TitleScene onNext={onNext} autoAdvanceMs={2600} />
      <div className="memory-object" style={{ top: '16%', left: '8%', '--r': '-8deg' }}>
        <CameraIcon />
      </div>
      <div className="memory-object vinyl-record" style={{ top: '14%', right: '6%' }}>
        <VinylIcon />
      </div>
      <div className="memory-object" style={{ bottom: '22%', left: '10%', animationDelay: '1s' }}>
        <GiftIcon />
      </div>
      <div className="memory-object" style={{ bottom: '18%', right: '8%', animationDelay: '1.6s' }}>
        <PocketWatchIcon size={48} />
      </div>
    </div>
  )
}
