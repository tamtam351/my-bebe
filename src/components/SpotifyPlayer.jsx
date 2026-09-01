import { useEffect, useRef, useState } from 'react'

let apiPromise = null

function loadSpotifyIframeApi() {
  if (apiPromise) return apiPromise

  apiPromise = new Promise((resolve, reject) => {
    if (window.Spotify && window.Spotify.Iframe) {
      resolve(window.Spotify.Iframe)
      return
    }

    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      resolve(IFrameAPI)
    }

    const script = document.createElement('script')
    script.src = 'https://open.spotify.com/embed/iframe-api/v1'
    script.async = true
    script.onerror = () => reject(new Error('Spotify embed script failed to load'))
    document.body.appendChild(script)

    setTimeout(() => reject(new Error('Spotify embed timed out')), 6000)
  })

  return apiPromise
}

/**
 * Renders Spotify's official embed (playlist or track) and reports
 * playback state upward so decorative UI (vinyl, equalizer) can react.
 * Never modifies or re-hosts the actual audio — playback happens
 * entirely inside Spotify's own iframe.
 */
export default function SpotifyPlayer({ url, height = 152, onPlaybackChange }) {
  const containerRef = useRef(null)
  const [failed, setFailed] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!url) return
    let controller = null
    let cancelled = false

    loadSpotifyIframeApi()
      .then((IFrameAPI) => {
        if (cancelled || !containerRef.current) return
        const element = document.createElement('div')
        containerRef.current.innerHTML = ''
        containerRef.current.appendChild(element)

        IFrameAPI.createController(
          element,
          { uri: spotifyUrlToUri(url), width: '100%', height },
          (createdController) => {
            controller = createdController
            setReady(true)
            controller.addListener('playback_update', (e) => {
              onPlaybackChange?.(!e?.data?.isPaused && !!e?.data?.isBuffering === false && !e?.data?.isPaused)
            })
            controller.addListener('ready', () => setReady(true))
          }
        )
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })

    return () => {
      cancelled = true
      controller?.removeListener?.('playback_update')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  if (failed) {
    return (
      <div className="spotify-fallback">
        <span>Your soundtrack is waiting on Spotify ♡</span>
        <a href={url} target="_blank" rel="noreferrer">
          Open playlist
        </a>
      </div>
    )
  }

  return (
    <div className="spotify-embed-wrap">
      <div ref={containerRef} style={{ minHeight: ready ? undefined : height }} />
    </div>
  )
}

function spotifyUrlToUri(url) {
  // Converts an open.spotify.com URL into a spotify: URI the iFrame API expects.
  try {
    const parsed = new URL(url)
    const [, type, id] = parsed.pathname.split('/')
    if (!type || !id) return url
    return `spotify:${type}:${id}`
  } catch {
    return url
  }
}
