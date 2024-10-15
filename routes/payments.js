import express from 'express'
import {Router} from 'express'

const router=new Router

router.get('/', async(req,res)=>{
res.send(`Payment Page`)
        })
.post('/', async(req,res)=>{ res.send(`Add a payment`)
                        })
.put('/', async(req,res)=>{ res.send(`Update a payment`)
                        })
.patch('/', async(req,res)=>{ res.send(`Edit a payment`)
                        })
.delete('/', async(req,res)=>{ res.send(`Delete a payment`)
                        })
export default router