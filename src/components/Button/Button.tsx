import React, { forwardRef, HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  testId?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, testId, ...props }, ref) => {
    return (
      <button ref={ref} data-testid={testId} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, ButtonProps }
