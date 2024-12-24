import mongoose from "mongoose"


export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"Apratim",
    })

.then(()=>{
  console.log("Connected to Database succesfully");
}).catch(err=>{
    console.log("Some error occured");  
});
};
