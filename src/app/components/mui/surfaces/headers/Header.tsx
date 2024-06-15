"use client";
import React from "react";
import { AppBar, AppBarProps, Box, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
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
    color: ${theme.palette.primary.main};
    margin: 0 auto;
  `,
);

export default Header;
