import express from "express";
import mongoose from "mongoose";
import {configDotenv} from "dotenv";
import cors from "cors";
import * as ProductController from "./controllers/ProductController.js";

configDotenv()
mongoose
	.connect(process.env.MONGODB_URi)
	.then(() => console.log('DB OK'))
	.catch((err) => console.log('DB error', err))

const app = express()

app.use(express.json())
app.use(cors())

app.get('/products', ProductController.getAll)

app.listen(process.env.PORT || '4444', (err) => {
	if(err){
		return console.log(err)
	}
	console.log('Listening on port 4444')
})
