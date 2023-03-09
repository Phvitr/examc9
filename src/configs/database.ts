import mongoose from 'mongoose';

const CLOUD_DB_URL = 'mongodb://127.0.0.1:27017/test1';

let database = {
    connect: () => {
        mongoose.set('strictQuery', false);
        mongoose.connect(CLOUD_DB_URL)
            .then(() => console.log('Database Connected!'))
            .catch(error => console.log('Database connection error:', error.message));
    }
}
export default database;