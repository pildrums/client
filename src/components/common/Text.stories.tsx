import { Meta, StoryObj } from "@storybook/react";
import { Text1 } from "./Text";

const meta: Meta<typeof Text1> = {
  component: Text1,
};

export default meta;
type Story = StoryObj<typeof Text1>;

export const TextFirstStory: Story = {
  args: {},
};
