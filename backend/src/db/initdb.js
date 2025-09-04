import mongoose, { mongo } from 'mongoose';

export function initDB() {
    const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/blog';

    mongoose.connection.on('open', () => {
        console.log('Connected to MongoDB: ', DATABASE_URL)
    })

    const connection = mongoose.connect(DATABASE_URL)
    return connection
}