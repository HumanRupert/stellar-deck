import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';

import {
  Slide01Title,
  Slide02TheShift,
  Slide03TheProblem,
  Slide04NxMFragmentation,
  Slide05ProtocolGap,
  Slide06TheSolution,
  Slide07Architecture,
  Slide08WhyStellar,
  Slide09Authorization,
  Slide10PolicyEnforcement,
  Slide11WhatWeBuild,
  Slide12TheAsk,
} from './components/slides';

function App() {
  const deckRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    if (deckRef.current && !revealRef.current) {
      revealRef.current = new Reveal(deckRef.current, {
        hash: true,
        slideNumber: 'c/t',
        progress: true,
        controls: true,
        controlsTutorial: false,
        transition: 'slide',
        transitionSpeed: 'default',
        backgroundTransition: 'fade',
        width: 1280,
        height: 720,
        margin: 0.04,
        minScale: 0.2,
        maxScale: 2.0,
        center: false,
        embedded: false,
        help: true,
        mouseWheel: false,
        hideInactiveCursor: true,
        hideCursorTime: 3000,
      });

      revealRef.current.initialize();
    }

    return () => {
      if (revealRef.current) {
        revealRef.current.destroy();
        revealRef.current = null;
      }
    };
  }, []);

  return (
    <div className="reveal" ref={deckRef}>
      <div className="slides">
        <Slide01Title />
        <Slide02TheShift />
        <Slide03TheProblem />
        <Slide04NxMFragmentation />
        <Slide05ProtocolGap />
        <Slide06TheSolution />
        <Slide07Architecture />
        <Slide08WhyStellar />
        <Slide09Authorization />
        <Slide10PolicyEnforcement />
        <Slide11WhatWeBuild />
        <Slide12TheAsk />
      </div>
    </div>
  );
}

export default App;
