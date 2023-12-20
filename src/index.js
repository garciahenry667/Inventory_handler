import app from "./app.js";
import 'dotenv'

const port = process.env.PORT || 3002


app.listen(port, ()=>(
    console.log("App running on port:", port)
))

