import express from "express";
import cors from "cors";
import { config } from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import mongodb from "mongodb";

config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());

mongodb.MongoClient.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(async () => {
        app.listen(PORT, () => {
            console.log(`Server has started on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(`${err} did not connect`);
    });
