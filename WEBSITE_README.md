# KRA iTax Redesign Portfolio Website

A modern, responsive portfolio website showcasing the HCI project for redesigning the KRA iTax system.

## 📁 Files Structure

```
HCI/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS styling with responsive design
├── script.js           # JavaScript for interactivity
└── WEBSITE_README.md   # This file
```

## 🚀 Getting Started

### Opening the Website

1. **Local Viewing**: Simply double-click `index.html` to open in your default browser
2. **Or**: Right-click `index.html` → Open with → Choose your browser

### Recommended Browsers
- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🎨 Features Implemented

### ✅ Complete Sections
- **Hero Section** with animated stats and project highlights
- **Project Overview** with 4 key cards explaining the project
- **Team Section** displaying all 6 team members with roles
- **Process Timeline** showing Research → Design → Solution phases
- **Solutions Grid** highlighting 6 major improvements:
  - Mobile Usability
  - Simplified Interface
  - Improved Accessibility
  - Streamlined Navigation
  - Intelligent Form System
  - AI Chatbot Assistant
- **Prototype Section** with Figma embed placeholder
- **Design System** showcase (colors, typography, spacing, components)
- **Conclusion** with impact summary and key takeaways
- **Footer** with team info and resource links

### ✅ Interactive Features
- **Smooth scrolling** navigation
- **Mobile-responsive** design (works on all screen sizes)
- **Animated elements** on scroll
- **Active navigation** highlighting
- **Scroll-to-top** button
- **Mobile menu** with hamburger toggle
- **Hover effects** on all interactive elements
- **Keyboard navigation** support

### ✅ Responsive Breakpoints
- **Mobile**: 320px - 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1024px
- **Large Desktop**: 1025px+

### ✅ Accessibility Features
- WCAG 2.1 compliant color contrasts
- Keyboard navigation support
- Focus indicators for accessibility
- ARIA labels on interactive elements
- Semantic HTML5 structure

## 🎨 Design System

### Colors
```css
Primary Blue:   #003C82  (KRA brand color)
Action Green:   #00A651  (Success/CTA)
Alert Red:      #D32F2F  (Errors/Warnings)
Background:     #F5F5F5  (Light gray)
```

### Typography
- **Font**: Inter (Google Fonts)
- **Heading 1**: 48px, Bold
- **Heading 2**: 36px, Bold
- **Body Text**: 16px, Regular

### Spacing
- Uses 8-point grid system
- Consistent padding and margins
- Responsive spacing adjusts on mobile

## 📝 How to Customize

### 1. Update Team Member Information
Edit in `index.html` around line 120-180:
```html
<div class="team-card">
    <div class="team-avatar">JK</div>
    <h3 class="team-name">Your Name</h3>
    <p class="team-id">Your ID</p>
    <p class="team-role">Your Role</p>
    <p class="team-description">Your description...</p>
</div>
```

### 2. Add Figma Prototype Link
Edit in `index.html` around line 490:
```html
<div class="figma-links">
    <a href="YOUR_FIGMA_LINK" class="btn btn-primary" target="_blank">View in Figma</a>
</div>
```

### 3. Update Social Media Links
Edit in `index.html` around line 660 (footer section):
```html
<a href="YOUR_GITHUB_LINK" class="social-link">...</a>
<a href="YOUR_LINKEDIN_LINK" class="social-link">...</a>
```

### 4. Change Colors
Edit in `styles.css` at the top (CSS variables):
```css
:root {
    --primary-blue: #003C82;
    --action-green: #00A651;
    /* Add more custom colors */
}
```

### 5. Add Images
To add project screenshots or wireframes:
```html
<img src="path/to/your/image.png" alt="Description" style="width: 100%; border-radius: 8px;">
```

## 🔧 Advanced Features (Optional)

### Enable Dark Mode Toggle
Uncomment in `script.js` around line 350:
```javascript
initDarkMode();
```

### Enable Progress Bar
Uncomment in `script.js` around line 320:
```javascript
createProgressBar();
```

### Add Parallax Effect
The hero section already has parallax scrolling enabled by default.

## 📱 Testing Responsive Design

### Browser DevTools
1. Press `F12` or `Right-click → Inspect`
2. Click the device toolbar icon (or press `Ctrl+Shift+M`)
3. Test different screen sizes:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1920px)

### Mobile Testing
- Use your phone's browser to open the website
- Test navigation, scrolling, and interactions

## 🌐 Publishing Online

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload `index.html`, `styles.css`, `script.js`
3. Go to Settings → Pages
4. Select branch and save
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Option 2: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Get instant live URL

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Import your project
3. Deploy with one click

## 📋 Checklist Before Submission

- [ ] All team member names and IDs are correct
- [ ] Figma prototype link is added and working
- [ ] All sections display correctly on mobile
- [ ] Navigation links work smoothly
- [ ] Footer links are updated
- [ ] Test on at least 2 different browsers
- [ ] Check for any console errors (F12)
- [ ] Verify all animations work
- [ ] Test on actual mobile device

## 🐛 Troubleshooting

### Issue: JavaScript not working
**Solution**: Make sure all three files (HTML, CSS, JS) are in the same folder

### Issue: Styles not loading
**Solution**: Check that `styles.css` is in the same directory as `index.html`

### Issue: Mobile menu not opening
**Solution**: Verify `script.js` is properly linked and loaded

### Issue: Smooth scrolling not working
**Solution**: This is normal in some older browsers. Main functionality will still work.

## 💡 Tips for Presentation

1. **Full Screen Mode**: Press `F11` for immersive presentation
2. **Zoom**: Use `Ctrl +/-` to adjust text size
3. **Mobile Demo**: Show mobile version using browser DevTools
4. **Live Editing**: Demonstrate responsive design by resizing browser

## 📞 Support

For questions about the website:
- **Technical Issues**: Check browser console (F12) for errors
- **Design Changes**: Refer to the CSS file comments
- **New Features**: Review `script.js` for available functions

## 📄 Credits

**Course**: Human-Computer Interaction (HCI)
**Project**: KRA iTax System Redesign
**Date**: January 2026

**Team Members**:
- Jason Kabugi Kiragu - SCT221-0581/2022 (Project Lead)
- Jeff Mark Owuor - SCT221-0440/2022 (Visual Design)
- Sylvia Munjiru - SCT221-0263/2021 (Interaction Design)
- Jackline Muhoro - SCT221-0258/2022 (Accessibility)
- Gideon Kipamet Kaiyian - SCT221-0255/2023 (Mobile UX)
- Michael Awuondo - SCT221-0501/2022 (Documentation)

---

**Built with**: HTML5, CSS3, JavaScript
**Font**: Inter (Google Fonts)
**Icons**: SVG inline
**Responsive**: Mobile-first design approach

## 🎓 Learning Outcomes

This website demonstrates:
- ✅ Responsive web design principles
- ✅ Modern CSS (Grid, Flexbox, Custom Properties)
- ✅ JavaScript DOM manipulation
- ✅ Accessibility best practices
- ✅ Performance optimization
- ✅ User experience design
- ✅ Clean, maintainable code structure

---

**Last Updated**: January 2026
**Version**: 1.0.0
