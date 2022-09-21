const React = require('react')
const Default = require('./layout/default')

function Show ({food}) {
    // Confirm we are getting our data in the terminal.
      return (
        <Default>
        <h3>{food.name}</h3>
        <p>
            and it
            {
            food.hasGluten
            ? <span> does </span>
            : <span> does NOT </span>
            }
            have gluten.
        </p>
        <img src={food.image} alt={food.name} />
        <li><a href="/foods">Go home</a></li>
        </Default>
      )
  }

module.exports = Show