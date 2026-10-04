import { useState } from 'react';
import { WEB3FORMS_KEY } from '../constants.js';

const SERVICES = ['Website for a small business', 'Engagement or wedding invitation'];

export default function ReviewForm() {
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const reset = () => {
    setName('');
    setService('');
    setRating(0);
    setReview('');
    setStatus('idle');
  };

  // Reviews are emailed to me through Web3Forms; I approve them before they go on the site.
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!rating || status === 'sending') return;
    if (e.target.botcheck.checked) return;
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New review from ${name} (${rating}/5)`,
          from_name: 'Website review form',
          name,
          service,
          rating: `${rating}/5`,
          review,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="review">
      <div className="review__head">
        <span className="eyebrow-sm">WORKED WITH ME?</span>
        <span className="review__title">Leave a review</span>
      </div>
      {status === 'sent' ? (
        <div className="review__body">
          <p className="lead">Thank you! Your review was sent. It will appear on the site once I've approved it.</p>
          <button type="button" className="btn btn--ink" onClick={reset}>WRITE ANOTHER</button>
        </div>
      ) : (
        <form className="review__body" onSubmit={onSubmit}>
          <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" hidden />
          <label className="field">
            <span className="field__label">YOUR NAME</span>
            <input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
          </label>
          <label className="field">
            <span className="field__label">SERVICE PROVIDED</span>
            <select required value={service} onChange={(e) => setService(e.target.value)}>
              <option value="" disabled>Choose a service</option>
              {SERVICES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </label>
          <fieldset className="field">
            <legend className="field__label">RATING</legend>
            <div className="stars" onMouseLeave={() => setHover(0)}>
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`star${n <= (hover || rating) ? ' star--on' : ''}`}
                  aria-label={`${n} star${n > 1 ? 's' : ''}`}
                  aria-pressed={rating === n}
                  onClick={() => setRating(n)}
                  onMouseEnter={() => setHover(n)}
                >
                  ★
                </button>
              ))}
            </div>
          </fieldset>
          <label className="field">
            <span className="field__label">YOUR REVIEW</span>
            <textarea required rows={5} value={review} onChange={(e) => setReview(e.target.value)} />
          </label>
          <button type="submit" className="btn btn--ink btn--block" disabled={!rating || status === 'sending'}>
            {status === 'sending' ? 'SENDING…' : 'SUBMIT REVIEW'}
          </button>
          {status === 'error' && (
            <p className="small accent" role="alert">Something went wrong. Please try again in a moment.</p>
          )}
          <p className="small muted">Reviews appear on the site after I approve them.</p>
        </form>
      )}
    </div>
  );
}
