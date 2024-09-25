import { app } from "../../Configs/appSetting";

import MenuItems from "./SidebarMenu/MenuItems";
import LogoSection from "./SidebarMenu/LogoSection";
import ProfileSection from "./SidebarMenu/ProfileSection";

export default function SidebarMenu() {
    return (
        <div className="sidebar-menu">
            <LogoSection 
                src={app.logoSrc}
                alt={app.logoAlt}
                brandName={app.name}
            />
            <MenuItems />
            <ProfileSection 
                name={"شایان باجلان"}
                alt="profile picture"
                detail={"shayan83bajelan@gmail.com"}
                src="https://avatar.iran.liara.run/public/"
            />
        </div>
    );
}