import ScrapbookPhoto from './ScrapbookPhoto.jsx'
import FloatingParticles from './FloatingParticles.jsx'
import SceneTransition from './SceneTransition.jsx'
import {
  BalloonIcon,
  CameraIcon,
  StarIcon,
  NeonHeartIcon,
  PlanetIcon,
  WhaleIcon,
} from './MemoryObjects.jsx'
import { birthdayContent } from '../data/birthdayContent.js'

// Loose overlapping scrapbook layout (percentage-based) for up to 6 photos —
// denser and more "pasted on a page" than a clean grid.
const LAYOUT = [
  { top: '3%', left: '4%' },
  { top: '1%', left: '48%' },
  { top: '26%', left: '2%' },
  { top: '22%', left: '50%' },
  { top: '48%', left: '10%' },
  { top: '46%', left: '46%' },
]

export default function PhotoCollage({ onNext }) {
  const photos = birthdayContent.photos.slice(0, 6)

  return (
    <SceneTransition className="collage-scene" duration={1.4}>
      <FloatingParticles count={12} drifting={3} />

      <div className="collage-board">
        {photos.map((photo, i) => (
          <ScrapbookPhoto
            key={photo.src}
            photo={photo}
            index={i}
            style={LAYOUT[i % LAYOUT.length]}
          />
        ))}

        {/* washi / masking tape accents */}
        <div className="tape" style={{ top: '0%', left: '16%', transform: 'rotate(-16deg)' }} />
        <div className="tape tape--pattern" style={{ top: '18%', left: '62%', transform: 'rotate(12deg)' }} />
        <div className="tape" style={{ top: '44%', left: '28%', transform: 'rotate(-8deg)' }} />
        <div className="tape tape--pattern" style={{ top: '58%', left: '70%', transform: 'rotate(6deg)' }} />

        {/* Neon glowing hearts overlaid like the video */}
        <div className="neon-heart" style={{ top: '18%', left: '38%', animationDelay: '0s' }}>
          <NeonHeartIcon size={42} />
        </div>
        <div className="neon-heart" style={{ top: '42%', left: '22%', animationDelay: '0.8s' }}>
          <NeonHeartIcon size={34} color="#536DFF" />
        </div>
        <div className="neon-heart" style={{ top: '55%', left: '55%', animationDelay: '1.4s' }}>
          <NeonHeartIcon size={38} />
        </div>

        {/* sticker hearts */}
        <span className="sticker-heart" style={{ top: '8%', left: '86%' }}>♡</span>
        <span className="sticker-heart" style={{ top: '62%', left: '4%', animationDelay: '1.2s' }}>♡</span>

        {/* celestial decorations matching the video Journey page */}
        <div className="decor-planet" style={{ top: '2%', left: '78%', animationDelay: '0.3s' }}>
          <PlanetIcon size={32} />
        </div>
        <div className="decor-planet" style={{ bottom: '8%', left: '2%', animationDelay: '1.1s' }}>
          <PlanetIcon size={26} />
        </div>
        <div className="decor-whale" style={{ bottom: '4%', right: '4%', animationDelay: '0.6s' }}>
          <WhaleIcon size={44} />
        </div>

        <div style={{ position: 'absolute', top: '68%', left: '82%', opacity: 0.8 }}>
          <StarIcon size={10} />
        </div>
        <div style={{ position: 'absolute', top: '4%', left: '90%', opacity: 0.65 }}>
          <StarIcon size={8} />
        </div>

        <div className="memory-object" style={{ bottom: '0%', left: '2%', animationDelay: '0.4s' }}>
          <BalloonIcon size={22} />
        </div>
        <div className="memory-object" style={{ bottom: '2%', right: '8%', animationDelay: '1.1s' }}>
          <CameraIcon size={36} />
        </div>
      </div>

      <button
        onClick={onNext}
        className="tap-hint"
        style={{
          background: 'transparent',
          border: 'none',
          marginTop: 10,
          animation: 'softPulse 2.6s ease-in-out infinite',
        }}
      >
        continue ♡
      </button>
    </SceneTransition>
  )
}
