import express from 'express'
import ProductsRouter from './routes/products.js'
import UsersRouter from './routes/users.js'
import PaymentsRouter from './routes/payments.js'


const app=express()
const PORT =3000

const data=[
    {username:'user1',
    emailaddress:'user1@gmail.com',
    },

    {username:'user2',
    emailaddress:'user2@gmail.com',
   },

    {username:'user3',
            emailaddress:'user3@gmail.com',
            },
    ]
app.use(express.json())

app.set('view engine', 'pug')
app.set('views', './views')  //views folder, where we saved home.pug "views is a keyword" refered to folder '/views'
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.render('home.pug', {storename: "BESTBUY", title:" LLC"})})

app.get('/download', (req,res)=>{
    res.download('./public/imagePug.jpg')})

app.get('/users',  (req, res) =>{
      res.render('users.pug', {data:data[0]})})

app.use("/users", UsersRouter);
app.use("/payments", PaymentsRouter);
app.use("/products", ProductsRouter);

app.listen(PORT, ()=>{console.log(`Server at  ${PORT}`)})