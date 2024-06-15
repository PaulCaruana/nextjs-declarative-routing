"use client";
import React from "react";
import { Box, BoxProps } from "@mui/material";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

type Props = BoxProps & {
  maxWidth?: string;
};

const Centre: React.FC<Props> = ({
  maxWidth = "1200px",
  children,
  ...boxProps
}) => {
  return <StyledBox maxWidth={maxWidth}>{children}</StyledBox>;
};

const StyledBox = styled(Box)(
  ({ theme }) => css`
    margin: 0 auto;
  `,
);

export default Centre;
