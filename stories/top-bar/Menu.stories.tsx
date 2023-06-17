import type { Meta, StoryObj } from '@storybook/react';
import Menu from '../../components/menu/Menu';
import MobileContext from '../../context/ResponsiveCotext';

const meta: Meta<typeof Menu> = {
  component: Menu,
  title: "TopBar/Menu",
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
type Story = StoryObj<typeof Menu>;

export const menu: Story = {
  render: () => <Menu />,
};