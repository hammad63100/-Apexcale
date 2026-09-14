import { useEffect, useState } from 'react';
import { LogoIcon } from './icons';

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    let t1 = 0;
    let t2 = 0;
    const hide = () => setDone(true);
    const onLoad = () => {
      t1 = window.setTimeout(hide, 500);
    };
    if (document.readyState === 'complete') onLoad();
    else window.addEventListener('load', onLoad);
    t2 = window.setTimeout(hide, 2800); // safety net
    return () => {
      window.removeEventListener('load', onLoad);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  return (
    <div className={`preloader${done ? ' done' : ''}`} aria-hidden="true">
      <div className="preloader-logo">
        <div className="preloader-mark">
          <LogoIcon size={58} />
        </div>
        <div className="preloader-bar">
          <i />
        </div>
      </div>
    </div>
  );
}
