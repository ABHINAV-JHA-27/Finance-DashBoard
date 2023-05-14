import express from "express";
import cors from "cors";
import { config } from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import kpiRoutes from "./src/routes/kpi.js";
import productRoutes from "./src/routes/product.js";
import transactionRoutes from "./src/routes/transaction.js";

config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server Running !!");
});
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {
        app.listen(PORT, () => {
            console.log(`Server has started on port ${PORT}`);
            // await mongoose.connection.db.dropDatabase();
            // KPI.insertMany(kpis);
            // Product.insertMany(products);
            // Transaction.insertMany(transactions);
        });
    })
    .catch((err) => {
        console.log(`${err} did not connect`);
    });
