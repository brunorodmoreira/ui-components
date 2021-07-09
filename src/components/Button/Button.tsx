import React, { FC, HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  testId?: string
}

const Button: FC<ButtonProps> = ({ children, testId, ...props }) => {
  return (
    <button data-testid={testId} {...props}>
      {children}
    </button>
  )
}

export { Button, ButtonProps }
