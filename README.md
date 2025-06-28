# Ashish Muralidharan - Personal Portfolio Website

A modern, responsive personal portfolio website showcasing Ashish's experience as a Tech Lead & Senior Software Engineer specializing in Node.js and Next.js.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Fade-in animations, hover effects, and smooth scrolling
- **Skills Visualization**: Interactive chart showing years of experience with key technologies
- **Professional Sections**: Experience timeline, skills, projects, leadership, and achievements
- **Performance Optimized**: Fast loading with external CSS/JS files

## 📁 Project Structure

```
Personal website/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom styles with Tailwind CSS framework
- **JavaScript (ES6+)**: Interactive functionality
- **Chart.js**: Skills visualization
- **Tailwind CSS**: Utility-first CSS framework
- **Google Fonts**: Inter font family

## 🎨 Design Features

### Color Palette
- **Primary**: Blue (#3B82F6) for accents and links
- **Background**: Light stone (#FDFBF7) for clean, professional look
- **Text**: Dark stone (#1a202c) for excellent readability
- **Accent Colors**: Teal, Purple, Yellow for visual hierarchy

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700, 800
- **Responsive**: Scales appropriately across devices

### Animations
- **Fade-in Effects**: Elements animate in as user scrolls
- **Hover Effects**: Interactive feedback on buttons and cards
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Timeline Animations**: Experience timeline with hover effects

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🔧 Setup Instructions

1. **Clone or Download** the project files
2. **Open** `index.html` in a web browser
3. **No build process required** - the site runs directly in the browser

### Local Development

For local development, you can use any simple HTTP server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📄 Sections Overview

### 1. Hero Section
- Professional introduction
- Call-to-action buttons
- Social media links

### 2. Experience Timeline
- Chronological work history
- Key achievements and responsibilities
- Interactive timeline design

### 3. Engineering Approach
- Work breakdown (30/30/30/10 split)
- Leadership and technical focus areas

### 4. Technical Skills
- Interactive chart visualization
- Categorized skill tags
- Years of experience display

### 5. Leadership & Mentorship
- Formal leadership roles
- Mentorship experience

### 6. Key Achievements
- Quantified impact metrics
- Performance indicators

### 7. Certifications
- Professional certifications
- Continuous learning commitment

### 8. Publications
- Technical articles and blog posts
- Knowledge sharing contributions

### 9. Featured Projects
- Portfolio of technical projects
- Technology stack highlights

### 10. Contact Section
- Professional contact information
- Social media links

## 🎯 Key Features

### Interactive Skills Chart
- Horizontal bar chart using Chart.js
- Years of experience visualization
- Hover tooltips with detailed information

### Smooth Animations
- Intersection Observer API for scroll-triggered animations
- CSS transitions for hover effects
- Performance-optimized animations

### Mobile-First Design
- Responsive navigation with hamburger menu
- Touch-friendly interactions
- Optimized typography scaling

## 🔍 Performance Optimizations

- **External CSS/JS**: Separated concerns for better caching
- **Minimal Dependencies**: Only essential external libraries
- **Optimized Images**: No heavy image assets
- **Efficient Animations**: CSS transforms and opacity changes
- **Lazy Loading**: Intersection Observer for animations

## 🌟 Customization

### Adding New Sections
1. Add HTML structure to `index.html`
2. Add corresponding CSS styles to `styles.css`
3. Update navigation links if needed

### Modifying Colors
Update the CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #3B82F6;
    --background-color: #FDFBF7;
    --text-color: #1a202c;
}
```

### Updating Content
- **Personal Information**: Edit the hero section in `index.html`
- **Experience**: Update the timeline items
- **Skills**: Modify the chart data in `script.js`
- **Projects**: Add/remove project cards

## 📈 Analytics & Tracking

The JavaScript includes basic click tracking for:
- External link clicks
- Email clicks
- Navigation interactions

You can extend this with Google Analytics or other tracking services.

## 🚀 Deployment

The website can be deployed to any static hosting service:

- **GitHub Pages**: Free hosting for GitHub repositories
- **Netlify**: Drag-and-drop deployment
- **Vercel**: Optimized for static sites
- **AWS S3**: Scalable static hosting
- **Any web server**: Traditional hosting

## 📞 Contact

For questions or suggestions about this portfolio website:
- **Email**: muralidharanashish@gmail.com
- **LinkedIn**: [Ashish Muralidharan](https://www.linkedin.com/in/ashishmuralidharan)
- **GitHub**: [ashishmd](https://github.com/ashishmd)

---

**Built with ❤️ by Ashish Muralidharan** 