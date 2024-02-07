import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import About from './About';
import Favorite from './Favorite';
import Services from './Services';


const MainHome = () => {

    return (
        <div className='max-w-7xl mx-auto mt-0'>
            <Helmet>
                <title> Home </title>
            </Helmet>
            <Banner />
            <About />
            <Favorite />
            <Services />
        </div>
    );
};

export default MainHome;