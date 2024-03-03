import '../css/Shape.css';

import Xshape from './Xshape';
import Oshape from './Oshape';



function Shape({symbol}){
    
   
return(
    <div className="shape">
      
        {symbol === '' ? <div className='shape'></div> : (symbol === 'X' ? <Xshape/> : <Oshape/>) }

    </div>
)

}
export default Shape;