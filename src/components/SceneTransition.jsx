/** Wraps each scene in a page-turning scrapbook sheet. */
export default function SceneTransition({
  children,
  className = "",
  duration = 1.2,
}) {
  return (
    <div
      className={`scene page-sheet ${className}`}
      style={{
        "--page-turn-duration": `${duration}s`,
      }}
    >
      <span className="page-stamp" aria-hidden="true">
        for you ♡
      </span>
      {children}
    </div>
  );
}
