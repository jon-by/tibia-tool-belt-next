import type { Meta, StoryObj } from '@storybook/react';

import LangSwitcher from '../components/language-swithcer/LangSwitcher';

const meta: Meta<typeof LangSwitcher> = {
  component: LangSwitcher,
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;


export const LanguageSwitcher: Story = {
  render: () => <LangSwitcher  />,
};