import { useState } from 'react'
import SceneTransition from './SceneTransition.jsx'
import FloatingParticles from './FloatingParticles.jsx'
import { birthdayContent } from '../data/birthdayContent.js'

export default function Envelope({ onOpened }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    if (isOpen) return
    setIsOpen(true)
    setTimeout(onOpened, 1600)
  }

  return (
    <SceneTransition className="envelope-scene" duration={1.6}>
      <FloatingParticles count={16} drifting={4} />

      <h1 className="script-title anim-fade-in-blur" style={{ fontSize: 'clamp(2rem, 9vw, 2.8rem)' }}>
        {birthdayContent.messages.chapterTitle}
      </h1>
      <p className="hand-text anim-fade-in-up" style={{ fontSize: '1.25rem', marginTop: -4 }}>
        for {birthdayContent.name}
      </p>

      <p className="eyebrow-line anim-fade-in-up" style={{ marginTop: 14 }}>
        {birthdayContent.messages.envelope.intro}
      </p>

      <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', marginTop: 8 }}>
        {!isOpen && (
          <span className="envelope-prompt anim-fade-in" aria-hidden="true">
            Press the Envelope
          </span>
        )}

        <button
          className={`envelope anim-fade-in-up ${isOpen ? 'is-open' : ''}`}
          onClick={handleOpen}
          aria-label="Open your envelope"
        >
          <div className="envelope-letter-peek" />
          <div className="envelope-body" />
          <div className="envelope-flap" />
          <div className="envelope-seal">♡</div>
        </button>
      </div>

      {!isOpen && (
        <p className="tap-hint" style={{ animation: 'softPulse 2.4s ease-in-out infinite', marginTop: 8 }}>
          {birthdayContent.messages.envelope.cta}
        </p>
      )}
    </SceneTransition>
  )
}
