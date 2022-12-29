import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 700,
    lineHeight: "14px",
    height: "45px",
    // textTransform: "uppercase",
    fontSize: "14px",
    // fontHeight: "100%",
    // letterSpacing: "0.015em",
    borderRadius: "full",
    padding: "18px 18px",
    bg: "white",
  },
  variants: {
    primary: {
      fontFamily: "Avenir-Book",
      fontSize: "14px",
      border: "none",
      height: "45px",
      bgColor: "primary.base",
      color: "solid.white",
      _hover: {
        bgColor: "primary.20",
      },
    },
    secondary: {
      fontFamily: "Avenir-Medium",
      height: "45px",
      fontSize: "14px",
      border: "none",
      bgColor: "primary.base",
      color: "sys.onPrimaryContainer",
      _hover: {
        bgColor: "sys.primary",
        color: "solid.white",
      },
    },
    outline: {
      fontFamily: "Avenir-Medium",
      height: "45px",
      fontSize: "14px",
      border: "1px solid",
      borderColor: "primary.base",
      bgColor: "none",
      color: "solid.primary",
      _hover: {
        bgColor: "sys.primary",
        color: "solid.white",
      },
    },
    textOnly: {
      fontFamily: "Avenir-Book",
      height: "45px",
      fontSize: "14px",
      _hover: {
        // bgColor: "sys.primary",
        // color: "solid.white",
      },
    }
  },
};
