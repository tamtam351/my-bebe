import { useEffect, useRef, useState } from 'react'

const ENTRANCE_CLASSES = [
  'polaroid--enter-up',
  'polaroid--enter-left',
  'polaroid--enter-scale',
  'polaroid--enter-rotate',
  'polaroid--enter-fade',
]
const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov', '.m4v', '.ogv']

function isVideoSrc(src = '') {
  const clean = src.split('?')[0].toLowerCase()
  return VIDEO_EXTENSIONS.some((ext) => clean.endsWith(ext))
}

export default function ScrapbookPhoto({ photo, index, style }) {
  const [visible, setVisible] = useState(false)
  const [mediaFailed, setMediaFailed] = useState(false)
  const videoRef = useRef(null)

  const isVideo = photo.type === 'video' || (photo.type !== 'photo' && isVideoSrc(photo.src))

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 220 + index * 240)
    return () => clearTimeout(t)
  }, [index])

  useEffect(() => {
    if (visible && isVideo && videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [visible, isVideo])

  const entrance = ENTRANCE_CLASSES[index % ENTRANCE_CLASSES.length]

  return (
    <div
      className={`polaroid polaroid--${photo.size || 'medium'} ${visible ? `is-visible ${entrance}` : ''}`}
      style={{
        '--r': `${photo.rotation}deg`,
        transform: `rotate(${photo.rotation}deg)`,
        ...style,
      }}
      onClick={() => videoRef.current?.play().catch(() => {})}
    >
      {!mediaFailed && isVideo && (
        <video
          ref={videoRef}
          src={photo.src}
          poster={photo.poster}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          onError={() => setMediaFailed(true)}
          aria-label={photo.caption || 'A shared memory'}
        />
      )}

      {!mediaFailed && !isVideo && (
        <img
          src={photo.src}
          alt={photo.caption || 'A shared memory'}
          onError={() => setMediaFailed(true)}
          loading="lazy"
        />
      )}

      {mediaFailed && (
        <div className="polaroid-placeholder">add {isVideo ? 'video' : 'photo'}</div>
      )}

      {photo.caption && <div className="polaroid-caption">{photo.caption}</div>}
    </div>
  )
}
