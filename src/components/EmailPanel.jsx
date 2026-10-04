import { EMAIL, MAILTO } from '../constants.js';

export default function EmailPanel({ title, text }) {
  return (
    <section className="split-panel email-panel">
      <div className="split-panel__light">
        <h2 className="h2">{title}</h2>
        {text && <p className="muted">{text}</p>}
      </div>
      <a href={MAILTO} className="split-panel__burgundy email-panel__link">
        <span className="eyebrow-sm">EMAIL</span>
        <span className="email-panel__address">{EMAIL}</span>
      </a>
    </section>
  );
}
