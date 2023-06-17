import type { Meta, StoryObj } from '@storybook/react';
import Menu from '../../components/menu/Menu';

const meta: Meta<typeof Menu> = {
  component: Menu,
  title: "TopBar/Menu",
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const menu: Story = {
  render: () => <Menu />,
};