import React from 'react'

const GoalCard = ({goal}) => {
  return (
    <div>GoalCard
      <div>
        {console.log(goal)}
        {/* <h2>{goal.description}</h2> */}
        {/* <p>{goal.date}</p> */}
      </div>
      <div>
        {/* <strong>{goal.name}</strong> */}
        {/* <p>{goal.age} years old</p> */}
      </div>
    </div>
  )
}

export default GoalCard

//.slice(4, 15)