# LegalBolt AI - Project Structure

## Overview
This is a production-ready legal services platform built with React, TypeScript, Tailwind CSS, and React Router. The application is fully responsive and optimized for all devices.

## Directory Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.tsx      # Navigation header with mobile menu
│   ├── Hero.tsx        # Homepage hero section with search
│   ├── Services.tsx    # Service cards grid
│   ├── TrustSection.tsx # Statistics and trust indicators
│   ├── HowItWorks.tsx  # Process explanation section
│   ├── RequestForm.tsx # Service request form with validation
│   ├── Articles.tsx    # Blog articles grid
│   ├── Testimonials.tsx # Customer testimonials
│   ├── Footer.tsx      # Footer with links and contact
│   ├── ServicePage.tsx # Individual service detail page
│   ├── ErrorBoundary.tsx # Error boundary for error handling
│   └── index.ts        # Component exports
│
├── data/               # Data and content
│   └── servicesData.tsx # Service information and articles
│
├── types/              # TypeScript type definitions
│   └── index.ts        # Shared types and interfaces
│
├── App.tsx            # Main app component with routing
├── main.tsx           # App entry point
└── index.css          # Global styles and Tailwind config
```

## Key Features

### 1. Component Architecture
- **Modular Design**: Each component has a single responsibility
- **Type Safety**: Full TypeScript support with proper typing
- **Reusability**: Components are self-contained and reusable

### 2. Responsive Design
- **Mobile-First**: Optimized for all screen sizes (320px - 2560px+)
- **Breakpoints**:
  - Mobile: < 640px (sm)
  - Tablet: 640px - 1024px (md, lg)
  - Desktop: 1024px+ (xl, 2xl)
- **Touch-Friendly**: Large tap targets and proper spacing on mobile

### 3. User Experience
- **Request Form**: Full validation with real-time error feedback
- **Loading States**: Visual feedback during form submission
- **Error Handling**: Error boundary catches and displays errors gracefully
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

### 4. Production Features
- **Error Boundary**: Catches runtime errors and displays user-friendly messages
- **Form Validation**: Client-side validation with helpful error messages
- **Performance**: Code splitting with React lazy loading ready
- **SEO Ready**: Semantic HTML structure and meta tags

### 5. Services Offered
1. GST Registration
2. Trademark Registration
3. Company Registration
4. FSSAI License
5. Import Export Code
6. ISO Certification
7. Copyright Registration
8. Income Tax Return

## Request Form

The request form (`RequestForm.tsx`) includes:
- Full name validation
- Email validation (regex pattern)
- Phone number validation (10+ digits)
- Service selection dropdown
- Request type selection
- Message field (minimum 20 characters)
- Real-time validation feedback
- Loading states during submission
- Success/error notifications

### Form Fields:
- **Name**: Required, text input
- **Email**: Required, must be valid email format
- **Phone**: Required, must be valid phone number
- **Service Type**: Required, dropdown selection
- **Request Type**: Required, dropdown selection (New Registration, Renewal, Consultation, etc.)
- **Message**: Required, textarea (min 20 characters)

## Adding Database Persistence

To add Supabase database persistence for the request form:

1. Ask to set up the Supabase database tables
2. The system will create a `requests` table with proper schema
3. The RequestForm component can be updated to save to Supabase

## Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Color Scheme**:
  - Primary: Cyan (cyan-400, cyan-600, cyan-700)
  - Background: Gray (gray-800, gray-900)
  - Text: White, Gray shades
- **Typography**: System fonts with proper line heights
- **Spacing**: Consistent 8px spacing system

## Responsive Patterns

### Mobile (< 640px)
- Single column layouts
- Stacked navigation
- Hamburger menu
- Full-width buttons
- Larger font sizes for readability

### Tablet (640px - 1024px)
- 2-column grids
- Side-by-side navigation
- Balanced layouts
- Optimized spacing

### Desktop (> 1024px)
- 3-4 column grids
- Full navigation visible
- Maximum content width (1280px)
- Hover states and animations

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run typecheck

# Lint code
npm run lint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

1. Add Supabase database integration
2. Add user authentication
3. Add payment gateway integration
4. Add admin dashboard
5. Add email notifications
6. Add PDF generation for documents
7. Add real-time chat support
8. Add multi-language support
9. Add progress tracking for requests
10. Add analytics and reporting

## Notes

- All images use Pexels stock photos with valid URLs
- Form submission is currently a demo (logs to console)
- Error boundary catches component errors in production
- All components are optimized for SEO and accessibility
