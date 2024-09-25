import { useState } from "react";
import { Collapse } from "@mui/material";
import { isRouteErrorResponse } from "@remix-run/react";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";

import styles from "./ErrorPageStyle.module.css";

export default function ErrorBoundaryPage({ error }) {
    const isResponse = isRouteErrorResponse(error);    
    const content = {
        title: isResponse ? error.status : 404,
        data: (isResponse ? error.data : (
            error?.stack ? error.stack :
            error?.message ? error.message : null
        )) ?? null
    };  
    
    return (
        <section>
            <div className={styles.header}>
                <div className={styles.content}>
                    <span className={styles.title}>{content.title}</span>
                    <span className={styles.subTitle}>{isResponse ? "به نظر گم شدی!" : "مشکلی پیش آمده!"}</span>
                </div>
            </div>
            { content?.data ? <ErrorData errorMessage={content.data} /> : null }
            <a href="/" className={styles.link}>بازگشت به صفحه اصلی</a>
        </section> 
    );
}

function ErrorData({ errorMessage }) {
    const [collapsed, setCollapsed] = useState(true); 

    function handleCollapse(e) {
        if (!e || (e && (
                e?.key === "Enter" || 
                (collapsed && e?.key === "ArrowDown") ||
                (!collapsed && e?.key === "ArrowUp")
            )
        )) setCollapsed(val => !val);
    }

    return (
        <div className={styles.errorBox}>
            <div 
                tabIndex="0"
                role="button"
                onClick={() => handleCollapse()}
                onKeyDown={handleCollapse}
                className={styles.errorBoxTop}
            >
                <p>
                    { collapsed ? "مشاهده جزئیات" : "بستن جزئیات" }
                </p>
                <>{!collapsed ? <PiCaretUpBold /> : <PiCaretDownBold />}</>
            </div>
            <Collapse in={!collapsed}>
                <pre className={styles.errorBoxBottom}>{errorMessage}</pre>
            </Collapse>
        </div>
    );
}