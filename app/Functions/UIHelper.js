export function textShortener(text, length) {
    const transformed = String(text);
    
    return (
        transformed.length < length 
        ? transformed 
        : `${transformed.slice(0, length - 2)}...`
    );
}

export function getTextDirection(text) {
    const transformed = String(text);

    const rtlChars = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC";
    const rtlDirCheck = new RegExp(`^[${rtlChars}]`);

    return rtlDirCheck.test(transformed) ? "rtl" : "ltr";
}