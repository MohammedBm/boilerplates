import React from 'react';
import { shallow } from 'enzyme'

import notFoundPage from '../../components/NotFoundPage'

test('should render NotFoundPage ', () => {
  const wrapper = shallow(<notFoundPage />)

  expect(wrapper).toMatchSnapshot()
})
