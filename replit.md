# Overview

This is a full-stack TypeScript web application for "Kivu Choice," a Rwandan tilapia fish farm company. The application serves as a corporate website showcasing the company's products, team, and operations. Built with a modern React frontend and Express.js backend, it provides information about their aquaculture business, product catalog, team members, company statistics, and a newsletter subscription system.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with pages for Home, About, Team, Products, and Contact
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent design
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management and API data fetching
- **Forms**: React Hook Form with Zod validation for form handling

## Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **API Design**: RESTful API with endpoints for products, team members, stats, and newsletter subscription
- **Data Storage**: In-memory storage implementation with interfaces for future database integration
- **Development**: Hot module replacement via Vite middleware in development mode
- **Build Process**: ESBuild for server bundling and production optimization

## Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL with schema definitions
- **Database**: PostgreSQL setup with Neon serverless database connection
- **Schema**: Structured tables for products, team members, stats, and newsletter subscriptions with UUID primary keys
- **Validation**: Zod schemas generated from Drizzle tables for type-safe data validation

## External Dependencies
- **Database**: Neon Database (PostgreSQL serverless) for production data storage
- **Deployment**: Replit-optimized with specialized plugins and error handling
- **Image Hosting**: Unsplash for product and hero images
- **Fonts**: Google Fonts (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Icons**: Lucide React for consistent iconography throughout the application