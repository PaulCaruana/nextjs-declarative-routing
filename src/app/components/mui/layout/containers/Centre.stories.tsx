import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";
import { Centre } from "@/library";

const meta = {
  title: "Layout/Centre",
  component: Centre,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof Centre>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Box
        sx={{
          backgroundColor: "#eee",
          padding: "16px",
        }}
      >
        Content
      </Box>
    ),
  },
};