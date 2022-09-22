import React from 'react';
import './style.css';
import Hello from './components/hello';
import Counter from './components/counter';
import CounterTwo from './components/counterTwo';
import CounterThree from './components/counterThree';
import CounterFour from './components/counterFour';
import HookCounterOne from './components/hookCounterOne';
import HookMouse from './components/hookMouse';
import MouseContainer from './components/mouseContainer';
import DataFetching from './components/dataFetching';
import DataFetchingTwo from './components/dataFetchingTwo';
import ReducerCounterOne from './components/reducerCounterOne';
import ReducerCounterTwo from './components/reducerCounterTwo';
import ReducerCounterThree from './components/reducerCounterThree';
import ReducerDataFetcher from './components/reducerDataFetcher';
import ParentComponent from './callbackComponents/parentComponent';

export default function App() {
  return (
    <div>
      <h1>React JS Functional Components</h1>
      <Hello />
      {/* <Counter /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* <CounterFour /> */}
      {/* <HookCounterOne /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <DataFetching /> */}
      {/*<DataFetchingTwo />*/}
      {/* <ReducerCounterOne />
      <ReducerCounterTwo />
      <ReducerCounterThree /> */}
      {/* <ReducerDataFetcher /> */}
      {/* <ParentComponent /> */}
    </div>
  );
}
