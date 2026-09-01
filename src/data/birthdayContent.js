// ============================================================
//  EDIT EVERYTHING ABOUT THE GIFT RIGHT HERE.
//  You do not need to touch any component or CSS file.
//  See README.md for a full walkthrough.
// ============================================================

export const birthdayContent = {
  // Her name, used on the dedication scene ("for ___")
  name: 'Amore Mioooo',

  // Her birthday — used ONLY to validate the lock screen input.
  // This is an experience, not real security.
  birthday: {
    day: 7,
    month: 9,
    year: 2010,
  },

  messages: {
    lock: {
      heading: "There's something waiting for you...",
      subheading: 'A little world made just for you ♡',
      instruction: 'Enter your birthday to unlock',
      wrong: ['Not quite, birthday girl... ♡', 'Try again.'],
      button: 'UNLOCK ♡',
    },

    welcome: {
      greeting: 'Heyyy',
      cta: 'TAP FOR SURPRISE',
    },

    chapterTitle: 'Once In A Lifetime',

    letter: {
      // Shown line by line. Keep paragraphs short — they reveal one at a time.
      paragraphs: [
        'Happy birthday, my love.',
        "I wanted to make something that was more than just a message...",
        'something you could actually open, explore, and keep.',
        'Every little memory means more to me than I probably know how to say.',
        'I hope this reminds you just how special you are.',
        'Happy birthday ❤️',
      ],
    },

    musicIntro: [
      'Of all the songs in the world...',
      'This one had to be here.',
      'Because somehow, certain songs just feel like certain people.',
    ],
    musicReveal: 'the soundtrack of you ♡',

    bridge: [
      'Some memories are pictures...',
      'Some are songs.',
      'But some people...',
      'become the memory.',
    ],

    envelope: {
      intro: "There's one more thing...",
      cta: 'Open it ♡',
    },

    finalLetter: {
      greeting: 'My love,',
      paragraphs: [
        "Another year of you exists now, and I still can't quite believe how lucky I am to know you.",
        "Every memory in this little world is real — the photos, the songs, the small ordinary moments that somehow became the ones I never want to forget.",
        "I hope this year brings you everything you deserve, and even the things you haven't let yourself ask for yet.",
        'Wherever you go, whatever you do — I hope you always know how loved you are.',
      ],
      closing: 'Happy birthday, my once in a lifetime.',
      signoff: 'Made with love, just for you.',
    },
  },

  music: {
    type: 'track',
    title: 'The soundtrack of you ♡',
    // The playlist link previously here was returning "Page not found" on
    // Spotify's side (deleted/private/typo'd), so the chapter now plays her
    // favorite song directly instead. Swap this back to a playlist URL any
    // time by setting type back to 'playlist' and filling spotifyPlaylistUrl.
    spotifyPlaylistUrl: '',
    featuredSong: {
      title: 'Treat You Better',
      artist: 'Shawn Mendes',
      spotifyTrackUrl: 'https://open.spotify.com/track/3QGsuHI8jO1Rx4JWLUh9jd',
    },
  },

  // Replace src with your real photos or video clips.
  //
  // IMPORTANT: put your files inside the "public" folder, NOT "src/assets" —
  // Vite only serves files at plain paths like "/assets/videos/1.mp4" when
  // they live in "public". Put clips in public/assets/videos/ and stills in
  // public/assets/photos/, then reference them below exactly as shown.
  //
  // - type: 'video' or 'photo'. If omitted, it's auto-detected from the file
  //   extension (.mp4/.webm/.mov/.m4v/.ogv = video, everything else = photo).
  // - rotation: degrees to tilt the polaroid.
  // - size: 'small' | 'medium' | 'large'.
  // - poster (video only, optional): a still image shown before the clip plays.
  // Videos autoplay muted + looped inside their polaroid frame, just like a
  // Live Photo — no sound, no controls, just movement.
  photos: [
    { src: '/assets/videos/1.mp4', rotation: -6, size: 'medium', caption: 'the beginning' },
    { src: '/assets/videos/2.mp4', rotation: 4, size: 'large', caption: 'that day ♡' },
    { src: '/assets/videos/3.mp4', rotation: -3, size: 'small', caption: 'youuuuu' },
    { src: '/assets/videos/4.mp4', rotation: 7, size: 'medium', caption: 'Amore mio' },
    { src: '/assets/videos/5.mp4', rotation: -8, size: 'small', caption: 'My favorite' },
    { src: '/assets/videos/6.mp4', rotation: 2, size: 'medium', caption: 'mi therapisttt' },
  ],
}
