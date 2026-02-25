# Smart City Management System (FSAD-PS21)

A modern, responsive dashboard UI for managing smart city services built with Vite + React, React Router, and Tailwind CSS.

## Features

✨ **Modern Design**
- Clean, professional UI similar to Material Dashboard and AdminLTE
- Responsive design that works on all devices
- Smooth animations and transitions
- Custom Tailwind CSS styling with color themes

🔐 **Role-Based Authentication**
- Admin and User roles
- Protected routes based on user roles
- LocalStorage-based session management
- Demo credentials for testing

📊 **Admin Dashboard**
- Dashboard with key statistics
- Service management
- Infrastructure monitoring
- Report viewing
- Feedback management

👥 **User Features**
- Service browsing and filtering
- Issue reporting
- Feedback submission
- Service status tracking

## Tech Stack

- **Frontend Framework**: React 18.2
- **Build Tool**: Vite 5
- **React Router**: v6 (routing)
- **Styling**: Tailwind CSS 3.4
- **HTTP Client**: Axios
- **Icons**: Lucide React

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Top navigation bar
│   ├── Sidebar.jsx             # Sidebar with navigation
│   ├── ProtectedRoute.jsx       # Route protection component
│   ├── DashboardCard.jsx        # Reusable dashboard card
│   ├── ServiceCard.jsx          # Service card component
│   ├── IssueForm.jsx            # Issue reporting form
│   └── FeedbackForm.jsx         # Feedback submission form
├── layouts/
│   ├── PublicLayout.jsx         # Public pages layout
│   └── DashboardLayout.jsx      # Dashboard pages layout
├── pages/
│   ├── Home.jsx                 # Landing page
│   ├── Login.jsx                # Admin/User login
│   ├── Register.jsx             # User registration
│   ├── admin/
│   │   ├── AdminDashboard.jsx
│   │   ├── ManageServices.jsx
│   │   ├── Infrastructure.jsx
│   │   ├── Reports.jsx
│   │   └── Feedback.jsx
│   └── user/
│       ├── UserDashboard.jsx
│       ├── Services.jsx
│       ├── ReportIssue.jsx
│       └── Feedback.jsx
├── App.jsx                      # Main app component with routing
├── main.jsx                     # Entry point
└── index.css                    # Global styles

Configuration Files:
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── index.html                  # HTML template
└── package.json                # Dependencies and scripts
```

## Color Theme

- **Primary**: Blue (#2563eb)
- **Secondary**: Gray (#1f2937)
- **Accent**: Emerald (#10b981)
- **Background**: Light Gray (#f3f4f6)
- **Cards**: White with rounded-2xl corners and shadow-lg

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create Tailwind CSS configuration (if needed):
```bash
npx tailwindcss init -p
```

### Running the Project

**Development mode:**
```bash
npm run dev
```
This will start the Vite dev server at `http://localhost:5173`

**Production build:**
```bash
npm run build
```

**Preview production build:**
```bash
npm run preview
```

## Demo Credentials

**Admin Account:**
- Email: `admin@smartcity.com`
- Password: `admin123`

**User Account:**
- Email: `user@smartcity.com`
- Password: `user123`

## Pages

### Public Pages
- **Home** (`/`) - Landing page with features and services overview
- **Login** (`/login`) - Authentication page
- **Register** (`/register`) - New user registration

### Admin Routes
- **Dashboard** (`/admin/dashboard`) - Statistics and recent reports
- **Manage Services** (`/admin/services`) - CRUD operations for services
- **Infrastructure** (`/admin/infrastructure`) - Monitor infrastructure units
- **Reports** (`/admin/reports`) - View and download reports
- **Feedback** (`/admin/feedback`) - Review citizen feedback

### User Routes
- **Dashboard** (`/user/dashboard`) - Welcome page with quick access
- **Services** (`/user/services`) - Browse available city services
- **Report Issue** (`/user/report-issue`) - Submit issue reports
- **Feedback** (`/user/feedback`) - Send feedback to the city

## Key Components

### Navbar
- Logo and branding
- Responsive mobile menu
- Login/Register buttons
- Logout functionality

### Sidebar
- Role-based menu items
- Active page highlighting
- Collapsible on desktop
- Slide-out menu on mobile
- Logout button

### Dashboard Cards
- Configurable icons and colors
- Trend indicators
- Hover effects

### Forms
- Input validation
- Success/error messages
- Loading states
- Easy to customize

## Styling System

Uses Tailwind CSS with custom configuration:
- Responsive classes for mobile-first design
- Custom color palette
- Rounded corners (rounded-lg, rounded-2xl)
- Shadow effects (shadow-lg, shadow-xl)
- Gradient backgrounds
- Smooth transitions and animations

## Features to Add

- [ ] Backend API integration
- [ ] Real-time notifications
- [ ] File upload for issue photos
- [ ] Map integration
- [ ] User profile page
- [ ] Admin settings panel
- [ ] Analytics charts
- [ ] Dark mode theme
- [ ] Multi-language support
- [ ] Notification system

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

- Images are optimized with lazy loading
- Components are code-split by route
- CSS is purged in production (Tailwind)
- Vite provides fast HMR during development

## Contributing

1. Keep components modular and reusable
2. Follow the existing folder structure
3. Use Tailwind CSS for styling
4. Maintain responsive design
5. Add comments for complex logic

## License

This project is part of the FSAD-PS21 Smart City Management System.

## Support

For issues or questions, contact: support@smartcity.com
