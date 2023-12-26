
/////// It's an extra work we can also delete that work if we want. It will not effect our code //////////////


///// That's the another and simple way of updating and deleting object in database ///////////////////////////////////

// const mongodb = require('mongodb')
// const mongoose = require("mongoose");
// const express = require("express");
// const app = express();
// const ObjectID = mongodb.ObjectID

// const connectionURL = write_database_url;
// const PORT = process.env.PORT || 5000;

// // Connecting to the database
// mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Connected to MongoDB!');
//     })
//     .catch((error) => {
//         console.error('Error connecting to MongoDB:', error);
//     });
 
// // Connection is a pre-defined object in Mongoose
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//     console.log('Connected to MongoDB!');

//     // db.collection('task').updateMany({completed : false}, {
//     //     $set: {
//     //         completed : true
//     //     }
//     // })
//     // .then((result) => {
//     //     console.log(result)
//     // })
//     // .catch((error) => {
//     //     console.log(error)
//     // })


//     // db.collection('users').deleteMany({age : 24})
//     // .then((result) => {
//     //     console.log(result)
//     // })
//     // .catch((error) => {
//     //     console.log(error)
//     // })

//     db.collection('task').deleteOne({description : 'Renew Inspection'})
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port: ${PORT}`);
// });
