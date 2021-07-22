import express from 'express';
import compression from 'compression';
import cors from 'cors'
import helmet from 'helmet';
import bodyParser from 'body-parser';
import imageRoute from './routes/findImage';


const app=express();

app.use(bodyParser.json());
app.use(cors());
app.use('/',imageRoute);
app.use(helmet());
app.use(compression());
app.use((req,res,next)=>{
    res.status(404).json({
        message:"Record not found"
    })
})

app.listen(process.env.PORT || 3000);
