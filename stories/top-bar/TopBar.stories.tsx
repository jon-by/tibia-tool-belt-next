import type { Meta, StoryObj } from '@storybook/react';
import TopBar from '../../components/top-bar/TopBar';
import MobileContext from '../../context/ResponsiveCotext';
const meta: Meta<typeof TopBar> = {
  component: TopBar,
  title: "TopBar/topBar",
  decorators:[
    (Story) => (
      <MobileContext>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </MobileContext>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof TopBar>;

export const topBar: Story = {
  render: () => <TopBar />,
};