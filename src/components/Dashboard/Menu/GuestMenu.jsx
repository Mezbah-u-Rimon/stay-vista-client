import { HiOutlineFingerPrint } from "react-icons/hi";
import MenuItem from "../Sidebar/MenuItem";


const GuestMenu = () => {
    return (
        <>
            <MenuItem
                icon={HiOutlineFingerPrint}
                label='My Bookings'
                address='my-bookings'
            />

        </>
    );
};

export default GuestMenu;