import { MdAddHomeWork, MdOutlineManageHistory, MdOutlineMapsHomeWork } from "react-icons/md";
import MenuItem from "../Sidebar/MenuItem";


const HostMenu = () => {
    return (
        <>
            <MenuItem
                icon={MdAddHomeWork}
                label='Add Rooms'
                address='add-room'
            />
            <MenuItem
                icon={MdOutlineMapsHomeWork}
                label='My Listing'
                address='my-listing'
            />
            <MenuItem
                icon={MdOutlineManageHistory}
                label='Manage Bookings'
                address='manage-bookings'
            />
        </>
    );
};

export default HostMenu;