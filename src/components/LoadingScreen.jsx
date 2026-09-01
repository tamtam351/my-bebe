import { useEffect } from 'react'
import SceneTransition from './SceneTransition.jsx'

export default function LoadingScreen({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1600)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <SceneTransition className="loading-scene" duration={0.8}>
      <div className="loading-star" />
      <p className="eyebrow-line">preparing something for you...</p>
    </SceneTransition>
  )
}
