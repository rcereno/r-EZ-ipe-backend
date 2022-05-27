const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
require('dotenv/config');
let mongod = null;
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routesHandler);
app.use(cors());

//connect to mongoose

mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true})
.then( () => {
    console.log('DB Connected!');
})
.catch( (err) => {
    console.log(err);
});
// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
//         console.log('MongoDB connected: ${conn.connection.host}');
//     } catch (err) {
//         console.log(err);
//         process.exit(1);
//     }

// }

// const disconnectDB = async () => {
//     try {
//       await mongoose.connection.close();
//       if (mongod) {
//         await mongod.stop();
//       }
//     } catch (err) {
//       console.log(err);
//       process.exit(1);
//     }
//   };
  

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// module.exports = { connectDB, disconnectDB };
