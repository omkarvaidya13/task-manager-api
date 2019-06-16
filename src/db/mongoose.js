const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// const me = new User({
//     name: '     Raj    ',
//     email: '  raj@gmail.com   ',
//     password: '    raj1234'
// })

// me.save().then(() => {
//     console.log(me)  
// }).catch((error) =>  {
//     console.log('Error! ', error)
// })



// const task = new Task({
//     description: 'Study Node.js completely',
//     completed: false
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })