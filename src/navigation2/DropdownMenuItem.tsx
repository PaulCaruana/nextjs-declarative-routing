import { Button, Menu, MenuItem, useTheme } from "@mui/material";
import React, { useCallback, useRef, useState } from "react";

export type TMenuItem = {
  title: string;
  pathname?: string;
  subMenus?: TMenuItem[];
};

type Props = {
  menuItem: TMenuItem;
  menuShowingDropdown: string;
  setMenuShowingDropdown: (menuTitle: string) => void;
};

const DropdownMenuItem: React.FC<Props> = ({
  menuItem,
  menuShowingDropdown,
  setMenuShowingDropdown,
}) => {
  const { title, subMenus } = menuItem;
  const buttonRef = useRef<null | HTMLButtonElement>(null);

  const showSubMenu = useCallback(() => {
    setMenuShowingDropdown(menuItem.title);
  }, [menuItem.title, setMenuShowingDropdown]);

  const closeSubMenu = useCallback(() => {
    setMenuShowingDropdown("");
  }, [setMenuShowingDropdown]);

  const subMenusNodes = subMenus?.map((subMenuItem) => {
    return (
      <MenuItem
        onClick={() => {
          console.log("second level menu tiem click");
        }}
        key={subMenuItem.title}
      >
        {subMenuItem.title}
      </MenuItem>
    );
  });

  const theme = useTheme();

  return (
    <>
      <Button
        id={`menuItem-${title}`}
        // higher zIndex to make button show submenu when move mouse from another submenu
        sx={{ zIndex: theme.zIndex.modal + 1 }}
        ref={buttonRef}
        onClick={() => {
          if (!menuItem.subMenus) {
            console.log("first level menu click");
          }
        }}
        onMouseLeave={() => {
          setMenuShowingDropdown("");
        }}
        onMouseEnter={() => {
          if (menuItem.subMenus) {
            showSubMenu();
            return;
          }
        }}
      >
        {title} {menuItem.subMenus ? "↓" : ""}
      </Button>
      <Menu
        PaperProps={{
          onMouseEnter: () => {
            showSubMenu();
          },
          onMouseLeave: () => {
            closeSubMenu();
          },
        }}
        anchorEl={buttonRef.current}
        open={menuShowingDropdown === menuItem.title}
        onClose={closeSubMenu}
      >
        {subMenusNodes}
      </Menu>
    </>
  );
};

export default DropdownMenuItem;
