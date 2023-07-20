import React from 'react'
import Card from '../UI/Card';

import classes from '../MEALS/MealItem.module.css'
import MealButton from './MealButton';

export default function meal() {
    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
        {
          id: 'm2',
          name: 'Schnitzel',
          description: 'A german specialty!',
          price: 16.5,
        },
        {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
        },
        {
          id: 'm4',
          name: 'Green Bowl',
          description: 'Healthy...and green...',
          price: 18.99,
        },
      ];

      const mealist=DUMMY_MEALS.map(dish=>(
        
        <li className={classes.meal}>
        <div >
        <h3 >{dish.name}</h3>
        <div className={classes.description}>{dish.description}</div>
        <div className={classes.price}>RS:{dish.price}</div>
        </div>

       <MealButton/>
        </li>
        ))
    return (
      <div>
          <Card>
              <ul>{mealist}</ul>
        
          </Card>
      
      </div>
    )
  }
        
       
          
        
       
        
      
       
       
