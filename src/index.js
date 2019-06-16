const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000       //1000000 -> 1mb
//     },
//     fileFilter(req, file, cb){
//         // if(!file.originalname.endsWith('.pdf')){
//         //     return cb(new Error('Please upload a PDF'))
//         // }

//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a Word document'))
//         }
//         cb(undefined, true)
//     }
// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => { // the call signature here is imp.
//     res.status(400).send({ error: error.message})
// })

// app.use((req, res, next) => {
//     if(req.method === 'GET') {
//         res.send('GET requests are disabled.')
//     }else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site currently down. Check back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port '+port)
})


// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'abc123'
//     const hashPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashPassword)

//     const isMatch = await bcrypt.compare('bc123', hashPassword)
//     console.log(isMatch)
// }

// const jwt = require('jsonwebtoken')

// const myFunction = async() => {
//     const token = jwt.sign({ _id: 'abc123'}, 'iamlearningthis')
//     console.log(token)

//     const data = jwt.verify(token, 'iamlearningthis')
//     console.log(data)

// }

// myFunction()

// const pet = {
//     name: 'Lily'
// }

// pet.toJSON = function() {
//     return {}
// }

// console.log(JSON.stringify(pet))

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async() => {
//     // const task = await Task.findById('5cfff4e2fbd9f1df0c6cadf8')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5cfff3e9d4d8be3361dd8c0b')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()