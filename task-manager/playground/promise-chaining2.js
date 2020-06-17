require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5ee4705b45b8eb2268041920').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count =  await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5ee19a9b1cc0ff2aa4538107').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})