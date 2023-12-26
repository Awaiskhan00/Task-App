require('../src/db/mongoose')
const Task = require('../src/models/task')


///////////  Done through promises chaining  ///////////////////////////////////

// Task.findByIdAndUpdate('656718810a0134cb1d49a56a', {description : 'Have you complete all the task'}).then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed : false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

//////////////  Done through async and await function  //////////////////////////////////// 

const update = async (id, description) => {
    try {
        const task = await Task.findByIdAndUpdate(id, { description });
        const count = await Task.countDocuments({ completed: true });
        return count;
    } catch (e) {
        throw e;
    }
};

update('6567195a9c55362e1b12c2bc', 'Have you done all the task').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

///////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////  Done through promises chaining  ///////////////////////////////////////////////////


// Task.findByIdAndDelete('6565dfdf7b2ff4a412cf45c1').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed : true})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

////////////////// Done through async and await function  /////////////////////////////////////////////

const deleteTaskAndCount = async (id) => {

        const task = await Task.findByIdAndDelete(id);
        const count = await Task.countDocuments({ completed: false });
        return count;
    
}

deleteTaskAndCount('656718810a0134cb1d49a56a').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

