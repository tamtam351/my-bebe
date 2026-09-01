import { useEffect, useState } from 'react'
import SceneTransition from './SceneTransition.jsx'
import FloatingParticles from './FloatingParticles.jsx'
import { birthdayContent } from '../data/birthdayContent.js'

export default function FinalLetter() {
  const { finalLetter } = birthdayContent.messages
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    if (visibleCount >= finalLetter.paragraphs.length) return
    const t = setTimeout(() => setVisibleCount((c) => c + 1), 750)
    return () => clearTimeout(t)
  }, [visibleCount, finalLetter.paragraphs.length])

  const allRevealed = visibleCount >= finalLetter.paragraphs.length

  return (
    <SceneTransition className="final-scene" duration={1.8}>
      <FloatingParticles count={20} drifting={7} />

      <div className="final-letter-paper anim-fade-in-up">
        <p className="final-letter-greeting">{finalLetter.greeting}</p>

        <div className="letter-lines">
          {finalLetter.paragraphs.map((line, i) => (
            <p key={i} className={`letter-line ${i < visibleCount ? 'is-visible' : ''}`}>
              {line}
            </p>
          ))}
        </div>

        {allRevealed && (
          <>
            <p className="final-letter-closing anim-fade-in">{finalLetter.closing}</p>
            <p className="final-letter-micro anim-fade-in">
              {finalLetter.signoff} ♡
            </p>
          </>
        )}
      </div>
    </SceneTransition>
  )
}
