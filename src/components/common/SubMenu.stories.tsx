import { Meta, StoryObj } from "@storybook/react";
import SubMenu from "./SubMenu";

const meta: Meta<typeof SubMenu> = {
  component: SubMenu,
};

export default meta;
type Story = StoryObj<typeof SubMenu>;

export const SubMenuStory: Story = {
  args: {},
};
