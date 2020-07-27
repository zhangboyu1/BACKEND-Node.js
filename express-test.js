const express = require('express')


const app = express()


// app.use((req, res, next) => {

//     console.log('1')
//     console.log('The request is initiating....', req.method, req.url)
//     console.log('------------------------------------------------------')
//     next()
// })

// app.use((req, res, next) => {
//     //handle cookie: 
//     req.cookie = {
//         userId: '123'
//     }
//     console.log('2')
//     console.log('------------------------------------------------------')
//     next()
// })

// app.use((req, res, next) => {
//     //假设处理post data： 
//     setTimeout(() => {
//         req.body = {
//             a: 100,
//             b: 200
//         }
//         next()
//     })

//     console.log('3, Useing app.use handle post data...')
//     console.log('------------------------------------------------------')
// })


function loginCheck(req, res, next) {
    console.log('imitate LOGINCHECK');

    console.log('ONly pass the CHECKIN, then the 4 would be excuted...')

    setTimeout(() => {
        // next()
    })
}

app.use('/api', loginCheck, (req, res, next) => {

    console.log('4')
    console.log(' GET or POST ++ handle /api routing')
    console.log('------------------------------------------------------')

    next()
})

// app.get('/api', (req, res, next) => {

//     console.log('5')
//     console.log('GET /api routing')
//     console.log('------------------------------------------------------')

//     next()
// })

// app.post('/api', (req, res, next) => {

//     console.log('6')
//     console.log('POST /api routing')
//     console.log('------------------------------------------------------')

//     next()
// })



// app.get('/api/list', (req, res, next) => {


//     console.log('7')
//     console.log('GET /api/list routing')
//     console.log('------------------------------------------------------')

//     req.json({
//         errno: 0,
//         data: req.cookie
//     })
//     next()
// })


app.use((req, res, next) => {
    //The app use() will end up here........

    console.log('8')
    console.log('handle 404')
    console.log('------------------------------------------------------')
    res.json({
        errno: -1,
        msg: '404 not found'
    })
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})

