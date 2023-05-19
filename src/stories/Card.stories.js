import { Card } from './Card';

export default {
  title: 'Example/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    // type: { control: { type: 'select', options: ['Primary', 'Secondary', 'Tertiary'] } },
    // label: {control: {type: 'text'}}
  },
};

export const Vertical = {
  args: {
    orientation: 'vertical',
    subtitle: false,
    button: false,
    media: false,
    subcontent: false,
    invert: false
  },
};