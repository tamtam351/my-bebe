import { useEffect } from 'react'
import FloatingParticles from './FloatingParticles.jsx'
import SceneTransition from './SceneTransition.jsx'
import { birthdayContent } from '../data/birthdayContent.js'

export default function TitleScene({ onNext, autoAdvanceMs = 2200, subtitle }) {
  useEffect(() => {
    if (!onNext) return
    const t = setTimeout(onNext, autoAdvanceMs)
    return () => clearTimeout(t)
  }, [onNext, autoAdvanceMs])

  return (
    <SceneTransition duration={1.6}>
      <FloatingParticles count={18} drifting={4} />
      <h1 className="script-title anim-fade-in-blur">{birthdayContent.messages.chapterTitle}</h1>
      {subtitle && (
        <p className="hand-text anim-fade-in-up" style={{ marginTop: 10, fontSize: '1.3rem' }}>
          {subtitle}
        </p>
      )}
    </SceneTransition>
  )
}
