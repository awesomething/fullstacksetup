const express = require('express')
const foods = express.Router()
const Food = require('../models/food')

foods.get('/', (req, res)=>{
    res.render('Index',
    {
        foods: Food
    }
    )
    // res.send(Food)
})

// foods.get('/:arrIndex', (req, res)=>{
//     res.send(Food[req.params.arrIndex])
// })

// SHOW
foods.get('/:arrayIndex', (req, res) => {
    if(Food[req.params.arrayIndex]){
    res.render('Show', {
      food: Food[req.params.arrayIndex]
    })
    }else{
        res.send('404')
    }
  })
  
module.exports = foods