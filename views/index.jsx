const React = require('react')
const food = require('../models/food')
const Default = require('./layout/default')

function Index({foods}) {
  return (
    <Default>
        {
            foods.map((food, index)=>{
                return (
                    <li key={index}>
                        <a href={`/foods/${index}`}>{food.name}</a>
                    </li>
                )
            })
        }
    {/* <h2>Index Pages</h2>
    <p>I like {foods[0].name} a lot</p> */}
    </Default>
  )
}

module.exports = Index