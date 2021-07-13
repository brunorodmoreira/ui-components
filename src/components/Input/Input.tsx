import React, { forwardRef, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  testId?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ testId, ...props }, ref) => {
    return <input ref={ref} data-testid={testId} {...props} />
  }
)

Input.displayName = 'Input'

export { Input, InputProps }
