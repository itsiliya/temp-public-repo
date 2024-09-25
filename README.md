# school-management
Creating a school management system app for assistant principals.

# remember
IranYekan english characters are a little bit higher on a line so figure the problem out later

# typescript snippet
"Default Field Maker": {
    "prefix": "ed",
    "body": [
        "import { forwardRef } from \"react\";",
        "import { getControlledElementsProp, StateFullProp } from \"../../../Functions/FieldHelper\";",
        "",
        "interface FieldProps {",
        "    name: string,",
        "    ",
        "}",
        "",
        "const $TM_FILENAME_BASE = forwardRef(function $TM_FILENAME_BASE(",
        "    { name, ...props }: FieldProps & StateFullProp, ref",
        ") {",
        "    const stateProps = getControlledElementsProp(props, \"$1\");",
        "",
        "// controllers",
        "// ref={ref}",
        "// name={name}",
        "// {...stateProps}",
        "",
        "    return (",
        "        <>",
        "        </>",
        "    );",
        "});",
        "",
        "export default $TM_FILENAME_BASE;"
    ],
    "description": "Writing export default field making proccess for current file."
}