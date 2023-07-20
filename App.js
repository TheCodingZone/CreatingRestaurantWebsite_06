import React,{ Fragment , useState } from 'react';
import './App.css';
import Header from './Componant/LAYOUT/Header';
import Description from './Componant/LAYOUT/Description';
import Meal from './Componant/MEALS/Meal'
import ConfirmOrder from './Componant/CART/ConfirmOrder';


function App() {
  const [cardIsShown,setCardIsShown]=useState(false);

  const showCartHandler=()=>{
    setCardIsShown(true);
  }
  const hideCartHandler=()=>{
    setCardIsShown(false);
  }

  return (
    <Fragment className="App">
     {cardIsShown && <ConfirmOrder onClose={hideCartHandler}/>}
     <Header onShowCart={showCartHandler}/>
    
     <Description/>
     <main>
     <Meal/>
     </main>
     

    </Fragment>
  );
}

export default App;
