import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';

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
  const initializedRef = useRef(false);

  useEffect(() => {
    // Prevent double initialization in StrictMode
    if (initializedRef.current || !deckRef.current) return;
    initializedRef.current = true;

    const deck = new Reveal(deckRef.current, {
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

    deck.initialize().then(() => {
      // Force a layout sync after initialization
      deck.sync();
      deck.layout();
    });

    return () => {
      deck.destroy();
    };
  }, []);

  return (
    <div className="reveal" ref={deckRef} style={{ width: '100vw', height: '100vh' }}>
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
