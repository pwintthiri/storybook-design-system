import { Table2 } from './Table2';
// import { TextInput } from './TextInput';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  // arrangement in left panel
  title: 'Example/Table2',
  component: Table2,
  tags: ['autodocs'], // this story is generated automatically by Storybook's Docs addon.
  argTypes: {
    type: { control: { type: 'select', options: ['lined', 'unlined', 'two-columns'] } },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Lined = {
  args: {
    type: 'lined',
  },
};

export const Unlined = {
  args: {
    type: 'unlined',
  },
};

export const TwoColumns = {
  args: {
    type: 'two-columns',
  },
};