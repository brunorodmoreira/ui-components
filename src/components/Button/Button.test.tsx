import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Button } from '.'

describe('Button', () => {
  it('should have proper text', () => {
    const { getByTestId } = render(<Button testId="button">My test</Button>)

    expect(getByTestId('button')).toHaveTextContent('My test')
  })
})
