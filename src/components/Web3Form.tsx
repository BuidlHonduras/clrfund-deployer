import React, { Fragment } from "react";
import { Box, Flex, Input, Button, Spinner, chakra, forwardRef, BoxProps, Divider, Center } from "@chakra-ui/react";

import { ErrorMessage } from "./ErrorMessage";

export interface RegisterHelper {
  required?: string;
  validate?: any;
  pattern?: {
    value: RegExp;
    message: string;
  };
  setValueAs?: (value: any) => any;
}

export const Form = ({ children, ...rest }) => {
  return (
    <chakra.form
      pt="36px"
      pb="5"
      sx={{
        left: "0px",
        top: "0px",
        width: ["359px", "359px", "680px"],
        background: "linear-gradient(103.01deg, rgba(0, 0, 0, 0.5) 0.49%, rgba(0, 0, 0, 0.4) 100%)",
        boxShadow: "0px 16px 32px rgba(134, 124, 210, 0.2)",
        backdropFilter: "blur(50px)",
        borderRadius: "15px",
      }}
      {...rest}>
      {children}
    </chakra.form>
  );
};

export const FormTitle = ({ children, ...rest }) => {
  return (
    <>
      <Box
        sx={{
          textAlign: "left",
          px: "30px",
          fontFamily: "Futura",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "18px",
          lineHeight: "150%",
        }}
        {...rest}>
        {children}
      </Box>
      <Box
        sx={{
          textAlign: "left",
          px: "30px",
          pt: "17px",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "14px",
          lineHeight: "150%",
          color: "#E0E0E0",
        }}>
        You may leave the default values or modify them to fit your needs here.
      </Box>
    </>
  );
};
export const FormHeading = ({ detail, children, ...rest }) => {
  return (
    <>
      <Box
        sx={{
          textAlign: "left",
          px: "30px",
          pt: "27px",
          fontFamily: "Futura",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "16px",
          lineHeight: "21px",
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
        {...rest}>
        {children}
      </Box>
      <Flex pt="14px" width="100%" alignItems="center" alignContent="center">
        <Box mx="30px" width="calc(98% - 60px)">
          <Divider sx={{ border: "1px solid #7375A6" }} />
        </Box>
      </Flex>

      <Box
        sx={{
          textAlign: "left",
          px: "30px",
          pt: "17px",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "14px",
          lineHeight: "150%",
          color: "#E0E0E0",
        }}>
        {detail}
      </Box>
    </>
  );
};

export const FormDetail = (props) => {
  return (
    <Box
      sx={{
        fontFamily: "Helvetica",
        px: "30px",
        pt: "17px",
        overflow: "hidden",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "8px",
        lineHeight: "9px",
        textAlign: "left",
        textTransform: "uppercase",
        color: "#FBFF45",
      }}
      {...props}
    />
  );
};

export interface FormInputProps {
  errors?: any;
  label?: any;
}
export const FormInput = forwardRef<BoxProps & FormInputProps, "input">((props, ref) => {
  return (
    <React.Fragment>
      <Flex
        minHeight="80px"
        mx="30px"
        mt="36px"
        px="19px"
        pt="12px"
        pb="14px"
        className="form-item"
        flexDirection="column"
        sx={{
          background: "linear-gradient(103.8deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.1) 100.69%)",
          boxShadow: "0px 2px 18px rgba(134, 124, 210, 0.1)",
          backdropFilter: "blur(30px)",
          borderRadius: "12px",
        }}>
        <Flex className="form-label-container" flexWrap="wrap" flexDirection="row" verticalAlign="top">
          <Box className="form-label">
            <Box
              sx={{
                overflowWrap: "anywhere",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontFamily: "Futura",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "16px",
                lineHeight: "21px",
                textTransform: "capitalize",
                color: "#FFFFFF",
              }}
              {...props}>
              {props.label}
            </Box>
          </Box>

          <ErrorMessage
            errors={props.errors}
            name={props.name ? props.name : ""}
            render={({ message }) => (
              <Box
                className="form-error"
                textAlign="left"
                mt="3px"
                mr="1"
                sx={{
                  overflowWrap: "anywhere",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontFamily: "error",
                  fontSize: "xs",
                  fontWeight: "regular",
                  lineHeight: "tight",
                  color: "#fff650",
                  "::before": { display: "inline", content: '"⚠ "' },
                }}>
                {message}
              </Box>
            )}
          />
        </Flex>
        <Flex className="form-input-container" flexDirection="row" mt="10px">
          <Input
            ref={ref}
            className="form-input"
            name={props.name}
            placeholder={props.placeholder}
            pl={1}
            sx={{
              border: "none",
              width: "100%",
              background: "transparent",
              color: "#FFFFFF",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
              lineHeight: "150%",
            }}
          />
        </Flex>
      </Flex>
    </React.Fragment>
  );
});

export interface FormSubmitProps {
  loading?: boolean;
}
export const FormSubmit = ({ children, loading, ...rest }) => {
  return (
    <React.Fragment>
      <Flex my="35px" mx="auto" className="form-submit" flexDirection="column">
        <Button
          type="submit"
          isLoading={loading as boolean}
          loadingText="Sending Transaction"
          colorScheme="teal"
          variant="outline"
          height="40px"
          color="#16C8B5"
          sx={{
            width: ["300px", "300px", "auto"],
            px: ["5px", "5px", "25px"],
            textTransform: "uppercase",
            border: "2px solid #16C8B5",
            boxSizing: "border-box",
            borderRadius: "32px",
            mx: "auto",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "150%",
            textAlign: "center",
          }}
          {...rest}>
          {children}
        </Button>
      </Flex>
    </React.Fragment>
  );
};

export interface FormErrorProps {
  error?: any;
}
export const FormError = ({ error, ...rest }) => {
  return error ? (
    <React.Fragment>
      <Flex mx="auto">
        <Box
          width="266px"
          mx="auto"
          textAlign="center"
          {...rest}
          sx={{
            fontFamily: "error",
            fontSize: "10px",
            fontWeight: "regular",
            lineHeight: "tight",
            color: "#fff650",
            "::before": { display: "inline", content: '"⚠ "' },
            overflow: "hidden",
          }}>
          {error}
        </Box>
      </Flex>
    </React.Fragment>
  ) : (
    <React.Fragment></React.Fragment>
  );
};

export interface FormReceiptProps {
  receipt?: any;
}
export const Receipt = ({ receipt, ...rest }) => {
  const json2String = (value) => {
    try {
      return JSON.stringify(value, null, 2);
    } catch (e) {
      return false;
    }
  };

  return receipt ? (
    <React.Fragment>
      <Flex mx="auto">
        <Box
          width="266px"
          mx="auto"
          my="3"
          textAlign="left"
          sx={{
            fontFamily: "monospace",
            fontSize: "8px",
            fontWeight: "regular",
            lineHeight: "tight",
            color: "#FFFFFF",
            overflow: "hidden",
          }}
          {...rest}>
          <Fragment>{json2String(receipt)}</Fragment>
        </Box>
      </Flex>
    </React.Fragment>
  ) : (
    <React.Fragment></React.Fragment>
  );
};

export interface ExplorerLinkProps {
  url?: string;
}
export const ExplorerLink = ({ url, ...rest }) => {
  return url ? (
    <React.Fragment>
      <Flex mx="auto">
        <Box
          mx="auto"
          textAlign="center"
          fontSize="12px"
          as="a"
          {...rest}
          sx={{
            fontFamily: "detail",
            fontSize: "12px",
            lineHeight: "14px",
            textAlign: "center",
            fontWeight: "regular",
            color: "#16C8B5",
          }}
          href={url}>
          ExplorerLink:
          {url}
        </Box>
      </Flex>
    </React.Fragment>
  ) : (
    <React.Fragment></React.Fragment>
  );
};

/////////////REACT-HOOK-FORM HELPERS////////////////

const registerAddress: RegisterHelper = {
  required: "This field is required",
  pattern: {
    value: /^0x[a-fA-F0-9]{40}$/,
    message: "Invalid ethereum address",
  },
  setValueAs: (value) => value,
};
const registerUint256: RegisterHelper = {
  required: "This field is required",
  pattern: {
    value: /^[0-9]+$/,
    message: "Invalid amount",
  },
  setValueAs: (value) => value,
};

const registerUint8: RegisterHelper = {
  required: "This field is required",
  pattern: {
    value: /^[0-9]+$/,
    message: "Invalid amount",
  },
  setValueAs: (value) => value,
};
const registerBytes32: RegisterHelper = {
  required: "This field is required",
  validate: {
    isValidJSON: (value) => {
      try {
        JSON.parse(value);
      } catch (e) {
        return "Failed to parse JSON";
      }
      return true;
    },
  },

  setValueAs: (value) => value,
};
const registerBytes: RegisterHelper = {
  required: "This field is required",
  pattern: {
    value: /^0x[a-fA-F0-9]+$/,
    message: "Invalid hex in call data",
  },
  setValueAs: (value) => value,
};
const registerString: RegisterHelper = {
  required: "This field is required",
  pattern: {
    value: /[a-zA-Z0-9]+/,
    message: "Invalid string in call data",
  },
  setValueAs: (value) => value,
};

export const Web3Form = {
  Form: Form,
  Title: FormTitle,
  Heading: FormHeading,
  Detail: FormDetail,
  Input: FormInput,
  Submit: FormSubmit,
  Error: FormError,
  Receipt: Receipt,
  ExplorerLink: ExplorerLink,
  registerAddress: registerAddress,
  registerUint8: registerUint8,
  registerUint256: registerUint256,
  registerBytes32: registerBytes32,
  registerBytes: registerBytes,
  registerString: registerString,
};
export default Web3Form;
