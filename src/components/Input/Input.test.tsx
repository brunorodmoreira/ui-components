import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Input } from './Input'

describe('Input', () => {
  it('should have an input', () => {
    const { getByTestId } = render(<Input testId="input" />)

    expect(getByTestId('input')).toBeDefined()
  })

  it('should trigger proper `onChange` function', () => {
    const onChange = jest.fn()
    const { getByTestId } = render(<Input testId="input" onChange={onChange} />)

    const input = getByTestId('input')

    fireEvent.change(input, { target: { value: 'foo' } })

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: 'foo' }),
      })
    )
  })
})
