import React from 'react'
import styles from './Goals.module.css'
const GoalCard = ({goal}) => {
  return (
    <div className={` ${styles.card}`}>
      <div className={`${styles.cardDiv1}`}>
        {console.log(goal)}
        <p>👉 {goal.description}</p>
        <span>{goal.date.slice(4, 15)}</span>, <span>{goal.date.slice(16, 21)}</span>
        <div className={`${styles.timezone}`} >{goal.date.slice(34)}</div>
      </div>
      <div className={`${styles.cardDiv2}`}>
        <strong>🗣️{goal.name}</strong>
        <p>{goal.age} years old</p>
      </div>
    </div>
  )
}

export default GoalCard

//.slice(4, 15)