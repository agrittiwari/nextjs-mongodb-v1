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
        setData(data)
        setLoading(false)
      })
},[])
if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

    return (
    <div><h1>GoalsList</h1>
{console.log(data)}
<GoalCard/>
        
    </div>
  )
}

export default GoalsList