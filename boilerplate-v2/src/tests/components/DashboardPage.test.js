import React from 'react';
import { shallow } from 'enzyme'

import expenses from '../fixtures/expenses'
import DashboardPage from '../../components/DashboardPage'

test('should render ExpenseList with expenses', () => {
  const wrapper = shallow( < DashboardPage / > )

  expect(wrapper).toMatchSnapshot()
})
