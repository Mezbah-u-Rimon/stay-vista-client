import logo from '../../assets/images/logo.png'

const Footer = () => {
    return (
        <div className="p-10 bg-neutral-200 text-base-content">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-10">
                <div className='space-y-3'>
                    <img className='h-[40px]' src={logo} alt="" />
                    <p className='text-justify'>
                        Escape to paradise at Azure Waves Resort, where unparalleled luxury meets the serene beauty of the tropics. Nestled along the pristine coastline of destination,
                    </p>
                </div>
                <div className='pt-5 pl-8'>
                    <h6 className="text-xl font-medium">Services</h6>
                    <p>Branding</p>
                    <p>Design</p>
                    <p>Marketing</p>
                    <p>Advertisement</p>
                </div>
                <div className='pt-5 pl-8'>
                    <h6 className="text-xl font-medium">Company</h6>
                    <p>About us</p>
                    <p>Contact</p>
                    <p>Jobs</p>
                    <p>Press kit</p>
                </div>
                <div className='pt-5 pl-8'>
                    <h6 className="text-xl font-medium">Legal</h6>
                    <p>Terms of use</p>
                    <p>Privacy policy</p>
                    <p>Cookie policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;