import React from 'react';
import { Link }  from 'react-router-dom';
import './Navigation';

const Navigation = () => {
     let kigkm = "테스트"
     return (
         <div>
             <Link to="/">Home</Link>
             <Link 
             to={{
                 pathname:'/about',
                 state: {
                     fromNavigation: true
                 }
             }}                 
             >About</Link>
         </div>
     )

}

export default Navigation
