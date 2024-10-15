import { Router } from "express";

const router=new Router()
router.get('/', async(req,res)=>{
    res.send(`Product Page`)
})
router.post('/',async (req,res)=>{    
    try{
        const newProduct=await productModel.create(req.body)

        res.send(newProduct)
    }catch(error){
        console.log(error)
    }

})

export default router