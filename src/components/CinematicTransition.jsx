import { useEffect, useState } from 'react'
import SceneTransition from './SceneTransition.jsx'
import FloatingParticles from './FloatingParticles.jsx'
import { birthdayContent } from '../data/birthdayContent.js'

const LINES = birthdayContent.messages.bridge

export default function CinematicTransition({ onNext }) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (step >= LINES.length) {
      const t = setTimeout(onNext, 1200)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setStep((s) => s + 1), 1500)
    return () => clearTimeout(t)
  }, [step, onNext])

  return (
    <SceneTransition duration={1.6}>
      <FloatingParticles count={12} drifting={3} />
      <div style={{ minHeight: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {step < LINES.length && (
          <p key={step} className="hand-text anim-fade-in-blur" style={{ fontSize: '1.7rem' }}>
            {LINES[step]}
          </p>
        )}
      </div>
    </SceneTransition>
  )
}
