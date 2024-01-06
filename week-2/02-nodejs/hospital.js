const express = require('express');
const app = express();

app.use(express.json())

//We have to create 4 diffrent routes for the hospital system where the user can add a kidney and
//Delete all unhealthy kidneys at once
let users = [{
    name: "Jhon",
    kidneys : [{
    healthy: false,
    }]
}]

//Create the route for getting all the kidneys from the user
app.get('/', (req, res)=>{
    const kidneys = users[0].kidneys;
    const noOfKidneys = kidneys.length;

    let noOfHealthyKidneys = 0;
    kidneys.forEach(kidney => {
        if(kidney.healthy) {
            noOfHealthyKidneys++;
        }
    });

    const noOfUnHealthyKidneys = noOfKidneys - noOfHealthyKidneys;

    res.json({
        "noOfKidneys": noOfKidneys,
        "noOfHealthyKidneys": noOfHealthyKidneys,
        "noOfUnHealthyKidneys": noOfUnHealthyKidneys
    })
})

//Now we have to create a post route where the users can update the no of kidneys
app.post('/', (req, res)=>{
    const isHealthy = req.body.isHealthy; // Assuming this field is coming from the POST request

    users[0].kidneys.push({
        healthy: isHealthy, // Set the health status based on the isHealthy value from the request
    });

    res.json({
        'msg': 'done!'
    });
})

//Now we have to create a route for updating all the unhealthy kidneys to all healthy kidneys
app.put('/', (req, res)=>{
    let kidneys = users[0].kidneys;
    kidneys.forEach((kidney)=>{
        kidney.healthy = true;
    })
    return res.json({msg:'done!'})
})

//Now we have to create a delete route for deleting all the unhealthy kidneys
app.delete('/', (req, res)=>{
    if(checkUnhealthy){
        let newKidneys = [];
        let kidneys = users[0].kidneys;
        for(let i =0; i< kidneys.length; i++){
            if(kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: 'done'})
    }
    else{
        res.status(411).json({
            msg: 'You have no Unhealthy Kidneys'
        })
    }
    
})
//Creating a function to check if there exist atleast one unhealthy kidney

function checkUnhealthy(){
    for(let i =0; i< users[0].kidneys; i++){
        if(users[0].kidneys[i].healthy ){
            return true;
        }
    }
    return false;
}
app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})