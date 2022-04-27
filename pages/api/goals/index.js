
import clientPromise from '../../../lib/mongodb'


export default async function handler(req, res){

    switch(req.method){
        case 'POST':
            return addGoal(req, res)
        case 'GET' :
            return getGoals(req,res)
    }
}


async function getGoals(req, res){
    try {
        //connect to database
 const client = await clientPromise;
 const db = client.db()
 const response= await db.collection('goals').find()
const responseData = await response.next()
 console.log(responseData)
        return res.json({responseData})
    } catch (error) {
         // return an error
         return res.json({
            message: new Error(error).message,
            success: false,
        })
    }
}


async function addGoal (req, res){
   

    try {
        let goal = JSON.parse(req.body);
        //console.log(goal)
    
        let{ name, age, description} =goal
    
        if(!name || !age || !description){
            throw new Error("Invalid Request");
        }
        //connect to database
 const client = await clientPromise;
 const db = client.db()



//PUT request
const response = await db.collection('goals').updateOne({"_id":"101"},{$push:{goalsArray:req.body}},{$upsert:true})
 console.log(response)

//return a message
return res.json({
    message: 'Details updated successfully',
    success: true
})
    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        })
    }
 


}
