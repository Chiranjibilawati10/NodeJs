require('../src/db/mongoose')
const User = require('../src/models/users')

// User.findByIdAndUpdate('5ee19a9b1cc0ff2aa4538107', { age: 9}).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 8})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}



updateAgeAndCount('5ee19a9b1cc0ff2aa4538107', 13).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})