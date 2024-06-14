import type { Preview } from "@storybook/react";
import Providers from "../src/app/providers";

const preview: Preview = {
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story, { parameters }) => {
      // 👇 Make it configurable by reading from parameters
      return (
        <Providers isPreviewMode={false}>
          <div style={{ padding: "16px" }}>
            <Story />
          </div>
        </Providers>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
