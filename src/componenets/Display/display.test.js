import React from 'react';
import Display from './display';
import * as rtl from '@testing-library/react'

describe('<Display />', () => {
    it('renders without crashing', () => {
        rtl.render(<Display />);
    })

    it('Displays strikes, balls', () => {
        const display = rtl.render(<Display />);
        display.getByText('Strike')
    })

})