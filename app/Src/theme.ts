import { createTheme } from '@mui/material/styles';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;  
    regular: true;
    smRegular: true;
    small: true;
    tiny: true;
    lgRegular: true;
    large: true;
    header: true;
  }
}

/*
    xs, extra-small: 0px
    sm, small: 600px
    md, medium: 900px
    lg, large: 1200px
    xl, extra-large: 1536px
*/

const font = `IranYekan, "Roboto", "Helvetica", "Arial", sans-serif !important`;

const borderRadiuses = {
  default: ".5rem"
};

const colors = {
  bodyBg: "#f6f8fa",
  bodyContrastColor: "#4c5761",

  fontColor: "#272829",
  brightFontColor: "#798089",
  menuIconColor: "#59636e",
  menuTextColor: "#1f2328",

  borderColor: "#d1d9e0",

  white: "#fff",
  primary: "#2196f3",
  accent: "#fd8c73"
};

const shadows = {
  sketch: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
};

const rtlDesign = (dir: string, design: any) => (dir === "rtl" ? design : {}); 
const ltrDesign = (dir: string, design: any) => (dir === "ltr" ? design : {}); 

const getPalette = (mode: string) => ({
  primary: {
    main: colors.primary,
  },
  accent: {
    main: colors.accent,
    contrastText: colors.white
  },
  background: {
    // paper: "#fff",
    default: colors.bodyBg 
  }
});

const getTypography = (mode: string) => ({
  allVariants: {
    color: colors.fontColor
  },

  regular: {
    fontSize: "1.125rem"
  },

  smRegular: {
    fontSize: "1rem"
  }, 

  small: {
    fontSize: "0.875rem"
  },

  tiny: {
    fontSize: "0.75rem"
  },

  lgRegular: {
    fontSize: "1.25rem",
  },
  
  large: {
    fontSize: "1.5rem",
  },

  title: {
    fontSize: "1.25rem",
    fontWeight: "bold"
  },

  header: {
    fontSize: "1.75rem"
  }
});

const getComponents = (mode: string, dir="rtl") => ({
  MuiCssBaseline: {
    styleOverrides: {
      "body": {
        fontFamily: font     
      }
    }
  },
  MuiFormControl: {
    styleOverrides: {
      root: { 
        "fieldset": {
          borderRadius: borderRadiuses.default,
          "legend": rtlDesign(dir, {
            textAlign: "right"
          })
        },
        "label": rtlDesign(dir, {
          transformOrigin: "top right",
          left: "unset",
          right: "0",
          transform: "translate(-14px, 16px) scale(1)"
        }),
        "label.Mui-focused, label.MuiFormLabel-filled": rtlDesign(dir, {
          transform: "translate(-14px, -9px) scale(.75)"
        })
      }
    }
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: borderRadiuses.default,
      },
      startIcon: {
        ...rtlDesign(dir, {
          marginLeft: "8px",
          marginRight: "-4px",
        }),
        "*:nth-of-type(1)": {
          fontSize: "22px"
        }
      }
    },
    defaultProps: {
      disableElevation: true
    }
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        "input": {
          userSelect: "none",
          padding: ".8rem 1rem"
        },
        ">.MuiInputBase-adornedEnd": {
          ...rtlDesign(dir, {
            paddingRight: "0",
            paddingLeft: "14px"
          })
        },
        ">.MuiInputBase-adornedStart": {
          ...rtlDesign(dir, {
            paddingLeft: "0",
            paddingRight: "14px"
          })
        },
      }
    }
  },
  MuiTableCell: {
    styleOverrides: {
      root: rtlDesign(dir, {
        textAlign: "right"
      }) 
    }
  },
  MuiSelect: {
    styleOverrides: {
      select: {
        paddingRight: "14px !important",
        paddingLeft: "14px !important"
      },
      root: {
        ...rtlDesign(dir, {
          paddingLeft: "14px",
          "label": {
            left: "unset",
            right: "0"
          }
        }),
        ...ltrDesign(dir, {
          paddingRight: "14px",
        })
      }
    }
  },
  MuiPopover: {
    styleOverrides: {
      paper: {
        borderRadius: borderRadiuses.default,
        boxShadow: shadows.sketch
      }
    }
  }
});

const getDesignTokens = (mode: string) => ({
  palette: getPalette(mode),
  typography: getTypography(mode),
  components: getComponents(mode)
});

// Create a theme instance.
const theme = createTheme(getDesignTokens("light"));

export default theme;
export {
  colors,
  shadows
};