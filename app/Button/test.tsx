import React from 'react'
import * as stories from './stories'

import { render, screen } from '@testing-library/react'

const { Default } = composeStories(stories)

describe('Button', () => {
  describe('Default', () => {
    test('should be accessible and match snapshot', async () => {
      const { container } = render(<Default />)

      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
