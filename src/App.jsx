import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen.jsx'
import LockScreen from './components/LockScreen.jsx'
import WelcomeScene from './components/WelcomeScene.jsx'
import TitleScene from './components/TitleScene.jsx'
import PhotoCollage from './components/PhotoCollage.jsx'
import LoveLetter from './components/LoveLetter.jsx'
import { MemoryObjectsInterlude } from './components/MemoryObjects.jsx'
import SpotifySection from './components/SpotifySection.jsx'
import CinematicTransition from './components/CinematicTransition.jsx'
import Envelope from './components/Envelope.jsx'
import FinalLetter from './components/FinalLetter.jsx'

// The full emotional journey, in order.
const SCENES = [
  'loading',
  'lock',
  'welcome',
  'title',
  'collage',
  'letter',
  'objects',
  'music',
  'transition',
  'envelope',
  'final',
]

export default function App() {
  const [scene, setScene] = useState('loading')

  const goTo = (next) => setScene(next)
  const nextFrom = (current) => {
    const idx = SCENES.indexOf(current)
    return SCENES[Math.min(idx + 1, SCENES.length - 1)]
  }
  const advance = (current) => goTo(nextFrom(current))

  return (
    <div className="app-shell">
      <div className="stage">
        {scene === 'loading' && <LoadingScreen onDone={() => advance('loading')} />}
        {scene === 'lock' && <LockScreen onUnlocked={() => advance('lock')} />}
        {scene === 'welcome' && <WelcomeScene onNext={() => advance('welcome')} />}
        {scene === 'title' && <TitleScene onNext={() => advance('title')} />}
        {scene === 'collage' && <PhotoCollage onNext={() => advance('collage')} />}
        {scene === 'letter' && <LoveLetter onNext={() => advance('letter')} />}
        {scene === 'objects' && <MemoryObjectsInterlude onNext={() => advance('objects')} />}
        {scene === 'music' && <SpotifySection onNext={() => advance('music')} />}
        {scene === 'transition' && <CinematicTransition onNext={() => advance('transition')} />}
        {scene === 'envelope' && <Envelope onOpened={() => advance('envelope')} />}
        {scene === 'final' && <FinalLetter />}
      </div>
    </div>
  )
}
