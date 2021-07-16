import React, { CSSProperties } from 'react'
import { Meta, Story } from '@storybook/react'
import { Button, ButtonProps } from './Button'

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
        defaultValue: 'Button',
      },
    },
    onClick: {
      action: 'Clicked',
      table: {
        disabled: true,
      },
    },
    style: {
      control: { type: 'object' },
      defaultValue: {
        backgroundColor: '#ff4785',
        color: '#fff',
        borderRadius: '1rem',
        height: '3rem',
        width: '6rem',
        border: 'none',
      } as CSSProperties,
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<ButtonProps> = ({ style, ...args }) => (
  <Button style={style} {...args} />
)

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {
  children: 'Button',
}
