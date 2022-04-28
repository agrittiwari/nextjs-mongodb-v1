import React, { useEffect,useState } from 'react'
import GoalCard from './GoalCard'


const GoalsList = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
useEffect(()=>{
    setLoading(true)
    fetch('api/goals')
      .then((res) => res.json())
      .then((data) => {
        setData(data.response.goalsArray)
        setLoading(false)
      })
},[])

if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

    return (
    <div><h1>GoalsList</h1>
{console.log(typeof(data))}
{data.map((index, goal)=>(<GoalCard key={index} props={goal}/>))}

        
    </div>
  )
}

export default GoalsList