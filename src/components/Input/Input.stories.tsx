import React, { CSSProperties } from 'react'
import { Meta, Story } from '@storybook/react'
import { Input, InputProps } from './Input'

const meta: Meta = {
  title: 'Input',
  component: Input,
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
        defaultValue: 'Input',
      },
    },
    onChange: {
      action: 'Changed',
      table: {
        disabled: true,
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['text', 'password', 'number'],
      },
    },
    style: {
      control: { type: 'object' },
      defaultValue: {
        backgroundColor: '#e8e8e8',
        borderRadius: '1rem',
        height: '2rem',
        width: '10rem',
        textAlign: 'center',
        border: 'thin solid #000',
      } as CSSProperties,
    },
  },
  parameters: {
    controls: { expanded: false },
  },
}

export default meta

const Template: Story<InputProps> = ({ style, ...args }) => (
  <Input style={style} {...args} />
)

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {
  placeholder: 'Input',
}
