import type { Meta, StoryObj } from '@storybook/react';
import Logo from '../../components/logo/Logo';

const meta: Meta<typeof Logo> = {
  component: Logo,
  title: "TopBar/Logo",
};

export default meta;
type Story = StoryObj<typeof Logo>;


export const logo: Story = {
  render: () => <Logo />,
};