import mongoose from 'mongoose';

export default function connectToDB () {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, console.log("Connected to MongoDB"));
};
