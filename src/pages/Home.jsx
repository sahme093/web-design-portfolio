import { Link } from 'react-router-dom';
import EmailPanel from '../components/EmailPanel.jsx';
import InvitationsPanel from '../components/InvitationsPanel.jsx';
import Portrait from '../components/Portrait.jsx';
import ReviewForm from '../components/ReviewForm.jsx';
import { MAILTO } from '../constants.js';

const BENEFITS = [
  { title: 'A site made for you', text: "Your photos, services, prices and colors, plus any changes you'd like." },
  { title: 'Hosting and care', text: 'I keep your site online, secure and running smoothly.' },
  { title: 'Updates on request', text: 'Prices, hours, photos or holiday closures. Just text or email me.' },
];

export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero__copy">
          <span className="eyebrow">
            WEBSITES · <span className="hide-mobile">ENGAGEMENT &amp; </span>WEDDING INVITATIONS
          </span>
          <h1 className="h1">I build your website and look after it, so you don't have to.</h1>
          <p className="hero__lead">
            A custom site with your photos, services and colors. I keep it online and secure, and make small
            updates whenever you need them.
          </p>
          <div className="btn-row">
            <a href={MAILTO} className="btn btn--burgundy">EMAIL ME</a>
            <Link to="/services" className="btn btn--outline">SEE SERVICES</Link>
          </div>
        </div>
        <div className="hero__cards">
          <Link to="/services" className="hero__card">
            <span className="mono accent">01</span>
            <div className="hero__card-text">
              <span className="hero__card-title">Websites</span>
              <span className="hero__card-sub">For small businesses of any kind</span>
            </div>
          </Link>
          <a href={MAILTO} className="hero__card hero__card--burgundy">
            <span className="mono">02</span>
            <div className="hero__card-text">
              <span className="hero__card-title">Engagement &amp; wedding invitations</span>
              <span className="hero__card-sub">Fully customizable and made to be remembered</span>
            </div>
          </a>
        </div>
      </section>

      <section className="band">
        <div className="band__head">
          <h2 className="h2">What you get</h2>
          <Link to="/services" className="text-link accent hide-mobile">ALL SERVICES →</Link>
        </div>
        <div className="benefits">
          {BENEFITS.map((b, i) => (
            <div className="benefit" key={b.title}>
              <span className="mono accent">{String(i + 1).padStart(2, '0')}</span>
              <span className="benefit__title">{b.title}</span>
              <span className="benefit__text">{b.text}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="container-inset section-gap-top">
        <InvitationsPanel text="Fully customizable interactive invitations for your engagement or wedding, designed around your story, your colors and your style. Your guests open them online, and they'll remember them long after the party." />
      </div>

      <section className="intro container">
        <Portrait className="intro__photo" />
        <div className="intro__copy">
          <span className="eyebrow">HI, I'M SALMA</span>
          <p className="intro__text">
            I'm a web designer with a computer science degree from UC Riverside. I build websites for small
            businesses and customizable, memorable engagement and wedding invitations for couples.
          </p>
          <Link to="/about" className="text-link hide-mobile">MORE ABOUT ME →</Link>
        </div>
      </section>

      <section id="reviews" className="band band--center">
        <ReviewForm />
      </section>

      <div className="container-inset section-gap-bottom">
        <EmailPanel title="Ready for a website?" text="Tell me about your business and I'll reply within a day." />
      </div>
    </>
  );
}
