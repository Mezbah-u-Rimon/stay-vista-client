import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import About from './About';
import Favorite from './Favorite';


const MainHome = () => {

    return (
        <div className='max-w-7xl mx-auto mt-0'>
            <Helmet>
                <title> Home </title>
            </Helmet>
            <Banner />
            <About />
            <Favorite />
        </div>
    );
};

export default MainHome;