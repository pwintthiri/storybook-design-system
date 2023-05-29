import { TextInput } from './TextInput';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  // arrangement in left panel
  title: 'Example/TextInput',
  component: TextInput,
  tags: ['autodocs'], // this story is generated automatically by Storybook's Docs addon.
  argTypes: {
    type: { control: { type: 'select', options: ['Outlined', 'Lined', 'Filled'] } },
    // labelText: { control: { type: 'text' } },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Outlined = {
  args: {
    type: 'outlined',
  },
};

export const Lined = {
  args: {
    type: 'lined',
  },
};

export const Filled = {
  args: {
    type: 'filled',
  },
};