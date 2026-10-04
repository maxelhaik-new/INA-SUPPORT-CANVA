import React from 'react';
import Presentation from './components/Presentation';

import Slide01_Intro from './components/Slide01_Intro';
import Slide02_Program from './components/Slide02_Program';
import Slide03_Trainer from './components/Slide03_Trainer';
import Slide04_RoundTable from './components/Slide04_RoundTable';
import Slide05_SecurityLegal from './components/Slide05_SecurityLegal';
import Slide06_PromptMethod from './components/Slide06_PromptMethod';
import Slide07_CaseStudy from './components/Slide07_CaseStudy';
import Slide08_Workshop1 from './components/Slide08_Workshop1';
import Slide09_Break from './components/Slide09_Break';
import Slide10_DirectWorkflow from './components/Slide10_DirectWorkflow';
import Slide11_Workshop2 from './components/Slide11_Workshop2';
import Slide12_ArtDirection from './components/Slide12_ArtDirection';
import Slide13_Workshop3 from './components/Slide13_Workshop3';
import Slide14_QualityCheck from './components/Slide14_QualityCheck';
import Slide15_LiveDemo from './components/Slide15_LiveDemo';
import Slide16_CurationMethod from './components/Slide16_CurationMethod';
import Slide17_Closing from './components/Slide17_Closing';

function App() {
  const slides = [
    Slide01_Intro,
    Slide02_Program,
    Slide03_Trainer,
    Slide04_RoundTable,
    Slide05_SecurityLegal,
    Slide06_PromptMethod,
    Slide07_CaseStudy,
    Slide08_Workshop1,
    Slide09_Break,
    Slide10_DirectWorkflow,
    Slide11_Workshop2,
    Slide12_ArtDirection,
    Slide13_Workshop3,
    Slide14_QualityCheck,
    Slide15_LiveDemo,
    Slide16_CurationMethod,
    Slide17_Closing,
  ];

  return (
    <main
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--c-bg-ext)',
        overflow: 'hidden',
        padding: '1.5rem',
        boxSizing: 'border-box',
      }}
    >
      <Presentation slides={slides} />
    </main>
  );
}

export default App;
