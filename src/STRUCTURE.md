# JobSeek Frontend - Organized File Structure

## 📁 Project Structure

```
src/
├── components/           # All React components
│   ├── ui/              # UI components (buttons, badges, icons)
│   ├── forms/           # Form-related components
│   ├── common/           # Reusable common components
│   ├── layout/          # Layout-related components
│   └── dashboard/        # Dashboard-specific components
├── pages/               # Page components
│   ├── Auth/           # Authentication pages
│   ├── dashboardpro/    # Dashboard pages
│   └── profile/        # Profile pages
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── constants/           # Constants and data
├── assets/             # Static assets (images, etc.)
├── App.jsx             # Main App component
├── main.jsx            # Application entry point
└── index.css           # Global styles
```

## 📂 Component Categories

### UI Components (`components/ui/`)
- `TagBadge.jsx` - Badge components for tags and status
- `icon.jsx` - Icon wrapper component
- `stepindecator.jsx` - Step indicator for forms

### Form Components (`components/forms/`)
- `fields.jsx` - Form field wrapper
- `input.jsx` - Input field component
- `selectfield.jsx` - Select dropdown component
- `textArea.jsx` - Textarea component

### Common Components (`components/common/`)
- `jobcard.jsx` - Job listing card
- `communityCard.jsx` - Community section card
- `ratings.jsx` - Ratings display component
- `slide.jsx` - Image slider component
- `emailverifymodel.jsx` - Email verification modal
- `verifysuccess.jsx` - Verification success modal
- `conversationList.jsx` - Conversation list component

### Layout Components (`components/layout/`)
- `header.jsx` - Application header
- `Footer.jsx` - Application footer
- `sidebar.jsx` - Navigation sidebar
- `dashboard.jsx` - Dashboard layout wrapper
- `authresult.jsx` - Authentication result page
- `profile-filling.jsx` - Profile filling layout
- `result.jsx` - Result page layout

### Dashboard Components (`components/dashboard/`)
- `messageTab.jsx` - Messages tab component
- `settingsTab.jsx` - Settings tab component

## 📄 Pages (`pages/`)
- `homepage.jsx` - Landing page
- `404.jsx` - Not found page
- `aboutus.jsx` - About us page
- `contactus.jsx` - Contact page
- `faq.jsx` - FAQ page
- `jobs.jsx` - Jobs listing page
- `Auth/` - Authentication related pages
- `dashboardpro/` - Dashboard pages for freelancer/client
- `profile/` - Profile management pages

## 🔧 Utilities (`utils/`)
- `formatDate()` - Date formatting utility
- `formatCurrency()` - Currency formatting
- `truncateText()` - Text truncation
- `generateId()` - Unique ID generation

## 📚 Hooks (`hooks/`)
- `stepcontext.jsx` - Multi-step form context

## 📋 Constants (`constants/`)
- `freelancerdata.js` - Freelancer-related data

## 🎨 Import Examples

### Importing Components
```javascript
// Import specific components
import { JobCard, TagBadge } from '../components';

// Import from specific category
import { Header, Footer } from '../components/layout';
import { Field, Input } from '../components/forms';

// Import all from a category
import * as UI from '../components/ui';
```

### Importing Utilities
```javascript
import { formatDate, formatCurrency } from '../utils';
```

### Importing Constants
```javascript
import { freelancerData } from '../constants';
```

## 🏗️ Benefits of This Structure

1. **Scalability**: Easy to add new components to appropriate categories
2. **Maintainability**: Clear separation of concerns
3. **Reusability**: Common components easily accessible
4. **Team Collaboration**: Developers can work on different sections independently
5. **Clean Imports**: Index files provide clean import paths
6. **Performance**: Tree-shaking friendly structure

## 📝 Naming Conventions

- **Components**: PascalCase (e.g., `JobCard.jsx`)
- **Folders**: camelCase (e.g., `components/`)
- **Files**: kebab-case for utilities, PascalCase for components
- **Constants**: camelCase (e.g., `freelancerData.js`)

## 🚀 Getting Started

1. All components are properly organized by functionality
2. Index files provide clean imports
3. Utilities and hooks are easily accessible
4. Constants are centralized for easy management

This structure follows React best practices and makes the codebase more maintainable and scalable.
