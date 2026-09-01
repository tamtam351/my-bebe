import FloatingParticles from './FloatingParticles.jsx'
import SceneTransition from './SceneTransition.jsx'
import { birthdayContent } from '../data/birthdayContent.js'

export default function WelcomeScene({ onNext }) {
  return (
    <SceneTransition className="lock-scene" duration={1.6}>
      <FloatingParticles count={22} drifting={5} />
      <h1 className="script-title anim-fade-in-blur">{birthdayContent.messages.welcome.greeting}</h1>

      <button
        onClick={onNext}
        className="tap-hint anim-fade-in-up"
        style={{
          background: 'transparent',
          border: 'none',
          marginTop: 26,
          padding: '10px 18px',
          animation: 'softPulse 2.6s ease-in-out infinite',
        }}
      >
        {birthdayContent.messages.welcome.cta}
      </button>

      <div aria-hidden="true" style={{ position: 'relative', width: '100%', height: 60 }}>
        {['♡', '♡', '♡'].map((h, i) => (
          <span
            key={i}
            style={{
              position: 'absolute',
              left: `${38 + i * 12}%`,
              bottom: 0,
              color: 'var(--blue-soft)',
              fontSize: '0.9rem',
              opacity: 0.6,
              animation: `floatY ${3 + i}s ease-in-out ${i * 0.4}s infinite`,
            }}
          >
            {h}
          </span>
        ))}
      </div>
    </SceneTransition>
  )
}
