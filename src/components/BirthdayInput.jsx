import { useRef } from 'react'

export default function BirthdayInput({ day, month, year, setDay, setMonth, setYear, isShaking, disabled }) {
  const dayRef = useRef(null)
  const monthRef = useRef(null)
  const yearRef = useRef(null)

  const handleChange = (value, setter, maxLen, nextRef) => {
    const digitsOnly = value.replace(/\D/g, '').slice(0, maxLen)
    setter(digitsOnly)
    if (digitsOnly.length === maxLen && nextRef) {
      nextRef.current?.focus()
    }
  }

  const handleKeyDown = (e, value, prevRef) => {
    if (e.key === 'Backspace' && value === '' && prevRef) {
      prevRef.current?.focus()
    }
  }

  return (
    <div className={`birthday-inputs ${isShaking ? 'is-shaking' : ''}`}>
      <input
        ref={dayRef}
        type="text"
        inputMode="numeric"
        aria-label="Birth day"
        placeholder="DD"
        maxLength={2}
        value={day}
        disabled={disabled}
        onChange={(e) => handleChange(e.target.value, setDay, 2, monthRef)}
        onKeyDown={(e) => handleKeyDown(e, day, null)}
      />
      <input
        ref={monthRef}
        type="text"
        inputMode="numeric"
        aria-label="Birth month"
        placeholder="MM"
        maxLength={2}
        value={month}
        disabled={disabled}
        onChange={(e) => handleChange(e.target.value, setMonth, 2, yearRef)}
        onKeyDown={(e) => handleKeyDown(e, month, dayRef)}
      />
      <input
        ref={yearRef}
        type="text"
        inputMode="numeric"
        aria-label="Birth year"
        placeholder="YYYY"
        maxLength={4}
        value={year}
        disabled={disabled}
        onChange={(e) => handleChange(e.target.value, setYear, 4, null)}
        onKeyDown={(e) => handleKeyDown(e, year, monthRef)}
      />
    </div>
  )
}
