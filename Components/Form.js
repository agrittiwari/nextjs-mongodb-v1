import { useState } from "react"
import { SuccessAlert, ErrorAlert} from "./Alert";




 export const GoalForm = () =>
{ const [error, setError] = useState('');
const [message, setMessage] = useState('');

const [name, setName] = useState('');
const [age, setAge] = useState('')
const [description, setDescription] = useState('')

const postGoal = async (e) =>
{
    e.preventDefault()

    setError('')
    setMessage('')

    if(!name || !age || !description) return setError('All Fields are necessary!')
    let goal = {
        name,
        age,
       description,
        date:new Date(),
       

}
    console.log(JSON.stringify(goal))
    console.log(goal)
    //console.log(JSON.parse(details))
    try {
        const response = await fetch('/api/addGoal', {
            method: 'POST',
            body: JSON.stringify(goal)
        })
    
            //get the data
    
            let data = await response.json()
    console.log( `this is from goal component ${data.message}`)
            if (data.success) {
                 // reset the fields
                 setAbout('');
                setTwitterHandle('');
                setBioLink('')
                 // set the message
                return setMessage(data.message)
            } else {
                return setError(data.message)
            }
    
    
    } catch (err) {
        console.error('error happened here', error)
    }
   
}
    return (
        <div className="m-100 p-10 mt-20 px-70 border-1  bg-blue-200  flex flex-col shadow-2xl rounded-lg w-11/12 inset-5">


            
                     {error ? <ErrorAlert error={error} /> : null}
               
                {message ? <SuccessAlert msg={message}/>: null}
                
        <strong className="underline">Imagination is a powerful tool</strong>
        

        <form onSubmit={postGoal} className="form my-3 flex flex-col">
           
        <label className="p-2 decoration-solid	">Your Life Goal</label>
        <input className="form-input border border-gray-400 p-2 rounded-lg appearance-none focus:border-gray-500 focus:outline-none mb-4" name="description" value={description} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Your Goal" />
        <div className="flex flex-row">
        <label className="p-2 decoration-solid	" >Name</label>
        <input className="form-input border border-gray-400 p-6 rounded-lg appearance-none focus:border-gray-500 focus:outline-none" name="name" value={name} onChange={(e)=>setName(e.target.value)}   type="text" placeholder="Your name" />         
        <label className="p-2 decoration-solid	">Twitter Username <i className="fa fa-twitter" aria-hidden="true"></i></label>
         <input type="text" className="form-input border border-gray-400 p-2 rounded-lg appearance-none focus:border-gray-500 focus:outline-none" name="age" value={age} onChange={(e) =>setAge(e.target.value)}  placeholder="Your Age" />
       </div>
        

            <button type="submit" className="rounded-full bg-blue-600  p-1 border border-gray-600">Submit</button>

    </form>
    <h1>{name+ age+ description}</h1>
      </div>
)
     
} 
 
export const RenderGoal = () =>
{
    return (
        <div><li>about</li>
            <li>bioLink</li><li>
            TwitterHandle</li></div>
    )
}