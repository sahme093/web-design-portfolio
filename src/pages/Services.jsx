import EmailPanel from '../components/EmailPanel.jsx';
import InvitationsPanel from '../components/InvitationsPanel.jsx';

const SERVICES = [
  { title: 'Custom website', text: "I set up the whole site for you: your photos, services, prices, colors, and any changes you'd like." },
  { title: 'Hosting and maintenance', text: 'Keeping your site online, secure, and running smoothly.' },
  { title: 'Small updates', text: 'Whenever you need them, like changing prices, hours, photos, or holiday closures. Just text me!' },
  { title: 'Your own domain', text: 'I register your domain name (like yourbusiness.com) in your name, so it always belongs to you.' },
  { title: 'Booking and request forms', text: 'Customers can send you their details and preferred times any time of day.' },
  { title: 'Support by text or email', text: 'Reach me directly. No ticket systems, no call centers.' },
];

const STEPS = [
  "We have a quick call to go over what you'd like changed or added.",
  'I send you a simple agreement and an invoice.',
  'I customize the site, usually within 1-2 weeks, depending on how quickly I get your photos and info.',
  'You review it and we make any final tweaks.',
  'Your site goes live on your own domain, and I set it up so Google can find it.',
];

export default function Services() {
  return (
    <>
      <section className="page-intro container">
        <span className="eyebrow">SERVICES</span>
        <h1 className="h1 h1--page">One person for your whole website, from design to upkeep.</h1>
      </section>

      <section className="container services">
        {SERVICES.map((s, i) => (
          <div className="service" key={s.title}>
            <span className="mono accent">{String(i + 1).padStart(2, '0')}</span>
            <span className="service__title">{s.title}</span>
            <span className="service__text">{s.text}</span>
          </div>
        ))}
      </section>

      <div className="container-inset section-gap-bottom">
        <InvitationsPanel text="Fully customizable interactive invitations for your engagement or wedding, designed around your story, your colors and your style. Your guests open them online, and they'll remember them long after the party." />
      </div>

      <section className="process">
        <div className="process__head">
          <span className="eyebrow eyebrow--pink">HOW IT WORKS</span>
          <h2 className="process__title">From first call to live site in about two weeks</h2>
        </div>
        <ol className="steps">
          {STEPS.map((text, i) => (
            <li className={`step${i === STEPS.length - 1 ? ' step--final' : ''}`} key={i}>
              <span className="mono step__num">
                <span className="hide-mobile">STEP </span>{i + 1}
              </span>
              <span className="step__text">{text}</span>
            </li>
          ))}
        </ol>
      </section>

      <div className="container-inset section-gap-y">
        <EmailPanel title="Let's start with a quick call" text="Email me and we'll find 15 minutes that suit you." />
      </div>
    </>
  );
}
