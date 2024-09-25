import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import WidgetContainer from "../WidgetContainer";
import { PiCaretDownFill, PiCaretUpDownFill, PiCaretUpFill } from "react-icons/pi";

type SortStatus = "none" | "asc" | "desc" | "disable"

type Header = {
    text: string,
    sortStatus?: SortStatus
};

interface Props {
    title: string,
    headers: Header[],
    hasShadow?: boolean,
    children: any
}

const RANDOM_ID = Math.random();

export default function DefaultTable({
    title,
    headers,
    hasShadow=false, 
    children
}: Props) {
    return (
        <div className={`default-table-container ${hasShadow ? "widget-shadow no-border" : ""}`}>
            {
                title ? (
                    <div className="full-width d-flex align-center x-stretch-pad">
                        <div className="flex-grow">
                            <Typography variant="title">{title}</Typography>
                        </div>
                        <div className="flex-grow-dis">
                        </div>
                    </div>
                ) : null
            }
            <Table className="default-table"> 
                <TableHead className="default-table-head">
                    <TableRow>
                        {
                            headers?.map?.((header, ind) => (
                                <TableCell
                                    className={
                                        header?.sortStatus !== "disable" &&
                                        header?.sortStatus !== undefined 
                                        ? "cursor-pointer" : ""
                                    }
                                    key={`${RANDOM_ID}-table-cell-${ind}`}
                                >
                                    <div className="d-flex align-center g-5">
                                        {header?.text ?? ""}
                                        {
                                            header?.sortStatus !== "disable" ? (
                                                header?.sortStatus === "none" ?
                                                    <PiCaretUpDownFill />
                                                : header?.sortStatus === "asc" ? 
                                                    <PiCaretUpFill />
                                                : header?.sortStatus === "desc" ?
                                                    <PiCaretDownFill />
                                                : null
                                            ) : null
                                        }
                                    </div>
                                </TableCell>
                            )) ?? null
                        }
                    </TableRow>
                </TableHead>
                <TableBody>{children}</TableBody>
            </Table>
        </div>
    );
}