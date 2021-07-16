import React, { CSSProperties, FC } from 'react'
import { Meta, Story } from '@storybook/react'
import { Icon, IconProps } from './Icon'

const meta: Meta = {
  title: 'Icon',
  component: Icon,
  argTypes: {
    onClick: {
      action: 'Clicked',
      table: { disabled: true },
    },
    style: {
      control: { type: 'object' },
      defaultValue: {
        color: 'blue',
        display: 'inline-block',
        lineHeight: 0,
      } as CSSProperties,
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const DemoIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
)

const Template: Story<IconProps> = ({ style, ...args }) => (
  <Icon style={style} icon={<DemoIcon />} {...args} />
)

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {}
