import { createRoot } from 'react-dom/client'
import { useState } from 'react'

const root = document.querySelector("#root");

const StatisticsLine = ({text, value}) => {
   return <p>{text} {value}</p>
}

const Statistics = ({good, neutral, bad, all, average, positive}) => {

    if (all === 0) {
        return (
            <div>
                <h2>Statistics</h2>
                <p>No feedback given</p>
            </div>
        )
    }
    return (
        <div>
            <h2>Statistics</h2>
            <StatisticsLine text="good" value={good} />
            <StatisticsLine text="neutral" value={neutral} />
            <StatisticsLine text="bad" value={bad} />
            <StatisticsLine text="all" value={all} />
            <StatisticsLine text="average" value={average} />
            <StatisticsLine text="positive" value={ `${positive} %` } />
        </div>
    )
}

const Button = ({handleClick, text}) => {
    return <button onClick={handleClick}>{text}</button>
}

const App = () => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const all = good + neutral + bad;
    const average = all === 0 ? 0 : (good - bad) / all;
    const positive = all === 0 ? 0 : (good / all) * 100;
    

    return (
        <div>
           <h1>give feedback</h1>
           <Button handleClick={() => {setGood(good + 1)}} text={'good'} />
           <Button handleClick={() => {setNeutral(neutral + 1)}} text={'neutral'} />
           <Button handleClick={() => {setBad( bad + 1)}} text={'bad'} />
            <Statistics 
             good={good} 
             neutral={neutral}
             bad={bad}
             all={all}
             average={average}
             positive={positive} 
            />
        </div>
    )
}

createRoot(root).render(<App />)