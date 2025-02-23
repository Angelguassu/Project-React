import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())


app.post('/users', async (req, res) => {

   await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email
        }
    })
    res.status(201).json(req.body)
})

app.get('/users', async (req, res) => {

    const users = await prisma.user.findMany()
    res.status(200).json(users)
})

app.put('/users/:id', async (req, res) => {

    await prisma.user.update({

         where: {
             id: req.params.id
         },
         data: {
             name: req.body.name,
             email: req.body.email
         }
     })
     
     res.status(201).json(req.body)
 }) 

app.delete('/users/:id', async (req, res) => {

    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json("Deleted")
})
app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})  