import { Typography } from "@mui/material";

export default function WidgetContainer({ title, bodyClassName, children }) {
    return (
        <div className={`widget-container`}>
            <div className={`widget-header full-width ${title ? "" : "no-pb"}`}>
                {
                    title ? (
                        <Typography variant="title">{title}</Typography>
                    ) : null
                }
            </div>
            <div className={`full-width ${bodyClassName}`}>{children}</div>
        </div>
    );
}