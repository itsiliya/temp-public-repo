type StateFullProp = {
    value: any,
    setValue: any,
    controlledElements: boolean
}

type Variants = "default"

export function getControlledElementsProp(props: StateFullProp, variant: Variants) {
    let handler: string = "onChange";
    let definition: unknown = () => { };

    switch (variant) {
        default:
            handler = "onChange";
            definition = (e: any) => props.setValue(e?.target?.value ?? "");
            break;
    }

    return (
        props?.controlledElements ? {
            value: props?.value ?? "",
            [handler]: definition 
        } : { defaultValue: "" }
    )
}

export type { StateFullProp };