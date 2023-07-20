import React, { Fragment } from 'react'
import classes from './Header.module.css'
import mealImages from '../../Assets/img.jpg'

export default function Header(props) {
  return <Fragment>
    
      <header className={classes.header}>
      <h1>FOODCORNER  <button type="button" onClick={props.onShowCart}>ADD TO CART</button></h1>
   
      </header>
        {/* //L l    */}
      <div className={classes['main-image']}>
    
        <img src={mealImages} alt="LOADING..." />
      </div>
    </Fragment>
      };
     
     
     
        
   

  
