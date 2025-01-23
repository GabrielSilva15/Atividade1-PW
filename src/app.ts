import express from "express";
import cors from "cors"
import routesPetshop from "./routes/petshop.routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use(routesPetshop);

export default app;