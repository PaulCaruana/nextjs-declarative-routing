import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";
import { Container } from "@/library";

const meta = {
  title: "Library/Container",
  component: Container,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

const Sample = () => (
  <>
    <div style={{ backgroundColor: "red" }}>Widget1</div>
    <div style={{ backgroundColor: "green", width: "100px" }}>
      Widget Type 2
    </div>
    <div style={{ backgroundColor: "orange", width: "80px" }}>Widget3</div>
  </>
);
export const Left: Story = {
  args: {
    gap: "8px",
    children: <Sample />,
  },
};
export const Spread: Story = {
  args: {
    variant: "spread",
    gap: "8px",
    children: <Sample />,
  },
};
export const Equal: Story = {
  args: {
    variant: "equal",
    gap: "8px",
    children: <Sample />,
  },
};

export const Evenly: Story = {
  args: {
    variant: "evenly",
    gap: "8px",
    children: <Sample />,
  },
};
export const Middle: Story = {
  args: {
    variant: "middle",
    gap: "8px",
    children: <Sample />,
  },
};
export const Centre: Story = {
  args: {
    variant: "center",
    gap: "8px",
    children: <Sample />,
  },
};
export const Right: Story = {
  args: {
    variant: "right",
    gap: "8px",
    children: <Sample />,
  },
};
export const Stacked: Story = {
  args: {
    direction: "column",
    gap: "8px",
    children: <Sample />,
  },
};
export const StackedCentred: Story = {
  args: {
    variant: "center",
    direction: "column",
    gap: "8px",
    children: <Sample />,
  },
};

export const Wrap: Story = {
  args: {
    variant: "wrap",
    gap: "8px",
    children: (
      <>
        <Sample />
        <Sample />
        <Sample />
        <Sample />
        <Sample />
        <Sample />
        <Sample />
        <Sample />
        <Sample />
      </>
    ),
  },
};
