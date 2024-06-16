import type { Meta, StoryObj } from "@storybook/react";
import { Box, Paper } from "@mui/material";
import { MenuItem } from "@/library";
import InboxIcon from "@mui/icons-material/Inbox";
import { fn } from "@storybook/test";

const meta = {
  title: "Navigation/MenuItem",
  component: MenuItem,
  decorators: [
    (Story) => (
      <Paper sx={{ width: 240, maxWidth: "100%" }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </Paper>
    ),
  ], // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs

  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: { onClick: fn() },
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconLabelShortCut: Story = {
  args: {
    icon: "inbox",
    label: "Inbox",
    shortcut: "⌘I",
  },
};
export const LabelOnly: Story = {
  args: {
    label: "label",
  },
};

export const Inset: Story = {
  args: {
    label: "inset",
    inset: true,
  },
};

export const Disabled: Story = {
  args: {
    icon: "home",
    label: "Home",
    shortcut: "⌘H",
    disabled: true,
  },
};
