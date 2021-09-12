/* eslint-disable no-undef */
import React from 'react';
import {
  render, fireEvent, screen, queryByAttribute,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Range from '../components/Range';

const getById = queryByAttribute.bind(null, 'id');
test('Component fails if not have min and max settled', () => {
  render(<Range minProp={false} maxProp={false} />);
  expect(screen.getByTestId('error')).toHaveTextContent(/Cannot use Range component without min and max values/i);
});
test('Component render slider if got min and max props settled', () => {
  render(<Range minProp={10} maxProp={100} />);
  expect(screen.getByTestId('slider')).toBeVisible();
});
test('Components allows to change min and max values', () => {
  const dom = render(<Range minProp={10} maxProp={100} />);
  const minInput = getById(dom.container, 'min-input');
  fireEvent.change(minInput, { target: { value: 50 } });
  expect(screen.getByTestId('min-value')).toHaveTextContent(/50 €/i);
  const maxInput = getById(dom.container, 'max-input');
  fireEvent.change(maxInput, { target: { value: 500 } });
  expect(screen.getByTestId('max-value')).toHaveTextContent(/500 €/i);
});
test('Component not allows to change min and max when we work with fixed ranges', () => {
  const dom = render(<Range fixedRangeProp={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />);
  const minInput = getById(dom.container, 'min-input');
  fireEvent.change(minInput, { target: { value: 50 } });
  expect(screen.getByTestId('min-value')).toHaveTextContent(/1 €/i);
  expect(minInput).toBeDisabled();
  const maxInput = getById(dom.container, 'max-input');
  expect(maxInput).toBeDisabled();
});
