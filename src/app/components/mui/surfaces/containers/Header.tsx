"use client";
import React from "react";
import { AppBar, Box, AppBarProps, Toolbar } from "@mui/material";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

type Props = AppBarProps & {
  maxWidth?: string;
};

const Header: React.FC<Props> = ({ children, ...appBarProps }) => {
  return (
    <AppBar position="static" {...appBarProps}>
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
};

const StyledBox = styled(Box)(
  ({ theme }) => css`
    margin: 0 auto;
  `,
);

export default Header;
