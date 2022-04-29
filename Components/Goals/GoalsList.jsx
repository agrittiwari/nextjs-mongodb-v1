import React, { useEffect,useState } from 'react'
import GoalCard from './GoalCard'
import styles from './Goals.module.css'

const GoalsList = () => {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)
  
useEffect(()=>{
    setLoading(true)
    fetch('api/goals')
      .then((res) => res.json())
      .then((data) => {
        setData(data.goalsArray)
        setLoading(false)
      })
},[])

if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
//console.log(data)
    return (
    <div className={` ${styles.list}`}>
{data.map(( goal,index)=>(<GoalCard key={index} goal={goal}/>))}    
    </div>
  )
}

export default GoalsList