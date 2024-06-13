"use client";
import React from "react";
import { Box, BoxProps } from "@mui/material";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

type Props = Omit<BoxProps, "justifyContent"> & {
  variant?:
    | "left"
    | "equal"
    | "center"
    | "right"
    | "spread"
    | "middle"
    | "evenly"
    | "wrap";
  direction?: "column" | "row";
  gap?: string;
};

const Container: React.FC<Props> = ({
  variant = "left",
  direction = "row",
  gap = "0",
  children,
  ...boxProps
}) => {
  const wrap = variant === "wrap" ? "wrap" : "nowrap";
  const className = `tile-${variant} ${direction}-${variant}`;
  const justifyContentTypes = {
    left: "flex-start",
    equal: "space-between",
    spread: "space-between",
    evenly: "space-evenly",
    middle: "space-around",
    center: "center",
    right: "flex-end",
    wrap: "flex-start",
  };
  const justifyContent = justifyContentTypes[variant];

  return (
    <StyledBox
      display="flex"
      flexDirection={direction}
      className={className}
      justifyContent={justifyContent}
      flexWrap={wrap}
      gap={gap}
      {...boxProps}
    >
      {children}
    </StyledBox>
  );
};

const StyledBox = styled(Box)(
  ({ theme }) => css`
    &.column-center > * {
      margin-left: auto;
      margin-right: auto;
    }
    & > * {
      flex: unset;
    }
    &.tile-equal > * {
      flex: 1 1 auto;
    }
  `,
);

export default Container;
