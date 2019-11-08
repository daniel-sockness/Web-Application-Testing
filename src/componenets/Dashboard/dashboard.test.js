import React from 'react';
import Dashboard from './dashboard';
import * as rtl from '@testing-library/react'

describe('<Dashboard />', () => {
    it('renders without crashing', () => {
        rtl.render(<Dashboard />);
    })

    it('Displays strikes, balls', () => {
        const display = rtl.render(<Dashboard />);
        display.getByText('Add Strike')
        display.getByText('Add Foul')
        display.getByText('Add Ball')
        display.getByText('Add Hit')
    })

})