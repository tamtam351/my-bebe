import { VinylIcon } from './MemoryObjects.jsx'
import { birthdayContent } from '../data/birthdayContent.js'

export default function MusicMemory() {
  const { featuredSong } = birthdayContent.music

  return (
    <div className="featured-song-card anim-fade-in-up">
      <div className="featured-song-vinyl">
        <VinylIcon size={40} className="vinyl-record is-spinning" />
      </div>
      <div>
        <div className="muted" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.85rem' }}>
          and of course...
        </div>
        <div className="featured-song-title">{featuredSong.title}</div>
        <div className="featured-song-artist">{featuredSong.artist} ♡</div>
      </div>
    </div>
  )
}
