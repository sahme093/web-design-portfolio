import { INVITATION_MAILTO } from '../constants.js';

export default function InvitationsPanel({ text }) {
  return (
    <section className="split-panel invitations">
      <div className="split-panel__burgundy">
        <span className="eyebrow eyebrow--light">ALSO FOR COUPLES</span>
        <h2 className="invitations__title">Engagement &amp; wedding invitations</h2>
      </div>
      <div className="split-panel__light invitations__body">
        <p className="lead">{text}</p>
        <a href={INVITATION_MAILTO} className="btn btn--ink">ASK ABOUT INVITATIONS</a>
      </div>
    </section>
  );
}
