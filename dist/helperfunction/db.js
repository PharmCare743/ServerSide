const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const connectDB = () => {
    mongoose.set('strictQuery', true);
    mongoose
        .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then((conn) => {
        console.log(`db connected: ${conn.connection.host}`);
    })
        .catch((err) => {
        console.log(err);
        process.exit(1);
    });
};
module.exports = connectDB;
//# sourceMappingURL=db.js.map