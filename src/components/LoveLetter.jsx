import { useEffect, useState } from "react";
import SceneTransition from "./SceneTransition.jsx";
import FloatingParticles from "./FloatingParticles.jsx";
import {
  StarIcon,
  CameraIcon,
  VinylIcon,
  NeonHeartIcon,
} from "./MemoryObjects.jsx";
import { birthdayContent } from "../data/birthdayContent.js";

export default function LoveLetter({ onNext }) {
  const paragraphs = birthdayContent.messages.letter.paragraphs;
  const [visibleCount, setVisibleCount] = useState(0);
  const [showObjects, setShowObjects] = useState(false);

  // Use first photo/video as the framed memory if available
  const framed = birthdayContent.photos?.[0];

  useEffect(() => {
    if (visibleCount >= paragraphs.length) {
      const t = setTimeout(() => setShowObjects(true), 500);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setVisibleCount((c) => c + 1), 700);
    return () => clearTimeout(t);
  }, [visibleCount, paragraphs.length]);

  return (
    <SceneTransition className="letter-scene" duration={1.4}>
      <FloatingParticles count={10} drifting={2} />

      {/* floating neon hearts */}
      <div
        className="neon-heart"
        style={{ top: "8%", left: "10%", animationDelay: "0.2s" }}
      >
        <NeonHeartIcon size={28} />
      </div>
      <div
        className="neon-heart"
        style={{ top: "12%", right: "12%", animationDelay: "1s" }}
      >
        <NeonHeartIcon size={24} color="#536DFF" />
      </div>

      <div
        className="letter-paper anim-fade-in-up"
        style={{ position: "relative" }}
      >
        <div className="letter-lines">
          {paragraphs.map((line, i) => (
            <p
              key={i}
              className={`letter-line ${i < visibleCount ? "is-visible" : ""}`}
            >
              {line}
            </p>
          ))}
        </div>

        {showObjects && (
          <>
            <div
              style={{
                position: "absolute",
                bottom: 10,
                left: 12,
                opacity: 0.75,
              }}
              className="anim-fade-in"
            >
              <StarIcon size={9} color="#c6a96b" />
            </div>
            <span
              className="letter-signoff anim-fade-in"
              style={{ display: "block" }}
            >
              — always ♡
            </span>
          </>
        )}

        {/* Gold framed photo peeking out like the video Moment scene */}
        {showObjects && framed && (
          <div className="gold-frame anim-fade-in">
            {framed.src?.match(/\.(mp4|webm|mov|m4v|ogv)$/i) ? (
              <video src={framed.src} muted loop playsInline autoPlay />
            ) : (
              <img src={framed.src} alt="" />
            )}
          </div>
        )}
      </div>

      {/* Vintage camera + vinyl accents */}
      {showObjects && (
        <>
          <div
            className="memory-object letter-camera anim-fade-in"
            style={{
              position: "absolute",
              bottom: "14%",
              left: "6%",
              animationDelay: "0.3s",
            }}
          >
            <CameraIcon size={40} />
          </div>
          <div
            className="memory-object letter-vinyl vinyl-record anim-fade-in"
            style={{
              position: "absolute",
              bottom: "12%",
              right: "8%",
              animationDelay: "0.6s",
            }}
          >
            <VinylIcon size={44} />
          </div>
        </>
      )}

      {showObjects && (
        <button
          onClick={onNext}
          className="tap-hint letter-continue anim-fade-in"
          style={{
            background: "transparent",
            border: "none",
            marginTop: 28,
            position: "relative",
            zIndex: 5,
          }}
        >
          continue ♡
        </button>
      )}
    </SceneTransition>
  );
}
