// import './App.css';
// import MuiButton from './components/MuiButton';
// import MuiRadioButton from './components/MuiRadioButton';
// import { MuiTextField } from './components/MuiTextField';
// import { MuiTypography } from './components/MuiTypography';
// import MuiRating from './components/MuiRating';
// import MuiLayout from './components/MuiLayout';
// import MuiLayout from './components/MuiLayout';
// import MuiAccordion from './components/MuiAccordion';
// import SSN from './components/SSN';
// import MuiLink from './components/MuiLink';

import { useState } from 'react';
import DisplayNav from './components/DisplayNav';
import MuiBottonNavigation from './components/MuiBottonNavigation';
import MuiNavbar from './components/MuiNavbar';

function App() {
  const [value, setValue] = useState<number>(0);

  return (
    <div>
      {/* <MuiTypography /> */}
      {/* <MuiButton /> */}
      {/* <MuiTextField /> */}
      {/* <MuiRadioButton /> */}
      {/* <MuiRating /> */}
      {/* <MuiLayout /> */}
      {/* <MuiCard /> */}
      <MuiNavbar />
      <DisplayNav page={value} />
      <MuiBottonNavigation setValue={setValue} />
    </div>
  );
}

export default App;
