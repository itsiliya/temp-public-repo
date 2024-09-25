import SidebarMenu from "./SidebarMenu";

export default function AppLayout({ children }) {
    return (
        <div className="app-layout-container">
            <SidebarMenu />
            <div className="app-outlet-container">
                <div className="app-outlet-container-wrapper">
                    {children}
                </div>
            </div>
        </div>
    );
}