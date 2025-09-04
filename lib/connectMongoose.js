import mongoose from 'mongoose';

export default function connectMongoose() {
    const databaseURI = process.env.DB_HOST || 'mongodb://localhost:27017/nodepop';
    return mongoose.connect(databaseURI)
        .then(mongoose => mongoose.connection)
}