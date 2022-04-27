
import clientPromise from '../../../lib/mongodb'


export default async function handler(req, res){

    switch(req.method){
        case 'POST':
            return addGoal(req, res)
        case 'GET' :
            return getGoals(req,res)
    }
}

async function addGoal (req, res){
   

    try {
        let goal = JSON.parse(req.body);
        console.log(`this is coming req.body ${goal}`)
    
        let{ name, age, description} =goal
    
        if(!name || !age || !description){
            throw new Error("Invalid Request");
        }
        //connect to database
 const client = await clientPromise;
 const db = client.db()

//POST request
const response = await db.collection('goals').insertOne({goal})
 console.log(response.acknowledged)

//return a message
return res.json({
    message: 'Details updated successfully',
    success: response?.acknowledged
})
    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        })
    }
 


}
