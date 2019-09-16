import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-Parser";
import bodyParser from "body-Parser";
import { userRouter } from "./router";

const app = express();

const handleHome = (req, res) => res.send("Hello. This is MK's side project");

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan("dev"));

app.get('/', handleHome);

app.get('/profile', handleProfile);

app.use("/user", userRouter);

export default app;