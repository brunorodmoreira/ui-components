import React from 'react'
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
  },
  parameters: {
    controls: { expanded: false },
  },
}

export default meta

const Template: Story<InputProps> = (args) => <Input {...args} />

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {}
