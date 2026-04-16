# Mindful Money

Mindful Money is a 5-page static website dedicated to the psychology of wealth and behavioral finance. Inspired by the principles found in "The Psychology of Money," the project emphasizes that financial success is more about behavior than technical knowledge.

## Project Structure

```
Personal Finance/
├── index.html          # Landing page - Psychology Pillars
├── philosophy.html     # Case studies in behavioral finance
├── lab.html           # Interactive Money Psychology Quiz
├── tools.html         # Freedom Calculator
├── journey.html       # Waitlist signup (Formspree configured)
├── styles.css         # Shared styles and CSS variables
├── nav.js            # Shared navigation component
├── og-image.jpg      # Social sharing image (create this)
└── README.md
```

### Pages

1.  **Home (`index.html`):** Landing page introducing the core philosophy. Features the "Psychology Pillars" grid: Luck & Risk, The "Enough" Point, and The Power of Time.
2.  **Philosophy (`philosophy.html`):** Educational page exploring behavioral finance case studies, including the Ronald Read story.
3.  **The Lab (`lab.html`):** Interactive quiz that calculates and reveals your "Money Vibe" based on your answers.
4.  **Tools (`tools.html`):** Practical utility page featuring the **Freedom Calculator** with real-time calculations and 4% rule insights.
5.  **Journey (`journey.html`):** Lead-capture page with Formspree integration for the waitlist.

## Features

### Core Features
- **Interactive Tools:** Real-time Freedom Calculator with smart insights
- **Psychological Quiz:** Scored quiz that reveals your money personality type
- **Modern Design:** Clean "Sage & Forest" themed aesthetic using Tailwind CSS
- **Responsive Layout:** Fully responsive navigation and grid systems
- **Typography:** Elegant font pairings (Inter and Playfair Display)

### Robustness Improvements
- **Shared Components:**
  - `styles.css` - Centralized styles with CSS custom properties
  - `nav.js` - Dynamic navigation with active page highlighting
- **Mobile Navigation:** Hamburger menu with smooth animations
- **Accessibility:**
  - Skip-to-content links
  - Proper ARIA labels and roles
  - Semantic HTML5 elements
  - Focus-visible styles for keyboard navigation
  - Screen reader friendly forms
- **SEO:**
  - Meta descriptions for each page
  - Open Graph tags for social sharing
  - Structured data (Schema.org JSON-LD)
  - Semantic heading hierarchy
- **Form Handling:**
  - Formspree integration ready (just add your ID)
  - Honeypot spam protection
  - Loading states and error handling
  - Form validation with HTML5 patterns

## Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Styling:** Tailwind CSS (via CDN) + Custom CSS
- **Fonts:** Google Fonts (Inter, Playfair Display) with preconnect
- **Forms:** Formspree (configure with your own ID)

## Getting Started

### Quick Start
1. Clone or download the repository
2. Open `index.html` in any modern web browser

### Form Configuration
The waitlist form is configured with Formspree. Submissions will be sent to: `https://formspree.io/f/mzdyejer`

To change the form endpoint:
1. In `journey.html`, update the form action URL:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Social Image Setup
To display a preview image when sharing on social media, create an `og-image.jpg` file in the root folder (1200x630px recommended). You can generate one using:
- [Canva](https://canva.com) - Free design tool
- [Open Graph Image Generator](https://og-image-generator.vercel.app/)

### Customization

#### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --color-sage: #f4f7f2;
    --color-forest: #2d4a3e;
    --color-forest-light: #3d6354;
}
```

#### Quiz Profiles
Edit the `profiles` object in `lab.html` to customize quiz results.

## Accessibility

This project follows WCAG 2.1 AA guidelines:
- Skip navigation links
- Proper heading hierarchy
- ARIA labels on interactive elements
- Focus management
- Keyboard-navigable custom components

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

For production deployment:
1. Self-host Tailwind CSS or purge unused styles
2. Self-host Google Fonts
3. Minify HTML/CSS/JS
4. Add resource hints (`preload`, `prefetch`)
5. Configure proper cache headers

---

*© 2026 Mindful Money. Focus on behavior, not just balance.*
