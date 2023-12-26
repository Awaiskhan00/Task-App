const mongoose = require("mongoose");
const validator = require("validator");

const taskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

//////////////////////// That's for that when we not use the postman. If we want we can delete this////////////

// const task = new Task({
//     description : 'Eat luch',
//     completed : true
// })

// task.save().then(() => {
//     console.log(task)
// })
// .catch((error) => {
//     console.log('Error💥 ', error)
// })

module.exports = Task;
