export default function Logo({ inverted = false }) {
  return (
    <span className={`logo-mark${inverted ? ' logo-mark--inverted' : ''}`} aria-hidden="true">
      <span className="logo-mark__s">S</span>
      <span className="logo-mark__k">K</span>
    </span>
  );
}
