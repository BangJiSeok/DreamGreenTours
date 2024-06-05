import mongoose from "mongoose";

const connect_url = `mongodb+srv://app:1234@app.b0hrc9k.mongodb.net/`;

const connect = () => {
    if (process.env.NODE_ENV !== "production") {
        mongoose.set(`debug`, true);
    }

    mongoose
        .connect(connect_url, {
            dbName: "project",
        })
        .then(() => {
            console.log(`Connect to MongDB`);
        })
        .catch((err) => {
            console.error(`Connected to MongDB Error`);
            console.log(err);
        });
};

export default connect;
