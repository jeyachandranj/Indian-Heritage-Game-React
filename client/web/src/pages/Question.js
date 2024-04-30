import React from 'react';
import Start from '../components/puzzle/components/Start';
import Quiz from '../components/puzzle/components/Quiz';
import Result from '../components/puzzle/components/Result';
import { DataProvider } from '../components/puzzle/context/dataContext';

function App() {
  return (
    <DataProvider>
      <Start/>
      <Quiz/>
      <Result/>

    </DataProvider>
  );
}

export default App;
