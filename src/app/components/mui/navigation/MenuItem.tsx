import React from "react";
import MuiMenuItem, { MenuItemProps } from "@mui/material/MenuItem";
import {
  Icon,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import Typography from "@mui/material/Typography";
import { SvgIconComponent } from "@mui/icons-material";

type Props = MenuItemProps & {
  icon?: string;
  label: string;
  shortcut?: string;
  inset?: boolean;
};

const MenuItem: React.FC<Props> = ({
  icon,
  label,
  onClick,
  shortcut,
  inset = false,
  disabled,
}) => {
  const handleClick = React.useCallback<React.MouseEventHandler<HTMLLIElement>>(
    (event) => {
      event.stopPropagation();

      if (disabled) {
        return;
      }

      if (onClick) {
        onClick(event);
      }
    },
    [disabled, onClick],
  );

  return (
    <MuiMenuItem disabled={disabled} onClick={handleClick}>
      {icon && (
        <ListItemIcon>
          <Icon>{icon}</Icon>
        </ListItemIcon>
      )}
      <ListItemText inset={inset}>{label}</ListItemText>
      {shortcut && (
        <Typography variant="body2" color="text.secondary">
          {shortcut}
        </Typography>
      )}
    </MuiMenuItem>
  );
};

export default MenuItem;
