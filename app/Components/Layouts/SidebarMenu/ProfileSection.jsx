import { Typography } from "@mui/material";
import { getTextDirection, textShortener } from "../../../Functions/UIHelper";

export default function ProfileSection({ src="/logo.svg", alt="User Profile Picture", name, detail }) {
    return (
        <div className="sidebar-menu-profilesec">
            <div className="sidebar-menu-profilesec-details">
                <div id="sidebar-menu-profilesec-profile-image">
                    <img src={src} alt={alt} />
                </div>
                <div className="d-flex flex-column">
                    <Typography className={`width-fit dir-${getTextDirection(name)} sidebar-menu-profilesec-details-name`} variant="small">{textShortener(name, 21)}</Typography>
                    <Typography className={`width-fit dir-${getTextDirection(detail)} sidebar-menu-profilesec-details-role`} variant="small">{textShortener(detail, 21)}</Typography>
                </div>
            </div>
        </div>
    );
}