import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Evergreen/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  variant: 'secondary'
};

export const Discrete = Template.bind({});
Discrete.args = {
  label: 'Button',
  variant: 'discrete'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  variant: 'primary',
  label: 'Button',
};

export const XLarge = Template.bind({});
XLarge.args = {
  size: 'xlarge',
  variant: 'primary',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  variant: 'primary',
  label: 'Button',
};

export const XSmall = Template.bind({});
XSmall.args = {
  size: 'xsmall',
  variant: 'primary',
  label: 'Button',
};

export const Tentative = Template.bind({});
Tentative.args = {
  label: 'Button',
  variant: 'tentative',
};

export const Destructive = Template.bind({});
Destructive.args = {
  label: 'Button',
  variant: 'destructive',
};

export const Except = Template.bind({});
Except.args = {
  label: 'Button',
  variant: 'except',
};

export const Light = Template.bind({});
Light.args = {
  label: 'Button',
  variant: 'light',
};