import { Link } from 'react-router-dom';
import './Home.css';

function Home () {
    return (
        <div className='row mt-5 App homeBody'>
            <div className='col'><Link to='/task1' className='btn btn-secondary taskBtn'>Click here to view Task 1</Link></div>
            <div className='col'><Link to='/task2' className='btn btn-secondary taskBtn'>Click here to view Task 2</Link></div>
        </div>
    );
}

export default Home;
