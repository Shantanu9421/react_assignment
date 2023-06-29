import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [rate, setcount] = useState({ Good: 0, Neutral: 0, Bad: 0 , All:0})
  const all = ()=>{
    setcount(preCount=>({...preCount, All: preCount.All + 1 }))
  }
  const good = () => {
    setcount(preCount => ({ ...preCount, Good: preCount.Good + 1 }))
    all()
  }
  const neutral = () => {
    setcount(preCount => ({ ...preCount, Neutral: preCount.Neutral + 1 }))
    all()
  }
  const bad = () => {
    setcount(preCount => ({ ...preCount, Bad: preCount.Bad + 1 }))
    all()
  }
  const calculateAverage = () => {
    const totalReviews = rate.All;
    const totalScore = rate.Good - rate.Bad;
    if (totalReviews == 0) {
      return 0;
    }
    return totalScore / totalReviews;
  };
  

  const calculatePositivePercentage = () => {
    const totalReviews = rate.All;
    const positiveReviews = rate.Good;
    if (totalReviews == 0) {
      return 0;
    }
    return (positiveReviews / totalReviews) * 100;
  };
  const Noinput= rate.All==0 


  const average = calculateAverage()
  const positive =calculatePositivePercentage()
  return (
    <div>
      

      <p>
        FEEDBACK SYSTEM
      </p>
      <button onClick={good}>Good</button>
      <br></br>
      <button onClick={neutral}>Neutral</button>
      <br></br>
      <button onClick={bad}>Bad</button>
      <br></br>
      {Noinput ? (
        <h1>No Input</h1>
      ) : (
        <>
          <p>Good: {rate.Good}</p>
          <p>Neutral: {rate.Neutral}</p>
          <p>Bad: {rate.Bad}</p>
          <p>All: {rate.All}</p>
          <p>Average: {average}</p>
          <p>Positive: {positive}</p>
        </>
      )}

    </div>
  );
}

export default App;
