import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import About from './About';
import Favorite from './Favorite';
import Services from './Services';
import Gallery from './Gallery';
import Blogs from './Blogs';
import Reviews from './Reviews';


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
            <Gallery />
            <Blogs />
            <Reviews />
        </div>
    );
};

export default MainHome;