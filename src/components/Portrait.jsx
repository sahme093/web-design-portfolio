import { useState } from 'react';
import Logo from './Logo.jsx';

// Drop the photo at public/salma.jpg. Until then, the S | K mark fills the frame.
export default function Portrait({ className = '' }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`portrait ${className}`}>
      {failed ? (
        <div className="portrait__fallback"><Logo /></div>
      ) : (
        <img src="/salma.jpg" alt="Salma Korashy" onError={() => setFailed(true)} />
      )}
    </div>
  );
}
