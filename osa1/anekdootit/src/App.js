import { useState } from 'react'

const Getmostvotes=(props)=>{
  let largestnum=Math.max(...props.votes)
  let indexofbest=props.votes.indexOf(largestnum)
  let bestanecdote=props.anecdotes[indexofbest]
  return(
    <div>
      <p>{bestanecdote}</p>
      <p>Has {largestnum} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes,setVotes]=useState(new Uint8Array(anecdotes.length))
  console.log(votes)

  const handlevote = () =>{
    const newarr=[...votes]
    newarr[selected]+=1
    setVotes(newarr)
  }

  return (
    <div>
      <h2>{anecdotes[selected]}</h2>
      <h2>Has {votes[selected]} votes</h2>
      <button onClick={()=>{handlevote()}}>vote</button>
      <button onClick={()=>setSelected(Math.floor(Math.random()*anecdotes.length+1)-1)}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <Getmostvotes votes={votes} anecdotes={anecdotes}></Getmostvotes>
    </div>
  )
}

export default App