
/////// It's an extra work we can also delete that work if we want. It will not effect our code //////////////

// const mongodb = require('mongodb')
// const mongoose = require("mongoose");
// const express = require("express");
// const app = express();
// const ObjectID = mongodb.ObjectID

// const connectionURL = write_databaseURL;
// const PORT = process.env.PORT || 5000;

// // Define a Mongoose schema and model
// const userSchema = new mongoose.Schema({
//     name: String,
//     age : Number,
//     completed : Boolean,
// });

// // Specify the collection name as the third argument ('task' in this example)
// const User = mongoose.model('User', userSchema, 'task');

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

//     // User.updateOne({_id : new ObjectID('65604e223be4fc1296afaf46')}, { 
//     //     $set: {
//     //         age : 25
//     //     }
//     // })
//     // .then((result) => {
//     //     console.log(result)
//     // })
//     // .catch((error) => {
//     //     console.log(error)
//     // })
//     // .finally(() => {
//     //     // Close the connection after the update operation
//     //     mongoose.connection.close();
//     // });


//     ////////////// If we update only some item /////////////////////////////////////

//     // User.updateMany({_id: new ObjectID('65605177b8e64c4c7824b67f'), _id: new ObjectID('65605177b8e64c4c7824b680')}, {
//     //     $set: {
//     //         completed: true
//     //     }
//     // })
//     // .then((result) => {
//     //     console.log(result);
//     // })
//     // .catch((error) => {
//     //     console.log(error);
//     // })
//     // .finally(() => {
//     //     // Close the connection after the update operation
//     //     mongoose.connection.close();
//     // });
// ////////////////////////////////////////////////////////////////////////////////////////////////////


// /////////////////////////////////////////  If we update all the item ///////////////////////////////////////////
//     // User.updateMany({completed : false}, {
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
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////

// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port: ${PORT}`);
// });
