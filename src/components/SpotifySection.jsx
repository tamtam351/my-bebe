import { useEffect, useState } from 'react'
import SceneTransition from './SceneTransition.jsx'
import FloatingParticles from './FloatingParticles.jsx'
import SpotifyPlayer from './SpotifyPlayer.jsx'
import { VinylIcon, CameraIcon, StarIcon } from './MemoryObjects.jsx'
import { birthdayContent } from '../data/birthdayContent.js'

const INTRO_LINES = birthdayContent.messages.musicIntro
const { spotifyPlaylistUrl, featuredSong } = birthdayContent.music

// Prefer a playlist if one is configured; otherwise fall back to embedding
// the featured song directly. This lets the chapter work whether you have
// a full playlist link or just her one favorite track.
const EMBED_URL = spotifyPlaylistUrl || featuredSong.spotifyTrackUrl
const IS_SINGLE_TRACK = !spotifyPlaylistUrl && !!featuredSong.spotifyTrackUrl

export default function SpotifySection({ onNext }) {
  const [introStep, setIntroStep] = useState(0)
  const [showPlayer, setShowPlayer] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (introStep < INTRO_LINES.length) {
      const t = setTimeout(() => setIntroStep((s) => s + 1), 1600)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setShowPlayer(true), 900)
    return () => clearTimeout(t)
  }, [introStep])

  return (
    <SceneTransition className="music-scene" duration={1.4}>
      <FloatingParticles count={14} drifting={3} />

      {!showPlayer && (
        <div style={{ minHeight: 120, display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'center' }}>
          {INTRO_LINES.slice(0, introStep).map((line, i) => (
            <p key={i} className="eyebrow-line anim-fade-in-up">
              {line}
            </p>
          ))}
        </div>
      )}

      {showPlayer && (
        <>
          <p className="script-title anim-fade-in-blur" style={{ fontSize: '2rem', marginBottom: 6 }}>
            {birthdayContent.messages.musicReveal}
          </p>

          {IS_SINGLE_TRACK && (
            <div className="muted anim-fade-in-up" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.95rem', marginBottom: 4 }}>
              {featuredSong.title} — {featuredSong.artist} ♡
            </div>
          )}

          <div className="music-frame anim-fade-in-up">
            <div className={`music-frame-glow ${isPlaying ? 'is-active' : ''}`} aria-hidden="true" />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 12 }}>
              <VinylIcon size={46} className={`vinyl-record ${isPlaying ? 'is-spinning' : 'is-paused'}`} />
              <div aria-hidden="true"><CameraIcon size={34} /></div>
              <div aria-hidden="true" style={{ opacity: 0.7 }}><StarIcon size={10} /></div>
            </div>

            <SpotifyPlayer url={EMBED_URL} onPlaybackChange={setIsPlaying} />

            <div className={`equalizer ${isPlaying ? 'is-playing' : ''}`} aria-hidden="true">
              <span /><span /><span /><span /><span />
            </div>
          </div>

          <button
            onClick={onNext}
            className="tap-hint anim-fade-in"
            style={{ background: 'transparent', border: 'none', marginTop: 20 }}
          >
            continue ♡
          </button>
        </>
      )}
    </SceneTransition>
  )
}
