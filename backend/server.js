import app from "./app.js";

app.listen(process.env.PORT,()=>{
   console.log(`server running ${process.env.PORT}`);
})


