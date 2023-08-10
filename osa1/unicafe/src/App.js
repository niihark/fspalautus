import { useState } from 'react'

const Statistics = (props) => {
  const total=(props.good+props.bad+props.neutral)
  const average=((props.good-props.bad)/total)
  if (total>0){
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="Good" value={props.good}></StatisticLine>
          <StatisticLine text="Neutral" value={props.neutral}></StatisticLine>
          <StatisticLine text="Bad" value={props.bad}></StatisticLine>
          <StatisticLine text="All" value={total}></StatisticLine>
          <StatisticLine text="Average" value={average}></StatisticLine>
          <StatisticLine text="Positive" value={(props.good/total)*100}></StatisticLine>
        </tbody>      
      </table>
    </div>
  )
  } else{
    return(
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  if (props.text=="Positive"){
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value} %</td>
    </tr>
  )
  } else{
    return(
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    )
  }
  }

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={()=>setGood(good+1)} text={"good"}></Button>
      <Button handleClick={()=>setNeutral(neutral+1)} text={"neutral"}></Button>
      <Button handleClick={()=>setBad(bad+1)} text={"bad"}></Button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App