require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

// User.findByIdAndUpdate('656589df91585a265c7cc48a', {age : 24}).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age : 24 })
// }).then((result) => {
//     console.log(result)
// }).catch(() => {
//     console.log(e)
// })


const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('6567170bf904be11bcf25ef3', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
