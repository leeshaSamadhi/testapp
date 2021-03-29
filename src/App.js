import React from 'react';
import './App.css';
import { Container } from './Container';


const App = () => {

  const triggerText = 'Form';
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.jobdesc.value);
    console.log(event.target.jobtype.value);
  };
  return (
    <div className="App">
     
      <Container triggerText={triggerText} onSubmit={onSubmit} />
  
    </div>
  );
};

export default App;
