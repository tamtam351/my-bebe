import { useState } from 'react'
import SceneTransition from './SceneTransition.jsx'
import FloatingParticles from './FloatingParticles.jsx'
import BirthdayInput from './BirthdayInput.jsx'
import { birthdayContent } from '../data/birthdayContent.js'

const WRONG_MESSAGES = birthdayContent.messages.lock.wrong

export default function LockScreen({ onUnlocked }) {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [status, setStatus] = useState('idle') // idle | wrong | unlocking
  const [showMystery, setShowMystery] = useState(true)

  const { day: correctDay, month: correctMonth, year: correctYear } = birthdayContent.birthday

  const isComplete = day.length > 0 && month.length > 0 && year.length === 4

  const handleUnlock = () => {
    if (!isComplete || status === 'unlocking') return

    const correct =
      parseInt(day, 10) === correctDay &&
      parseInt(month, 10) === correctMonth &&
      parseInt(year, 10) === correctYear

    if (correct) {
      setStatus('unlocking')
      setTimeout(onUnlocked, 2100)
    } else {
      setStatus('wrong')
      setTimeout(() => setStatus('idle'), 900)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleUnlock()
  }

  return (
    <SceneTransition className="lock-scene">
      <FloatingParticles count={20} drifting={4} />
      <div className="lock-glow" aria-hidden="true" />

      {showMystery && (
        <p className="eyebrow-line anim-fade-in-up" style={{ marginBottom: 4 }}>
          {birthdayContent.messages.lock.heading}
        </p>
      )}

      <div
        className={[
          'padlock',
          status === 'unlocking' ? 'is-open is-glowing' : '',
          status === 'wrong' ? 'is-wrong' : '',
        ].join(' ')}
        role="img"
        aria-label="A locked padlock, waiting to be opened"
      >
        <div className="shackle" />
        <div className="lock-body" />
      </div>

      <p className="hand-text anim-fade-in-up" style={{ fontSize: '1.4rem', marginTop: 4, marginBottom: 8 }}>
        {birthdayContent.messages.lock.subheading}
      </p>

      <p className="muted" style={{ fontSize: '0.85rem', letterSpacing: '0.05em', marginBottom: 6 }}>
        {birthdayContent.messages.lock.instruction}
      </p>

      <div onKeyDown={handleKeyDown}>
        <BirthdayInput
          day={day}
          month={month}
          year={year}
          setDay={(v) => {
            setDay(v)
            setShowMystery(false)
          }}
          setMonth={setMonth}
          setYear={setYear}
          isShaking={status === 'wrong'}
          disabled={status === 'unlocking'}
        />
      </div>

      <div className="wrong-message" aria-live="polite">
        {status === 'wrong' && (
          <>
            <div>{WRONG_MESSAGES[0]}</div>
          </>
        )}
      </div>

      <button
        className="unlock-button"
        onClick={handleUnlock}
        disabled={!isComplete || status === 'unlocking'}
      >
        {birthdayContent.messages.lock.button}
      </button>

      <div className={`unlock-burst ${status === 'unlocking' ? 'is-active' : ''}`} aria-hidden="true" />
    </SceneTransition>
  )
}
