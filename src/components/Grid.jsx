import '../css/Grid.css';
import Shape from './Shape';
import { useState,useEffect} from 'react';

function Grid(){
    const [grid,setGrid] = useState([
      {id:1,symbol:''},{id:2,symbol:''},{id:3,symbol:''},
      {id:4,symbol:''},{id:5,symbol:''},{id:6,symbol:''},
      {id:7,symbol:''},{id:8,symbol:''},{id:9,symbol:''}
      
  ]);
  const [currentStatus,setStatus] = useState(false);

  useEffect(() => {
     // Check rows and columns for both X and O
     const symbols = ['X', 'O'];
  
     for (const symbol of symbols) {
       for (let i = 0; i < 3; ++i) {
         // Check rows
         if (
           grid[i * 3].symbol === symbol &&
           grid[i * 3 + 1].symbol === symbol &&
           grid[i * 3 + 2].symbol === symbol
         ) {
           setStatus(true);
           return;
         }
   
         // Check columns
         if (
           grid[i].symbol === symbol &&
           grid[i + 3].symbol === symbol &&
           grid[i + 6].symbol === symbol
         ) {
           setStatus(true);
           return;
         }
       }
       // check diagonals
       if (
        grid[0].symbol === symbol &&
        grid[4].symbol === symbol &&
        grid[8].symbol === symbol
      ) {
        setStatus(true);
        return;
      }
      if (
        grid[2].symbol === symbol &&
        grid[4].symbol === symbol &&
        grid[6].symbol === symbol
      ) {
        setStatus(true);
        return;
      }
    
     }
     // Check for a draw
     if (grid.every(item => item.symbol !== '')) {
      setStatus(true);
     }
    
  });
 
  
  const resetStatus = () =>{
    setStatus(false);
    setGrid({id:1,symbol:''},{id:2,symbol:''},{id:3,symbol:''},
      {id:4,symbol:''},{id:5,symbol:''},{id:6,symbol:''},
      {id:7,symbol:''},{id:8,symbol:''},{id:9,symbol:''});
     
  }
  const [newSymbol,setNewSymbol] = useState('X');
  const changeSymbol = (id) => {
    const updatedGrid = grid.map(item => {
      if (item.id === id) {
        return { ...item, symbol: newSymbol };
      }
      (newSymbol === 'X' ? (setNewSymbol('O')):(setNewSymbol('X')));
      return item;
      
    });

    setGrid(updatedGrid);
    
  };
    const chunkArray = (array, chunkSize) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += chunkSize) {
          chunkedArr.push(array.slice(i, i + chunkSize));
        }
        return chunkedArr;
      };
      const chunkItems = chunkArray(grid,3);
      
    return(
      
        <div className='container py-2'>
          {currentStatus &&
          <div className='container py-2'>
            <h3>Win</h3>
            <div className='btn btn-primary' onClick={() => resetStatus()}>Ok</div>
          </div>
          }
          <h3>{newSymbol} its your turn</h3>
          {chunkItems.map((chunk,chunkIndex)=>(
            <div key={chunkIndex} className="d-flex flex-row">
                {chunk.map((item,index)=>(
                    <div key={index} className='box mx-1 my-1'>
                         <div className="shape" onClick = {() => changeSymbol(item.id)}>
                        <Shape 
                        symbol = {item.symbol}
                        />
                        </div>
                    </div>
                ))}
            </div>
          ))}            
            </div>
       

    )
}
export default Grid;