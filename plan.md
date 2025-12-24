React Student Catalog SPA - Implementation Plan
Build a single-page application using React and Bootstrap that displays a student catalog with pagination and detail views.

User Review Required
IMPORTANT

Student Data File: The assignment mentions downloading a students.js file. I'll create a sample data structure based on the requirements (20 students with fields: id, image, fullName, group, year, gpa). If you have the actual file, please provide it.

IMPORTANT

Routing Approach: I'll use react-router-dom for navigation between catalog and detail pages. This provides clean URLs like /students/:id and better user experience.

Proposed Changes
Project Initialization
[NEW] Vite React Project
Initialize using npm create vite@latest ./ -- --template react
Configure for modern React development with fast HMR
Data Layer
[NEW] 
students.js
Export array of 20 student objects
Each student contains: id, image, fullName, group, year, gpa
Sample data with realistic values
Core Components
[NEW] 
StudentCard.jsx
Display individual student in Bootstrap card format
Show: image, fullName, group, year, gpa
Clickable card that navigates to detail page
Responsive design using Bootstrap grid
[NEW] 
StudentList.jsx
Display catalog of students in grid layout
Pagination Logic:
Initially show first 10 students
"See More" button reveals next 10 students (total 20)
Button disappears after showing all students
Bootstrap container/row/col grid system
Responsive layout (3 columns on desktop, 2 on tablet, 1 on mobile)
[NEW] 
StudentDetail.jsx
Display all student information in detail
Large image with img-fluid class
All fields clearly presented in Bootstrap card
"Back to List" button for navigation
Handle invalid student IDs gracefully
Application Structure
[NEW] 
App.jsx
Set up React Router with routes:
/ - StudentList (catalog page)
/students/:id - StudentDetail page
Navigation wrapper with Bootstrap navbar
Clean, responsive layout
[MODIFY] 
index.html
Add Bootstrap 5 CDN links
Set proper meta tags and title
[NEW] 
main.jsx
React 18 entry point
Wrap App with BrowserRouter
Styling
[NEW] 
index.css
Custom CSS for enhanced aesthetics
Card hover effects
Smooth transitions
Responsive spacing
Modern color scheme
Configuration & Documentation
[NEW] 
package.json
Dependencies: react, react-dom, react-router-dom
Scripts: dev, build, preview
Vite configuration
[NEW] 
README.md
Project description
Installation instructions
Pagination Implementation: Explain useState hook managing visible count
Navigation Implementation: Explain react-router-dom usage
Deployment instructions for Vercel
[NEW] 
vercel.json
Configure SPA routing for Vercel deployment
Ensure all routes redirect to index.html
Verification Plan
Automated Tests
# Install dependencies
npm install
# Run development server
npm run dev
# Build production bundle
npm run build
Manual Verification
Catalog Page:

Verify only 10 students show initially
Click "See More" → verify 10 more students appear
Verify button disappears after showing all 20
Test responsive grid on different screen sizes
Navigation:

Click student card → verify navigation to detail page
Verify URL changes to /students/:id
Verify all student data displays correctly
Click "Back to List" → verify return to catalog
Bootstrap Integration:

Verify cards use Bootstrap classes
Verify responsive grid behavior
Verify button styling
Deployment:

Deploy to Vercel using vercel --prod
Test deployed site functionality
Verify routing works on production