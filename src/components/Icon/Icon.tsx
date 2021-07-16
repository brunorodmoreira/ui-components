import React, { forwardRef, HTMLAttributes, ReactNode } from 'react'

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  icon: ReactNode
  testId?: string
}

const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ icon, testId, ...props }, ref) => {
    return (
      <span ref={ref} data-testid={testId} {...props}>
        {icon}
      </span>
    )
  }
)

Icon.displayName = 'Icon'

export { Icon, IconProps }
