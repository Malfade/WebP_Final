# Student Catalog SPA

A modern, responsive single-page application built with React and Bootstrap that displays a catalog of students with detailed information pages.

## 🚀 Features

- **Modern Premium Design**: Gradient backgrounds, smooth animations, and glassmorphism effects
- **Responsive Grid Layout**: Adapts beautifully to all screen sizes
- **Pagination System**: Initially shows 10 students, expandable to 20 with "See More" button
- **Detail Pages**: Click any student card to view comprehensive information
- **Smooth Navigation**: React Router for seamless page transitions
- **Visual Icons**: Emoji icons for enhanced user experience

## 📋 Technical Stack

- **React 18**: Modern functional components with hooks
- **React Router DOM**: Client-side routing
- **Bootstrap 5**: Responsive grid and components (via CDN)
- **Vite**: Fast development and optimized builds
- **Google Fonts**: Inter font family for premium typography

## 🎨 Design Features

- **Animated Gradient Background**: Dynamic color-shifting background
- **Card Hover Effects**: 3D transforms and shadow animations
- **Staggered Animations**: Sequential fade-in effects for cards
- **Glassmorphism Navbar**: Semi-transparent with backdrop blur
- **Custom Gradients**: Purple-blue gradient theme throughout
- **Smooth Transitions**: All interactions have polished animations

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔧 Project Structure

```
src/
├── data/
│   └── students.js          # Student data array (20 students)
├── components/
│   ├── StudentCard.jsx      # Individual student card component
│   ├── StudentList.jsx      # Catalog page with pagination
│   └── StudentDetail.jsx    # Student detail page
├── App.jsx                  # Main app with routing
├── main.jsx                 # React entry point
└── index.css                # Custom styles and animations
```

## 💡 Implementation Details

### Pagination Implementation

The pagination feature is implemented using React's `useState` hook in the `StudentList` component:

- **Initial State**: `visibleCount` starts at 10
- **See More Button**: Clicking updates `visibleCount` to 20
- **Button Visibility**: Button disappears when all students are shown
- **Array Slicing**: `students.slice(0, visibleCount)` controls visible students

```jsx
const [visibleCount, setVisibleCount] = useState(10);
const handleSeeMore = () => setVisibleCount(20);
const visibleStudents = students.slice(0, visibleCount);
const hasMore = visibleCount < students.length;
```

### Navigation Implementation

Navigation uses **React Router DOM** with the following setup:

- **BrowserRouter**: Wraps the entire app in `main.jsx`
- **Routes**: Defined in `App.jsx`
  - `/` → StudentList (catalog page)
  - `/students/:id` → StudentDetail (detail page)
- **Link Component**: Used in StudentCard for clickable cards
- **useNavigate Hook**: Used in StudentDetail for "Back to List" button
- **useParams Hook**: Extracts student ID from URL

```jsx
// Routing setup
<Routes>
  <Route path="/" element={<StudentList />} />
  <Route path="/students/:id" element={<StudentDetail />} />
</Routes>

// Navigation
<Link to={`/students/${student.id}`}>...</Link>
navigate('/');
```

## 🎯 Key Features Explained

### Student Cards
- Responsive 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Hover effects: lift animation + shadow enhancement
- Image zoom on hover
- Clickable entire card area

### Detail Page
- Large student image
- All information fields with emoji icons
- Gradient badge for GPA display
- Smooth back navigation
- Error handling for invalid student IDs

### Animations
- **fadeInUp**: Cards appear from bottom with fade
- **fadeInDown**: Header appears from top
- **fadeInScale**: Detail page scales in
- **gradientShift**: Background color animation
- **Staggered delays**: Each card animates sequentially

## 🌐 Deployment to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Option 2: GitHub Integration

1. Push code to GitHub repository
2. Import project in Vercel dashboard
3. Vercel auto-detects Vite configuration
4. Deploy automatically

### Vercel Configuration

The project includes `vercel.json` for SPA routing:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This ensures all routes redirect to `index.html` for client-side routing.

## 📱 Responsive Design

- **Desktop (lg)**: 3 cards per row
- **Tablet (md)**: 2 cards per row
- **Mobile (sm)**: 1 card per row
- All components adapt gracefully to screen size

## 🎨 Color Scheme

- **Primary Gradient**: Purple to violet (`#667eea` → `#764ba2`)
- **Success Gradient**: Blue to cyan (`#4facfe` → `#00f2fe`)
- **Background**: Light gray gradient
- **Text**: Dark gray for readability
- **Accents**: Gradient text for headings

## 📄 License

This project was created as a college assignment for Web Programming course.

## 👨‍💻 Author

Created with ❤️ using React, Bootstrap, and modern web technologies.

---

**Live Demo**: [Deploy to Vercel to get your live URL]

**GitHub Repository**: [Your repository URL]
# WebP_Final
