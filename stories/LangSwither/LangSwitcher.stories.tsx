import type { Meta, StoryObj } from '@storybook/react';

import LangSwitcher from '@/components/language-swithcer/LangSwitcher';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof LangSwitcher> = {
  title: 'LanguageSwitcher',
  component: LangSwitcher,
  tags: ['autodocs']  
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
