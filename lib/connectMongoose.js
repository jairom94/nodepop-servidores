import mongoose from 'mongoose';

export default function connectMongoose() {
    return mongoose.connect(process.env.DB_HOST)
        .then(mongoose => mongoose.connection)
}