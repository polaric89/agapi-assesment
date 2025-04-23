// QuoteDetail.test.jsx
import React from 'react';  // Add this import
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import axios from 'axios';
import QuoteDetail from '../components/QuoteDetail';
import { cleanup } from '@testing-library/react';

// Mock axios and icons
jest.mock('axios');
jest.mock('../icons', () => ({
  ArrowLeftIcon: () => <div data-testid="arrow-left" />,
  MailIcon: () => <div data-testid="mail" />,
  EditIcon: () => <div data-testid="edit" />,
  ActiveIcon: () => <div data-testid="active" />,
  ExpiredIcon: () => <div data-testid="expired" />,
  DownLoadIcon: () => <div data-testid="download" />,
  FollowUpIcon: () => <div data-testid="follow-up" />,
  ReminderIcon: () => <div data-testid="reminder" />,
}));

// Mock child component
jest.mock('../components/QuoteStatusBadge', () => ({ status }) => (
  <div data-testid="status-badge">{status}</div>
));

const mockQuote = {
  quoteId: '09870',
  clientName: 'John Doe',
  gender: 'Male',
  occupation: 'Engineer',
  mobile: '555-1234',
  homePhone: '555-5678',
  emailAdd: 'john@example.com',
  homeAdd: '123 Main St',
  policyType: 'Life Insurance',
  policyDescription: 'Premium coverage',
  coverageAmount: '$1,000,000',
  deductible: '$1,000',
  prevPolicy: [
    { label: 'Policy 2023', status: 'Active' },
    { label: 'Policy 2022', status: 'Expired' }
  ],
  premiumAmount: '$500',
  annualPremium: '$6,000',
  discounts: [{ label: 'Loyalty', amount: '$50' }],
  totalCharge: '$5,950',
  tax: '$595',
  finalPremium: '$6,545',
  effectiveDate: '2024-01-01',
  expirationDate: '2025-01-01',
  supportingDocs: ['doc1.pdf', 'doc2.pdf'],
  activityLog: [
    { date: '2024-03-01', message: 'Quote created' },
    { date: '2024-03-05', message: 'Client review' }
  ]
};

describe('QuoteDetail Component', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: [mockQuote] });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders loading state', async () => {
    render(<QuoteDetail quoteId="09870" onBack={jest.fn()} />);
    expect(screen.getByText('Loading quote details...')).toBeInTheDocument();
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
  });

  // Update header text assertions to be more specific
  test('displays quote details after loading', async () => {
    render(<QuoteDetail quoteId="09870" onBack={jest.fn()} />);
    
    await waitFor(() => {
      // Get all headers and filter by text content
      const headers = screen.getAllByText(/Quote Details - #09870/i);
      expect(headers.some(header => header.classList.contains('text-[20px]'))).toBe(true);
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
  });

  test('handles back button click', async () => {
    const mockOnBack = jest.fn();
    render(<QuoteDetail quoteId="09870" onBack={mockOnBack} />);
    
    await waitFor(() => {
      // Get first back button (mobile version)
      fireEvent.click(screen.getAllByTestId('arrow-left')[0]);
      expect(mockOnBack).toHaveBeenCalledTimes(1);
    });
  });
  test('shows error state', async () => {
    axios.get.mockRejectedValue(new Error('API Error'));
    render(<QuoteDetail quoteId="invalid" onBack={jest.fn()} />);
    
    await waitFor(() => {
      expect(screen.getByText('Quote not found.')).toBeInTheDocument();
    });
  });

  test('renders mobile header correctly', async () => {
    // Set mobile viewport
    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));
  
    render(<QuoteDetail quoteId="09870" onBack={jest.fn()} />);
    
    await waitFor(() => {
      // Mobile-specific elements
      expect(screen.getByRole('img', { name: 'Menu' })).toBeInTheDocument();
      
      // Get mobile header specifically
      const mobileHeader = screen.getByText('Quote Details - #09870', { 
        selector: 'h2.text-\\[16px\\]' // Escape special characters
      });
      expect(mobileHeader).toBeInTheDocument();
    });
  });

  test('renders all action buttons', async () => {
    render(<QuoteDetail quoteId="09870" onBack={jest.fn()} />);
    
    await waitFor(() => {
      // Filter only action buttons (exclude header buttons)
      const actionButtons = screen.getAllByRole('button', { 
        name: /update details|add follow up|send mail|send reminder|download quote/i 
      });
      expect(actionButtons.length).toBe(5);
    });
  });

  test('displays policy status badges', async () => {
    render(<QuoteDetail quoteId="09870" onBack={jest.fn()} />);
    
    await waitFor(() => {
      expect(screen.getByText('Active')).toBeInTheDocument();
      expect(screen.getByText('Expired')).toBeInTheDocument();
      expect(screen.getAllByTestId('status-badge')[0]).toHaveTextContent('Pending');
    });
  });
});

afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });