import { render, screen } from '@testing-library/react';
import Overview from './page';

describe('rendering OverView component',()=>{
    it('rendring child component',()=>{
        render(<Overview/>);

        expect(screen.getByText('Total Sales:')).toBeInTheDocument();
        expect(screen.getByText('Total Profit:')).toBeInTheDocument();
        expect(screen.getByText('Total Order:')).toBeInTheDocument();
        expect(screen.getByText('Margin Profit:')).toBeInTheDocument();
        expect(screen.getByText('Top 3 Sales by Region')).toBeInTheDocument();
        expect(screen.getByText('Top 5 Profit by Region')).toBeInTheDocument();
        expect(screen.getByText('Top 5 Sales')).toBeInTheDocument();
    })

})