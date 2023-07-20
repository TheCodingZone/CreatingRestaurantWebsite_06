import React from 'react'
import classes from'../MEALS/MealItem.module.css'

export default function MealButton() {
  return (
    <div className={classes.container}>
      
       <label htmlFor="" className={classes.label}>Quantity</label>
       <input type="digit" className={classes.input}/>
       <button className={classes.button}>+ ADD ITEM</button>
    </div>
  )
}
      
        
       

       
    
