import { forwardRef } from "react";
import { PiCaretDownBold } from "react-icons/pi";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { getControlledElementsProp, StateFullProp } from "../../../Functions/FieldHelper";

interface Option {
    title: string,
    value: string | number
}

interface FieldProps {
    id: any,
    name: string,
    label: string,
    options: Option[],
    className?: string,
    placeholder: string
}

const SelectField = forwardRef(function SelectField(
    { label, options, name, id, placeholder, className, ...props }: FieldProps & StateFullProp, ref
) {
    const stateProps = getControlledElementsProp(props, "default");

    return (
        <div className="d-flex align-start flex-column justify-center g-5 full-width">
            <label>{label}</label>
            <Select
                fullWidth
                className={className}
                IconComponent={() => <PiCaretDownBold />}
                inputProps={{ defaultValue: " " }}

                // controllers
                id={id}
                ref={ref}
                name={name}
                {...stateProps}
            >
                <MenuItem value=" " sx={{ display: "none" }}>{placeholder}</MenuItem>
                {
                    options?.map?.((option, ind) => (
                        <MenuItem 
                            value={option?.value ?? null}
                            key={`${id}-option-${ind}`}
                        >
                            {option?.title ?? "-"}
                        </MenuItem>
                    )) ?? null
                }
            </Select>
        </div>
    );
});

export default SelectField;