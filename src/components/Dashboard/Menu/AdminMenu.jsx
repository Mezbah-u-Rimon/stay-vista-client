import MenuItem from "../Sidebar/MenuItem";
import { GrUserSettings } from "react-icons/gr";

const AdminMenu = () => {
    return (
        <>
            <MenuItem
                icon={GrUserSettings}
                label='Manage Users'
                address='manage-users'
            />

        </>
    );
};

export default AdminMenu;