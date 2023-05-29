import { Button2 } from './Button2';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Button2',
  component: Button2,
  tags: ['autodocs'],
  argTypes: {
    type: { control: { type: 'select', options: ['Primary', 'Secondary', 'Tertiary'] } },
    label: {control: {type: 'text'}}
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    type: 'primary',
    rounded: false,
    label: 'Primary Button',
    icon: false,
    disabled: false,
  },
};

export const Secondary = {
    args: {
        type: 'secondary',
        rounded: false,
        label: 'Secondary Button',
        icon: false,
        disabled: false,
    },
};

export const Tertiary = {
    args: {
        type: 'tertiary',
        rounded: false,
        label: 'Tertiary Button',
        icon: false,
        disabled: false,
    },
};

// export const Secondary = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
