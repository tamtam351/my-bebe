# Once In A Lifetime 🕯️

A cinematic, interactive birthday gift website. She unlocks it with her birthday, then moves
through a private little world: a photo scrapbook, a handwritten letter, her Spotify playlist,
and a final envelope with a closing letter.

Built with React + Vite + plain CSS. No Tailwind, no UI kit — everything is handcrafted.

## 1. Install

You need [Node.js](https://nodejs.org) 18+ installed. Then, inside this folder:

```bash
npm install
```

## 2. Run it locally

```bash
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`). Resize your browser or open it on
your phone to see the mobile version.

## 3. Everything you'll want to edit lives in one file

Open **`src/data/birthdayContent.js`**. You do not need to touch any component or CSS file.

### Her name
```js
name: 'Amore Mioooo',
```
Shown on the dedication scene ("for ___") right before the final envelope.

### Her birthday (the lock)
```js
birthday: { day: 7, month: 9, year: 2010 },
```
This is what she types in on the lock screen. It's a personal touch, not real security —
validation happens in the browser, which is fine for a birthday gift.

### Her photos or video clips
The collage supports photos, video clips, or a mix of both — the scrapbook doesn't care which.

**Put your files in the `public` folder — not `src/assets`.** Vite only serves files at plain
paths like `/assets/videos/1.mp4` when they live in `public/`; anything inside `src/` needs to
be imported as a module instead, which the content file doesn't do. So:

- Video clips go in `public/assets/videos/`
- Photo stills go in `public/assets/photos/`

Then list them in the `photos` array in `src/data/birthdayContent.js`:
```js
photos: [
  { src: '/assets/videos/1.mp4', rotation: -6, size: 'medium', caption: 'the beginning' },
  { src: '/assets/photos/2.jpg', rotation: 4, size: 'large', caption: 'that day ♡' },
  ...
]
```
Note the path starts with `/assets/...` (no `public` in the path — Vite serves everything in
`public/` as if it were the site's root).

- `rotation`: how many degrees the polaroid tilts (try values between -10 and 10)
- `size`: `'small'`, `'medium'`, or `'large'`
- `caption`: short handwritten note under the photo (optional)
- `type`: usually you can leave this out — video vs. photo is auto-detected from the file
  extension (`.mp4`, `.webm`, `.mov`, `.m4v`, `.ogv` = video; anything else = photo). Set it
  explicitly (`'video'` or `'photo'`) if a filename doesn't have a normal extension.
- `poster` (video only, optional): a still image shown for a split second before the clip loads.

Video clips autoplay **muted and looped** inside their polaroid frame — like a Live Photo, no
sound, no controls, just quiet movement. Keep clips short (2–6 seconds) and lightweight
(compressed, ideally under a few MB each) so the collage stays smooth on her phone.

If a file is missing or fails to load, the scene shows a tasteful "add photo"/"add video"
placeholder instead of breaking.

### The love letter (mid-experience)
```js
messages.letter.paragraphs
```
Each entry is a line that reveals one at a time. Keep lines short — they read like handwriting,
not paragraphs of prose.

### The music chapter
```js
music: {
  spotifyPlaylistUrl: '', // leave empty to just play the featured song below
  featuredSong: {
    title: 'Treat You Better',
    artist: 'Shawn Mendes',
    spotifyTrackUrl: 'https://open.spotify.com/track/3QGsuHI8jO1Rx4JWLUh9jd',
  },
},
```
This uses Spotify's official embed — no music files are downloaded or hosted. If Spotify fails
to load (offline, blocked, the link is wrong, etc.), a graceful fallback card appears with a
link to open the song/playlist directly, and the rest of the site keeps working normally.

**Playlist vs. single song:** if `spotifyPlaylistUrl` is filled in, that plays. If it's left
empty (as it is now), the chapter embeds `featuredSong.spotifyTrackUrl` directly instead — so
you can use just her one favorite song without needing a whole playlist. To switch back to a
playlist later, paste a real `open.spotify.com/playlist/...` link into `spotifyPlaylistUrl`.

If you ever see Spotify's own "Page not found" inside the embed, it means the link itself is
broken (deleted, made private, or mistyped) — open the link in a normal browser tab first to
confirm it works before pasting it in here.

### The final letter (the emotional climax, after the envelope)
```js
messages.finalLetter
```
Has a `greeting`, an array of `paragraphs`, a `closing` line, and a `signoff`. This is the last
thing she reads, so take your time with it.

### Colors
All colors are CSS variables at the top of `src/styles/globals.css`:
```css
--bg-main: #050319;
--blue-glow: #536dff;
--gold: #c6a96b;
--paper: #f5f0e7;
```
Change these to shift the whole palette without touching any component.

## 4. The experience, scene by scene

`Loading → Lock → Welcome → Title → Photo Collage → Love Letter → Memory Objects →
Music → Cinematic Bridge → Envelope → Final Letter`

Scene order and transitions are controlled centrally in `src/App.jsx` — you shouldn't need to
touch this unless you want to reorder or remove a scene.

## 5. Deploying it so she can actually open it

The simplest free options:

**Vercel**
```bash
npm i -g vercel
vercel
```

**Netlify** — drag-and-drop the `dist/` folder (after `npm run build`) into
[app.netlify.com/drop](https://app.netlify.com/drop).

**GitHub Pages** — build with `npm run build`, then deploy the `dist/` folder using a static
hosting action or `gh-pages`.

Once deployed, you'll get a link — send that to her instead of the code.

## 6. A few notes

- Works on both phones and desktop. On desktop, the experience stays a phone-sized cinematic
  "window" centered on a dark atmospheric background, rather than stretching full width.
- Respects `prefers-reduced-motion` — animations calm down automatically if she has that
  setting enabled.
- No tracking, no backend, no external services beyond the Spotify embed itself.
