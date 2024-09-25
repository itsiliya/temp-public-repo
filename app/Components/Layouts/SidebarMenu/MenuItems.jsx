import { Typography } from "@mui/material";
import { useLocation, useNavigate } from "@remix-run/react";
import { sections } from "../../../Configs/pageList";

export default function MenuItems() {
    return (
        <div className="sidebar-menu-items">
            {
                sections?.map?.((section, ind) => (
                    <MenuGroup 
                        title={section?.title}
                        pages={section?.pages}
                        key={`page-section-container-${ind}`}
                    />
                )) ?? null
            }
        </div>
    );
}

function MenuGroup({ title, pages }) {
    const location = useLocation();

    return (
        <div className="sidebar-menu-items-group">
            { title ? (
                <Typography variant="tiny" className="sidebar-menu-items-group-header p-0-8">{title}</Typography>
            ) : null}
            <div className="sidebar-menu-items-group-items">
                {
                    pages?.map?.((page, ind) => (
                        <MenuItem
                            details={page}
                            active={location?.pathname === page?.href}
                            key={`page-section-page-${ind}`}
                        />
                    )) ?? null
                }
            </div>
        </div>
    );  
}

function MenuItem({ details, active=false }) {
    const navigate = useNavigate();
    const Icon = details?.icon ?? <></>;    

    return (
        <div 
            role="button"
            tabIndex={-1}
            className={`sidebar-menu-items-group-items-item d-flex align-center g-8 ${active ? "active" : ""}`}
            onClick={() => navigate(details?.href ?? 0)}
            onKeyDown={() => {}}
        >
            <Icon className="sidebar-menu-items-group-items-item-icon" />
            <Typography className="sidebar-menu-items-group-items-item-text" variant="sm-regular">{details?.title ?? ""}</Typography>
        </div>
    );
}