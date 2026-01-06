# Figma Quick Start Guide for KRA iTax Redesign

## Complete Figma Setup and Design Guide for Team

---

## Table of Contents

1. [Getting Started with Figma](#1-getting-started-with-figma)
2. [Creating the Design System](#2-creating-the-design-system)
3. [Building Wireframes](#3-building-wireframes)
4. [Creating High-Fidelity Designs](#4-creating-high-fidelity-designs)
5. [Interactive Prototyping](#5-interactive-prototyping)
6. [Collaboration Tips](#6-collaboration-tips)
7. [Exporting and Sharing](#7-exporting-and-sharing)

---

## 1. Getting Started with Figma

### 1.1 Account Setup

**Step 1**: Go to figma.com and click "Sign Up"
- Use your university email for educational benefits
- Choose "Student" account type
- Verify your email address

**Step 2**: Create Team Workspace
- Click "+ New team"
- Name it: "KRA iTax Redesign HCI Project"
- Invite all team members by email

**Step 3**: Download Desktop App (Recommended)
- Go to figma.com/downloads
- Install Figma desktop app for better performance
- Sign in with your account

### 1.2 Figma Interface Overview

```
┌─────────────────────────────────────────────────────────────┐
│ File  Edit  View  ...        [Search]        [▶️ Present]  │ Top Bar
├──────┬──────────────────────────────────────────┬───────────┤
│      │                                          │           │
│ 📄   │                                          │ Design    │
│ Pages│         Canvas Area                      │ Panel     │
│      │                                          │           │
│ 🎨   │    [Frames appear here]                  │ Layers    │
│Assets│                                          │ Properties│
│      │                                          │ Prototype │
│ 📐   │                                          │           │
│Tools │                                          │           │
│      │                                          │           │
└──────┴──────────────────────────────────────────┴───────────┘
Left      Main Canvas (infinite scrolling)         Right
Panel                                               Panel
```

**Key Keyboard Shortcuts**:
- `F` - Frame tool (create artboards)
- `R` - Rectangle
- `T` - Text
- `V` - Move tool
- `Cmd/Ctrl + D` - Duplicate
- `Cmd/Ctrl + G` - Group
- `Shift + A` - Auto Layout
- `Cmd/Ctrl + /` - Quick search

---

## 2. Creating the Design System

### 2.1 Create Design System Page

**Step 1**: Create new page
- In left panel, click "+" next to Pages
- Name it: "Design System"

**Step 2**: Create Color Styles

1. Draw a rectangle (`R`)
2. Fill with KRA Blue (#003C82)
3. In right panel, click four dots next to Fill
4. Click "+" to create new style
5. Name it: "Primary/KRA Blue"

Repeat for all colors:
```
Primary Colors:
- Primary/KRA Blue: #003C82
- Primary/Action Green: #00A651
- Primary/Alert Red: #D32F2F

Neutral Colors:
- Neutral/Charcoal: #333333
- Neutral/Slate: #666666
- Neutral/Light Gray: #F5F5F5
- Neutral/White: #FFFFFF

Accent Colors:
- Accent/Info Blue: #1976D2
- Accent/Warning Amber: #F57C00
- Accent/Success Green: #388E3C
```

**Step 3**: Create Text Styles

1. Create text box (`T`)
2. Set font to "Inter" (or "Roboto" if Inter unavailable)
3. Set size to 32px, weight to Bold
4. Click four dots next to text properties
5. Create style: "Heading/H1"

Create all text styles:
```
Heading Styles:
- Heading/H1: Inter Bold 32px, line height 1.2
- Heading/H2: Inter Bold 24px, line height 1.2
- Heading/H3: Inter Semi-Bold 20px, line height 1.2

Body Styles:
- Body/Regular: Inter Regular 16px, line height 1.5
- Body/Small: Inter Regular 14px, line height 1.4
- Body/Caption: Inter Regular 12px, line height 1.4
```

### 2.2 Create Component Library

**Button Component**:

1. Draw rectangle: 140px × 44px
2. Set border-radius: 4px
3. Fill: Action Green (#00A651)
4. Add text: "Button Text" (Inter Regular 16px, white)
5. Select both rectangle and text
6. Create component: `Cmd/Ctrl + Alt/Option + K`
7. Name: "Button/Primary"

**Create Button Variants**:
1. Select button component
2. Right panel → Click "+" next to Variant
3. Create variants:
   - Default
   - Hover (slightly darker green)
   - Disabled (gray background)

**Form Input Component**:

1. Rectangle: 300px × 48px
2. Border: 1px solid #BDBDBD
3. Border-radius: 4px
4. Padding: 12px (use auto-layout)
5. Add placeholder text
6. Create component: "Input/Text Field"

**Card Component**:

1. Rectangle: 300px × auto height
2. Fill: White
3. Border: 1px solid #E0E0E0
4. Border-radius: 8px
5. Shadow: X:0, Y:2, Blur:4, Color:#000000 10% opacity
6. Apply auto-layout with 24px padding
7. Create component: "Card/Default"

---

## 3. Building Wireframes

### 3.1 Create Wireframe Page

1. Create new page: "Wireframes - Mobile"
2. Create another: "Wireframes - Desktop"

### 3.2 Mobile Frames (375px width)

**Step 1**: Create Frame
- Press `F` (frame tool)
- Click "iPhone 13/14" from right panel (375 × 812px)
- Name frame: "Mobile - Dashboard"

**Step 2**: Build Dashboard Wireframe

Using simple shapes (rectangles and text):

```
Structure:
1. Header (sticky)
   - Hamburger menu icon (left)
   - "iTax Kenya" text (center)
   - Notifications bell (right)
   - User icon (right)

2. Greeting
   - Text: "Hi Margaret!"

3. Alert Card
   - Rectangle with red/orange background
   - Text: "ACTION REQUIRED"
   - Text: "Tax Return Due in 12 days"
   - Button: "File Return Now"

4. Quick Actions Grid
   - 2×2 grid of cards
   - Each card: Icon + Label

5. Deadlines Section
   - Heading: "Upcoming Deadlines"
   - Card with date, description, amount

6. Bottom Navigation
   - 4 icons: Home, File, Pay, Profile
```

**Auto-Layout Tips**:
1. Select elements to group
2. Press `Shift + A`
3. Set spacing between items (e.g., 16px)
4. Set padding (e.g., 16px all sides)

### 3.3 Desktop Frames (1440px width)

**Step 1**: Create Frame
- Press `F`
- Click "Desktop" from right panel (1440 × 1024px)
- Name: "Desktop - Dashboard"

**Step 2**: Use 12-Column Grid
1. Select frame
2. Right panel → Layout Grid → "+"
3. Change to "Columns"
4. Set count: 12
5. Margin: 80px
6. Gutter: 24px

**Step 3**: Build Two-Column Layout
- Left sidebar: 3 columns width (navigation)
- Main content: 9 columns width (dashboard cards)

---

## 4. Creating High-Fidelity Designs

### 4.1 Apply Design System

**Step 1**: Create new page "Designs - Mobile"

**Step 2**: Duplicate wireframe frames
- Select all mobile wireframes
- `Cmd/Ctrl + D` to duplicate
- Drag to new page

**Step 3**: Apply Color Styles
1. Select element
2. In right panel, click fill color
3. Choose from your saved color styles

**Step 4**: Apply Text Styles
1. Select text
2. In right panel, click text style dropdown
3. Choose appropriate heading or body style

### 4.2 Add Visual Polish

**Icons**:
- Use Figma plugin: "Iconify"
- Install: Plugins → Browse plugins → Search "Iconify"
- Search for icons (e.g., "file", "payment", "user")
- Drag icons into design
- Set fill color to match design system

**Images**:
- Use plugin: "Unsplash"
- Insert placeholder images
- For user photos, use plugin: "Avatars"

**Shadows and Effects**:
```
Card Shadow:
- X: 0
- Y: 2
- Blur: 4
- Spread: 0
- Color: #000000 at 10% opacity

Hover State:
- Y: 4
- Blur: 8
```

### 4.3 Responsive Design

**Create Tablet Version** (768px):
1. Duplicate mobile frame
2. Resize to 768 × 1024px
3. Adjust layout (2-column grid for cards)

**Create Desktop Version** (1440px):
1. Duplicate mobile frame
2. Resize to 1440 × 1024px
3. Use multi-column layout

**Use Constraints**:
- Select element
- Right panel → Constraints
- Set: "Left and Right" for full width elements
- Set: "Center" for centered elements

---

## 5. Interactive Prototyping

### 5.1 Set Up Prototype

**Step 1**: Switch to Prototype Mode
- Click "Prototype" tab in right panel
- Or press `Shift + E`

### 5.2 Create Interactions

**Basic Click Interaction**:

1. Select button on first screen (e.g., "File Return Now")
2. Click blue "+" circle that appears
3. Drag connection to target frame (e.g., "Return Selection" screen)
4. In right panel, set:
   - Interaction: "On click"
   - Action: "Navigate to"
   - Destination: [Target frame]
   - Animation: "Smart animate" or "Dissolve"
   - Duration: 300ms
   - Easing: "Ease in and out"

**Back Button**:
1. Select back arrow
2. Create connection to previous screen
3. Set animation: "Move in" from left

**Form Field Focus**:
1. Create two variants of form screen
   - Variant 1: Default (no field focused)
   - Variant 2: Field 1 focused (blue border)
2. Set interaction:
   - On tap → Change to "Variant 2"

### 5.3 Add Advanced Interactions

**Scroll Behavior**:
1. Select frame
2. Right panel → Prototype → Overflow behavior
3. Choose: "Vertical scrolling"
4. Set: "Clip content"

**Fixed Header**:
1. Select header element
2. Right panel → Prototype → Scroll behavior
3. Choose: "Fixed position"

**Smart Animate**:
For smooth transitions between screens:
1. Duplicate frame
2. Make changes (e.g., expand card, change text)
3. Name both frames with same prefix: "Dashboard - Start" and "Dashboard - End"
4. Connect with "Smart animate"
5. Figma will automatically animate the differences

### 5.4 Create User Flow

Connect screens in this order:

```
1. Login Screen
   ↓ [Tap "Login"]
2. Dashboard
   ↓ [Tap "File Return"]
3. Return Selection
   ↓ [Select "Individual Income"]
4. Pre-Filing Checklist
   ↓ [Tap "I'm Ready"]
5. Step 1: Personal Info
   ↓ [Tap "Next"]
6. Step 2: Income
   ↓ [Tap "Next"]
7. Step 3: Deductions
   ↓ [Tap "Next"]
8. Step 4: Review
   ↓ [Tap "Submit"]
9. Success Confirmation
```

---

## 6. Collaboration Tips

### 6.1 Team Workflow

**Assign Sections to Team Members**:

**Jeff (Visual Design Lead)**:
- Design system creation
- Desktop high-fidelity designs
- Component library maintenance

**Sylvia (Interaction Designer)**:
- Prototype connections
- Animation timing
- User flow mapping

**Gideon (Mobile UX)**:
- Mobile wireframes and designs
- Responsive breakpoints
- Touch interaction states

**Jackline (Accessibility)**:
- Color contrast checking
- Text hierarchy review
- Focus state designs

### 6.2 Figma Collaboration Features

**Comments**:
- Press `C` to add comment
- Tag team members: @JeffOwuor
- Resolve comments when addressed

**Version History**:
- File → Show version history
- Name important versions (e.g., "v1 - Wireframes Complete")
- Restore previous versions if needed

**Live Collaboration**:
- See cursors of team members in real-time
- Follow mode: Click their avatar to follow their view

---

## 7. Exporting and Sharing

### 7.1 Share Prototype

**Step 1**: Click "Present" button (▶️) in top-right

**Step 2**: Share settings:
- Click "Share prototype"
- Set: "Anyone with the link can view"
- Copy link

**Step 3**: Test prototype:
- Open link in new browser tab
- Test all interactions
- Check on mobile device (open link on phone)

### 7.2 Export for Documentation

**Export Frames as Images**:
1. Select frame
2. Right panel → Export section → "+"
3. Choose format: PNG (for screenshots), SVG (for icons)
4. Set scale: 2x (for high-resolution)
5. Click "Export [Frame Name]"

**Export All Screens**:
1. Select all frames to export
2. Right panel → Export
3. Choose "Export selected"
4. Saves to Downloads folder

### 7.3 Create Presentation Assets

**Before/After Comparisons**:
1. Create new frame: 1920 × 1080px
2. Add "Before" screenshot (left)
3. Add "After" screenshot (right)
4. Add labels and arrows
5. Export as PNG

**User Flow Diagram**:
1. Arrange frames in flow order
2. Use arrow tool (Shift + L) to connect
3. Add labels to arrows ("Tap button", "Select option")
4. Export full flow as PNG

---

## 8. Figma Plugins to Install

Essential plugins for this project:

1. **Iconify** - Icon library
2. **Unsplash** - Stock photos
3. **Content Reel** - Generate realistic dummy data
4. **Stark** - Accessibility checker (contrast, color blindness simulation)
5. **Autoflow** - Create flow diagrams automatically
6. **Lorem Ipsum** - Generate placeholder text
7. **Remove BG** - Remove image backgrounds

**To Install**:
- Resources → Plugins → Browse plugins
- Search plugin name
- Click "Install"

---

## 9. Figma Best Practices

### Naming Conventions

**Frames**:
```
[Device] - [Screen Name] - [State]

Examples:
Mobile - Dashboard - Default
Mobile - Dashboard - Scrolled
Desktop - File Return - Step 1
```

**Components**:
```
[Category]/[Name]/[Variant]

Examples:
Button/Primary/Default
Button/Primary/Hover
Input/Text Field/Empty
Input/Text Field/Filled
Card/Dashboard/Action Required
```

**Layers**:
```
Clear, descriptive names:
✓ Header Navigation
✓ Alert Banner
✓ Submit Button

Avoid:
✗ Rectangle 123
✗ Frame 456
✗ Group 789
```

### Organization

**Page Structure**:
```
📄 Cover (Project intro, team members)
📄 Design System (Colors, typography, components)
📄 Wireframes - Mobile
📄 Wireframes - Desktop
📄 Designs - Mobile
📄 Designs - Tablet
📄 Designs - Desktop
📄 Prototype Flow (All screens connected)
📄 Archive (Old versions, experiments)
```

**Layer Organization**:
- Group related elements (`Cmd/Ctrl + G`)
- Use frames for sections
- Lock background elements (Cmd/Ctrl + Shift + L)
- Hide layers not in use (Cmd/Ctrl + Shift + H)

---

## 10. Common Issues and Solutions

### Issue: Text looks different when exporting
**Solution**: Embed fonts or use web-safe fonts

### Issue: Prototype link doesn't work on mobile
**Solution**:
- Check sharing settings (public link)
- Open in Figma mobile app for better experience
- Use Figma Mirror app for testing

### Issue: Components not updating across frames
**Solution**: Use instances, not copies. Check that component is published to library.

### Issue: Animations are jumpy
**Solution**:
- Ensure layer names match exactly between frames
- Use "Smart animate" for smooth transitions
- Reduce animation duration (try 200-300ms)

### Issue: Collaborators can't edit
**Solution**:
- Check file permissions: File → Share → Edit access
- Ensure they're added to team workspace

---

## 11. Quick Reference Cheat Sheet

### Essential Shortcuts

| Action | Mac | Windows |
|--------|-----|---------|
| Frame tool | F | F |
| Rectangle | R | R |
| Text | T | T |
| Move | V | V |
| Pen | P | P |
| Comment | C | C |
| Zoom to fit | Cmd+1 | Ctrl+1 |
| Zoom to 100% | Cmd+0 | Ctrl+0 |
| Auto-layout | Shift+A | Shift+A |
| Component | Cmd+Opt+K | Ctrl+Alt+K |
| Prototype mode | Shift+E | Shift+E |
| Present | Cmd+Opt+Enter | Ctrl+Alt+Enter |

### Measurement Units

- Use **pixels (px)** for all measurements
- Touch targets: Minimum **44 × 44px**
- Spacing: Multiples of **8px** (8, 16, 24, 32, 48)
- Border radius: **4px** (small), **8px** (medium), **16px** (large)
- Font sizes: **12px, 14px, 16px, 20px, 24px, 32px**

---

## 12. Team Task Checklist

### Week 5-6: Design System & Wireframes

**Jeff**:
- [ ] Set up Figma team workspace
- [ ] Create design system page
- [ ] Define all color styles
- [ ] Define all text styles
- [ ] Create component library (buttons, inputs, cards)

**Sylvia + Gideon**:
- [ ] Create mobile wireframes (8 key screens)
- [ ] Create desktop wireframes (6 key screens)
- [ ] Get feedback from team

### Week 6-7: High-Fidelity Designs

**All**:
- [ ] Convert wireframes to high-fidelity designs
- [ ] Apply design system consistently
- [ ] Add icons and images
- [ ] Create responsive versions

**Jackline**:
- [ ] Run accessibility checks (Stark plugin)
- [ ] Verify color contrast
- [ ] Check text hierarchy
- [ ] Test with screen reader simulation

### Week 7: Prototyping

**Sylvia**:
- [ ] Connect all screens with interactions
- [ ] Set up navigation flow
- [ ] Add animations (smart animate)
- [ ] Create scrolling behaviors

**Gideon**:
- [ ] Test prototype on mobile device
- [ ] Verify touch targets (minimum 44px)
- [ ] Check responsive behavior
- [ ] Test across different devices

### Week 8: Final Review

**All**:
- [ ] Complete prototype walkthrough
- [ ] Fix any broken interactions
- [ ] Export screenshots for portfolio
- [ ] Share prototype link
- [ ] Prepare for presentation demo

---

## 13. Resources

### Learning Resources

**Official Figma Tutorials**:
- Figma YouTube channel: youtube.com/figmateam
- Figma Learn: help.figma.com/hc/en-us/sections/4405269443991-Figma-for-Beginners
- Figma Community: figma.com/community

**HCI Design Resources**:
- Nielsen Norman Group: nngroup.com
- Material Design: material.io
- Apple Human Interface Guidelines: developer.apple.com/design

### Inspiration

**Design Systems**:
- IBM Carbon: carbondesignsystem.com
- Atlassian Design System: atlassian.design
- Shopify Polaris: polaris.shopify.com

**Mobile Tax Apps**:
- UK HMRC app
- Singapore myTax
- Australia myGov

---

## 14. Final Checklist Before Submission

- [ ] All screens designed and connected
- [ ] Prototype tested on mobile and desktop
- [ ] All interactions working correctly
- [ ] Accessibility checked (contrast, focus states)
- [ ] Components properly organized and named
- [ ] Sharing link is public (anyone can view)
- [ ] Screenshots exported for portfolio
- [ ] Team members can access and edit file
- [ ] Presentation mode tested (no broken links)
- [ ] Backup copy saved (File → Save as → Copy)

---

**Good luck with your Figma prototype!**

Remember: Figma has a learning curve, but it's intuitive once you get started. Don't hesitate to explore and experiment. The undo button (Cmd/Ctrl + Z) is your friend!

**Need help?**:
- Figma Community forum
- Team collaboration in shared file
- Quick Google search usually finds answers

---

**Document created for**: KRA iTax HCI Redesign Project
**Tool**: Figma (figma.com)
**Team**: Jason, Jeff, Sylvia, Jackline, Gideon, Michael
**Timeline**: Weeks 5-8 of project