import React, { CSSProperties } from 'react'
import { Meta, Story } from '@storybook/react'
import { Button, ButtonProps } from './Button'

import { styled } from '@storybook/theming'

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
    backgroundColor: {
      control: { type: 'color' },
    },
    color: {
      control: { type: 'color' },
    },
    height: {
      control: { type: 'range', min: 0, max: 10, step: 0.01 },
    },
    width: {
      control: { type: 'range', min: 0, max: 10, step: 0.01 },
    },
    borderRadius: {
      control: { type: 'range', min: 0, max: 1, step: 0.01 },
    },
  },
  parameters: {
    controls: { expanded: false },
  },
}

export default meta

const Template: Story<ButtonProps & CSSProperties> = ({
  backgroundColor,
  width,
  height,
  color,
  borderRadius,
  ...args
}) => {
  const StyledButton = styled(Button)`
    background-color: ${backgroundColor};
    width: ${width}em;
    height: ${height}em;
    border-radius: ${borderRadius}em;
    border: none;
    color: ${color};
  `
  return <StyledButton {...args} />
}

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {
  children: 'Button',
}
