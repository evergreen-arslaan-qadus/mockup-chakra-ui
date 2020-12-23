import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Textfield, { TextfieldProps } from './Textfield';

export default {
  title: 'Evergreen/Textfield',
  component: Textfield,
} as Meta;

const Template: Story<TextfieldProps> = (args) => <Textfield {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Textfield',
  variant: 'primary'
};
