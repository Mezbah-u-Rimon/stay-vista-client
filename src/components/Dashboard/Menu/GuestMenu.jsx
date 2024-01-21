import { HiOutlineFingerPrint } from "react-icons/hi";
import MenuItem from "../Sidebar/MenuItem";
import { GrUserAdmin } from "react-icons/gr";
import useRole from "../../../hooks/useRole";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";


const GuestMenu = () => {
    const [role] = useRole();
    const { user } = useAuth();
    const [isOpen, setIsOpen] = useState(false)

    const modalHandler = async () => {
        //request to be a host
    }

    return (
        <>
            <MenuItem
                icon={HiOutlineFingerPrint}
                label='My Bookings'
                address='my-bookings'
            />

            {role === 'guest' && (
                <div
                    // onClick={() => setIsOpen(true)}
                    className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'
                >
                    <GrUserAdmin className='w-5 h-5' />

                    <span className='mx-4 font-medium'>Become A Host</span>
                </div>
            )}

        </>
    );
};

export default GuestMenu;