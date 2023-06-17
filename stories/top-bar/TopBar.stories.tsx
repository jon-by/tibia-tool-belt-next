import type { Meta, StoryObj } from '@storybook/react';
import TopBar from '../../components/top-bar/TopBar';

const meta: Meta<typeof TopBar> = {
  component: TopBar,
  title: "TopBar/topBar",
};

export default meta;
type Story = StoryObj<typeof TopBar>;

export const topBar: Story = {
  render: () => <TopBar />,
};