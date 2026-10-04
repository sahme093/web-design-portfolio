import EmailPanel from '../components/EmailPanel.jsx';
import Portrait from '../components/Portrait.jsx';

export default function About() {
  return (
    <>
      <section className="about container">
        <div className="about__photo">
          <div className="about__tab" aria-hidden="true">
            <span>S</span>
            <span>K</span>
          </div>
          <Portrait />
        </div>
        <div className="about__copy">
          <span className="eyebrow">ABOUT</span>
          <h1 className="h1 h1--about">Hi, I'm Salma.</h1>
          <div className="about__text">
            <p>
              I graduated from University of California, Riverside with a Bachelor's degree in Computer Science. I
              build websites for small businesses that need a good site but don't have time to manage one, and
              customizable, memorable digital engagement and wedding invitations for couples.
            </p>
            <p>
              You deal with me from the first call to launch day, and after. I design the site around your
              business, keep it running, and make changes when you text or email me.
            </p>
          </div>
          <dl className="facts">
            <div className="fact">
              <dt>EDUCATION</dt>
              <dd>B.S. Computer Science, UC Riverside</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="container-inset section-gap-bottom">
        <EmailPanel title="Small businesses" text="I'd love to hear about your business." />
      </div>
    </>
  );
}
