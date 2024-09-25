import { Link } from "@remix-run/react";
import { Typography } from "@mui/material";

export default function LogoSection({ customLink=false, src="/favicon.ico", alt="Brand Name Icon", brandName }) {
    return (
        <div className="sidebar-menu-logo-section">
            <Link 
                to={!customLink ? "/" : customLink}
                className="d-flex align-center g-8"
            >
                <img id="sidebar-menu-brand-logo" src={src} alt={alt} />
                <Typography variant="h6 brand-link">{brandName}</Typography>
            </Link>
        </div>
    );
}