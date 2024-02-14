import Container from '../Container'
import MenuDropdown from './MenuDropdown'
import Logo from '../Logo'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm mb-0'>
      <div className='py-6 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Logo />
            {/* menu items */}
            <div className='flex cursor-pointer justify-center items-center'>
              <Link
                to='/'
                className='hidden lg:block px-4 py-3 hover:bg-pink-100 hover:text-rose-500 rounded-lg transition font-semibold'
              >
                Home
              </Link>
              <Link
                to='/home'
                className='hidden lg:block px-4 py-3 hover:bg-pink-100 hover:text-rose-500 rounded-lg transition font-semibold'
              >
                All Room
              </Link>
              <Link
                to='/dashboard'
                className='hidden lg:block px-4 py-3 hover:bg-pink-100 hover:text-rose-500 rounded-lg transition font-semibold'
              >
                Dashboard
              </Link>

            </div>

            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
