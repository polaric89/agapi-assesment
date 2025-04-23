# Assesment Quotes Dashboard

A comprehensive dashboard for managing insurance quotes, customers, and policy documents with responsive design and mock API integration.

## Features

- **Multi-page Dashboard**:
  - Quotes management
  - Customer analytics
  - Policy documents
  - Settings configuration
- **Responsive Design**:
  - Mobile-optimized layout
  - Tablet/desktop views
  - Adaptive navigation
- **Quote Management**:
  - Detailed quote view
  - Status tracking (Active/Expired)
  - Document download functionality
  - Activity timeline
- **Data Visualization**:
  - Monthly premium overview
  - Customer demographics
  - Policy type distribution
- **Mock API Integration**:
  - Local JSON data files
  - Simulated network delays
  - Error handling

## Technologies

- **Frontend**: React 18
- **Styling**: Tailwind CSS 3
- **State Management**: React Context API
- **Testing**: Jest 29 + React Testing Library
- **Build**: Vite
- **Icons**: Custom SVG icons

## Getting Started

### Prerequisites

- Node.js v16+
- npm v8+
- Modern web browser

### Installation

1. Clone the repository:
    git clone (git link here)
    cd insurance-quotes-dashboard
2. Install dependencies:
    npm install
3. Start development server:
    npm start    
4. Access the application at:
    http://localhost:3000

## Key Dependencies

| Package                      | Version   | Purpose                          |
|------------------------------|-----------|----------------------------------|
| `react`                      | ^18.2.0   | Core framework                   |
| `react-dom`                  | ^18.2.0   | DOM rendering                    |
| `axios`                      | ^1.5.0    | HTTP client                      |
| `@testing-library/jest-dom`  | ^6.1.4    | DOM testing helpers              |
| `jest`                       | ^29.7.0   | Testing framework                |
| `tailwindcss`                | ^3.3.3    | Utility-first CSS framework      |
| `postcss`                    | ^8.4.31   | CSS processing                   |


## Project Structure

admin-dashboard/
├── public/
│   ├── api/                  # Mock API data
│   │   ├── calendarEvents.json
│   │   ├── monthlyOverview.json
│   │   ├── quotes.json
│   │   └── quotesDetail.json
│   └── downloads/            # Sample documents
│       ├── Auto Insurance Terms.pdf
│       └── Customer ID Proof.pdf
│
├── src/
│   ├── components/
│   │   ├── Header/           # Navigation components
│   │   ├── QuoteDetail/      # Quote management
│   │   ├── QuotesTable/      # Data table components
│   │   └── icons/            # SVG icon system
│   ├── context/              # React context providers
│   ├── hooks/                # Custom React hooks
│   ├── layouts/              # Page layouts
│   ├── pages/                # Application views
│   ├── utils/                # Helper functions
│   ├── App.jsx               # Root component
│   └── main.jsx              # Entry point
│
├── tests/
│   └── components/           # Unit tests
│       └── QuoteDetail.test.jsx
│
├── .gitignore
├── tailwind.config.js        # Tailwind configuration
├── jest.config.js            # Test configuration
└── package.json

## Testing

npx jest src/__tests__/QuoteDetail.test.jsx --watch

## Key test cases

Quote detail rendering
Back button functionality
Error state handling
Mobile/desktop layout variations

## Development Practices

1.Mock Data:
    All API calls simulate 300ms delay
    JSON files in /public/api
    Error handling for failed requests
2.Responsive Breakpoints:
    /* tailwind.config.js */
    screens: {
    'sm': '640px',   /* Mobile */
    'md': '768px',   /* Tablet */
    'lg': '1024px',  /* Desktop */
    }
3.Component Structure:
    Atomic design pattern
    Container/presentational components
    Reusable UI components in /components
4.Styling:
    Tailwind utility classes
    Custom color palette:
        Primary: #032A44
        Secondary: #596774
        Accent: #E5E7EB

 ## Deployment

    Create production build:
        npm run build
    Deploy to static hosting:   
        npm run preview

 ## Assumptions and Limitations

Current Limitations:
    Read-only form fields
    Mock document downloads
    Local storage for UI state
    Placeholder images

Browser Support:

    Chrome (latest)
    Firefox (latest)
    Safari (latest 2 versions)
    No IE11 support       

## License
MIT License - See LICENSE for details

## Support
Contact: mark.anthony.rivas89@gmail.com
Issue Tracker: GitHub Issues