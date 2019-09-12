import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-Parser";
import bodyParser from "body-Parser";

const app = express();

const PORT = 4000;

const handleHome = (req, res) => res.send("Hello. This is MK's side project");

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan("dev"));

app.get('/', handleHome);

app.get('/profile', handleProfile);

app.listen(PORT,handleListening);