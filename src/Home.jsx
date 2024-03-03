import './css/Home.css';
import Grid from './components/Grid';

function Home(){
    return(

        <div className='d-flex justify-content-center flex-column'>
            <h1 className='my-4'>TicTacToe</h1>
            <Grid/>

        </div>
    )

}
export default Home;