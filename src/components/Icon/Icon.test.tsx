import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Icon } from './Icon'

describe('Icon', () => {
  it('should render proper icon element', () => {
    const { getByTestId } = render(
      <Icon testId="icon" icon={<div>Icon</div>} />
    )

    expect(getByTestId('icon')).toHaveTextContent('Icon')
  })
})
