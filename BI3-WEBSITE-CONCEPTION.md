# BI3 Website — Complete Conception Document

**Version:** 1.0
**Date:** November 26, 2025
**Team:** BI3 (Tashkent, Uzbekistan)
**Affiliations:** Natex Labs (natex.io) | FirstIt (1it.uz)

---

## Executive Summary

1. **Mission:** Build a modern, accessible, high-performance portfolio and marketing website for BI3 — a young development studio specializing in websites, games, and mobile apps — that matches the visual polish and architectural quality of natex.io.

2. **Core Goals:** Generate qualified leads (target: 20+ monthly contact submissions), showcase 10+ portfolio pieces with detailed case studies, achieve Lighthouse scores ≥90 across all metrics, and support three languages (English, Russian, Uzbek).

3. **Technical Approach:** Component-driven architecture using Next.js with TypeScript, Tailwind CSS design system, headless CMS for content management, and serverless functions for dynamic features — all optimized for performance and accessibility.

4. **Target Audience:** Potential clients seeking development services, game players exploring demos, recruiters/partners evaluating the team, and the Uzbekistan tech community.

5. **Timeline:** 6-sprint implementation plan (~12-18 weeks) progressing from MVP foundation through full feature deployment, with a 4-person team rotating responsibilities.

6. **Key Differentiators:** Young, energetic team identity balanced with professional execution; local Tashkent presence with global standards; interactive portfolio with playable demos and downloadable builds.

---

## Part 1: Project Summary & Goals

### 1.1 Mission Statement

BI3 exists to prove that age is no barrier to exceptional digital craftsmanship. Our website serves as both a portfolio of our capabilities and a gateway for clients, players, and collaborators to engage with our work across web development, game creation, and mobile applications.

### 1.2 Primary Measurable Goals

| Goal | Metric | Target |
|------|--------|--------|
| Lead Generation | Contact form submissions | 20+ per month (after 6 months) |
| Portfolio Engagement | Average time on case study pages | 2+ minutes |
| Demo Downloads | APK/IPA downloads per month | 50+ |
| Performance | Lighthouse Performance score | ≥ 90 |
| Accessibility | Lighthouse Accessibility score | ≥ 90 |
| SEO | Lighthouse SEO score | ≥ 90 |
| Best Practices | Lighthouse Best Practices score | ≥ 90 |
| Uptime | Monthly availability | 99.5%+ |

### 1.3 Target Audience & User Personas

**Persona 1: The Startup Founder (Client)**
- Age: 25-40
- Needs: A reliable development partner for MVP or product iteration
- Goals: Evaluate technical capability, see relevant case studies, get a quote quickly
- Pain Points: Worried about working with a young team, needs proof of quality

**Persona 2: The Gamer (Player)**
- Age: 14-30
- Needs: Discover and try new games
- Goals: Play demos, download builds, follow development progress
- Pain Points: Complex download processes, unclear game descriptions

**Persona 3: The Recruiter/Partner (Evaluator)**
- Age: 25-45
- Needs: Assess team capabilities for collaboration or hiring
- Goals: Understand team composition, review portfolio depth, initiate contact
- Pain Points: Lack of transparency about team size/experience

**Persona 4: The Local Tech Enthusiast**
- Location: Tashkent/Uzbekistan
- Needs: Connect with local tech community
- Goals: Learn about local success stories, find internship opportunities
- Pain Points: Language barriers, lack of local tech representation

---

## Part 2: Brand & Tone Guidance

### 2.1 Visual Tone

**Primary Character:** Modern minimalism with subtle edge — clean layouts that occasionally break into expressive, almost rebellious moments of creativity. Think: "professional hacker aesthetic."

**Visual Principles:**
- **Clean but not sterile:** White/dark space balanced with vibrant accent moments
- **Technical sophistication:** Grid systems, monospace typography accents, code-inspired visual elements
- **Dynamic energy:** Subtle motion that suggests constant innovation without overwhelming
- **Youthful confidence:** Bold color choices, unconventional layouts in appropriate places

### 2.2 Color Palette Direction

**Primary Palette:**
- Deep dark backgrounds (near-black with slight blue/purple tint)
- Bright accent color (electric blue, cyan, or vibrant purple — reference natex.io's energy)
- Clean whites for contrast and readability

**Secondary Palette:**
- Gradient treatments for hero sections and CTAs
- Muted grays for secondary text and borders
- Success/warning/error states following accessibility contrast requirements

**Dark Mode:** Primary experience; light mode as an alternative with inverted hierarchy

### 2.3 Typography Direction

**Headlines:** Modern geometric sans-serif (Inter, Space Grotesk, or similar) — bold weights for impact

**Body Text:** Highly readable sans-serif with excellent screen rendering — regular weights, generous line-height

**Code/Technical Elements:** Monospace font (JetBrains Mono, Fira Code) for technical credibility in appropriate contexts (terminal effects, code snippets)

**Hierarchy:** Clear distinction between H1-H6, with H1 being dramatically larger for hero impact

### 2.4 Imagery Guidance

**Photography:**
- Team photos: Candid, authentic, showing real work environments
- Tashkent/local cues: Subtle incorporation of local architecture or landmarks
- Behind-the-scenes: Development process, whiteboard sessions, team collaboration

**Abstract/Technical:**
- Geometric patterns, circuit-inspired graphics
- 3D renders of abstract tech shapes
- Particle effects and data visualization aesthetics

**Product Imagery:**
- Device mockups for apps (iPhone, Android, desktop)
- Game screenshots and promotional art
- Before/after comparisons for case studies

### 2.5 Logo Usage

**BI3 Primary:** The main brand mark — used prominently in header, footer, and branded materials

**Affiliation Badges:** "Part of Natex Labs" and "Associated with FirstIt" — displayed in footer and About page with appropriate sizing hierarchy (BI3 larger, affiliates smaller but clearly visible)

**Usage Rules:**
- Minimum clear space around BI3 logo
- Never stretch or distort
- Approved color variations for light/dark backgrounds

---

## Part 3: Information Architecture (Site Map)

### 3.1 Complete URL Structure

```
/                           → Home
/about                      → About (Team, Story, Affiliations)
/services                   → Services Overview
  /services/web             → Web Development
  /services/games           → Game Development
  /services/mobile          → iOS/Android Apps
  /services/design          → UI/UX Design
/works                      → Portfolio (Case Studies Grid)
  /works/[slug]             → Individual Case Study
/demos                      → Products/Demos Hub
  /demos/[slug]             → Individual Demo Page
/blog                       → Blog/News Listing
  /blog/[slug]              → Individual Blog Post
/careers                    → Careers/Internships
/contact                    → Contact Page
/status                     → System Status/Uptime
/privacy                    → Privacy Policy
/terms                      → Terms of Service
/sitemap.xml                → XML Sitemap
/robots.txt                 → Robots Configuration

Language Prefixes:
/ru/...                     → Russian versions
/uz/...                     → Uzbek versions

Error Pages:
/404                        → Not Found
/_offline                   → PWA Offline Page
```

### 3.2 Page-by-Page Content Structure

---

#### HOME `/`

**Content Blocks (in order):**

1. **Hero Section**
   - Animated headline with BI3 identity
   - Tagline emphasizing youth + capability
   - Primary CTA: "View Our Work" → /works
   - Secondary CTA: "Get in Touch" → /contact
   - Background: Interactive element (3D, particles, or terminal effect)

2. **Quick Stats Bar**
   - Projects completed
   - Team members
   - Years combined experience
   - Technologies mastered

3. **Services Overview**
   - 4 cards (Web, Games, Mobile, Design)
   - Icon + title + 2-line description each
   - Links to respective service pages

4. **Featured Works**
   - 3-4 highlighted portfolio pieces
   - Image + title + category tag
   - "View All Works" link

5. **About Teaser**
   - Brief paragraph about BI3 story
   - Team photo (casual/authentic)
   - "Meet the Team" link

6. **Affiliations Banner**
   - Natex Labs and FirstIt logos
   - Brief context about partnerships

7. **Latest from Blog**
   - 2-3 recent blog post cards
   - "Read More" links

8. **Contact CTA Section**
   - Compelling headline
   - Brief form (name, email, message) or link to full contact page

9. **Footer**
   - Logo + tagline
   - Navigation links
   - Social media icons
   - Language switcher
   - Legal links (Privacy, Terms)
   - Copyright + Tashkent, Uzbekistan location

---

#### ABOUT `/about`

**Content Blocks:**

1. **Hero Section**
   - "About BI3" headline
   - Subheadline about young innovators from Tashkent

2. **Our Story**
   - Narrative about formation, mission, values
   - Key milestones timeline (optional)

3. **The Team**
   - Grid of 4 team members
   - Each: Photo, Name, Role, Age (optional), Bio (2-3 sentences)
   - Social links (GitHub, LinkedIn, etc.)
   - Personal tech stack or specialty

4. **Our Values**
   - 3-4 core values with icons and descriptions
   - Examples: Innovation, Quality, Transparency, Growth

5. **Affiliations Section**
   - Natex Labs card: Logo, description, link to natex.io
   - FirstIt card: Logo, description, link to 1it.uz
   - Explanation of relationships

6. **Location**
   - Tashkent, Uzbekistan emphasis
   - Optional: Map or city imagery
   - Timezone note: UTC+5

7. **Contact CTA**

---

#### SERVICES `/services`

**Content Blocks:**

1. **Hero Section**
   - "What We Build" headline
   - Overview paragraph

2. **Services Grid**
   - 4 main service cards linking to subpages
   - Visual icons/illustrations for each

3. **Process Overview**
   - How we work: Discovery → Design → Development → Delivery
   - Brief description of each phase

4. **Tech Stack Display**
   - Technologies we use (logos/icons grid)
   - Categorized: Frontend, Backend, Mobile, Games, Design

5. **CTA Section**
   - "Have a Project?" → Contact

---

#### SERVICE SUBPAGES `/services/web`, `/services/games`, `/services/mobile`, `/services/design`

**Content Blocks (each):**

1. **Hero Section**
   - Service-specific headline and description
   - Relevant imagery/illustration

2. **What We Offer**
   - Detailed list of capabilities
   - Sub-services or specializations

3. **Technologies Used**
   - Specific tech stack for this service

4. **Related Case Studies**
   - 2-3 portfolio items from this category

5. **Process for This Service**
   - Service-specific workflow details

6. **Pricing Approach** (optional)
   - General guidance (project-based, hourly, etc.)
   - Encouragement to contact for quotes

7. **FAQ Section**
   - 3-5 common questions about this service

8. **Contact CTA**

---

#### PORTFOLIO `/works`

**Content Blocks:**

1. **Hero Section**
   - "Our Work" headline
   - Total project count

2. **Filter Bar**
   - Categories: All, Web, Games, Mobile, Design
   - Optional: Year filter, technology filter

3. **Portfolio Grid**
   - Masonry or uniform grid layout
   - Each item: Featured image, title, category tag, brief description
   - Hover effect revealing "View Case Study" CTA

4. **Load More / Pagination**
   - If >12 items, implement pagination or infinite scroll

5. **CTA Section**
   - "Want to be our next success story?"

---

#### CASE STUDY `/works/[slug]`

**Content Blocks:**

1. **Hero Section**
   - Project title
   - Category/type tag
   - Client name (if disclosable)
   - Featured image/video

2. **Quick Facts Sidebar**
   - Client
   - Industry
   - Duration
   - Team members involved
   - Technologies used
   - Live link (if available)

3. **The Challenge**
   - Problem statement
   - Client goals
   - Constraints faced

4. **The Solution**
   - Approach taken
   - Key decisions made
   - Innovation highlights

5. **Process Gallery**
   - Before/after comparisons
   - Wireframes → Final designs progression
   - Development screenshots

6. **Technical Deep Dive**
   - Architecture decisions
   - Notable technical challenges solved
   - Performance optimizations

7. **Results & Metrics**
   - Quantifiable outcomes
   - Client testimonial (if available)
   - Success metrics

8. **Media Gallery**
   - Screenshots, videos, interactive embeds
   - Device mockups

9. **Downloadable Assets** (optional)
   - PDF case study download
   - Press kit materials

10. **Related Projects**
    - 2-3 similar case studies

11. **Contact CTA**
    - "Want similar results?"

---

#### DEMOS `/demos`

**Content Blocks:**

1. **Hero Section**
   - "Try Our Creations" headline
   - Explanation of demo availability

2. **Demos Grid**
   - Each demo card:
     - Thumbnail/screenshot
     - Title
     - Type (Game, App, Prototype)
     - Platform availability (Web, Android, iOS)
     - Brief description
     - "Try Now" / "Download" buttons

3. **Platform Filters**
   - Web playable
   - Android (APK)
   - iOS (TestFlight)

4. **Featured Demo**
   - Larger showcase for newest/best demo

5. **Newsletter Signup**
   - "Get notified about new releases"

---

#### DEMO PAGE `/demos/[slug]`

**Content Blocks:**

1. **Hero Section**
   - Demo title
   - Key visual/trailer

2. **Play/Download Section**
   - Web embed (WebGL/iframe) if available
   - Download buttons: APK (with version), TestFlight link
   - System requirements

3. **Description**
   - What is this demo
   - Features list
   - Controls/instructions

4. **Screenshots/Video Gallery**

5. **Development Info**
   - Tech stack used
   - Link to full case study

6. **Feedback Form**
   - Bug reports
   - Feature suggestions

7. **Related Demos**

---

#### BLOG `/blog`

**Content Blocks:**

1. **Hero Section**
   - "Blog" or "News & Insights" headline

2. **Featured Post**
   - Latest or pinned article with larger display

3. **Category Filters**
   - All, Tutorials, Dev Diaries, News, Team Updates

4. **Blog Grid**
   - Post cards: Featured image, title, date, category, excerpt
   - Author attribution

5. **Pagination**

6. **Newsletter Signup**

---

#### BLOG POST `/blog/[slug]`

**Content Blocks:**

1. **Header**
   - Title
   - Date, author, category
   - Estimated read time

2. **Featured Image**

3. **Article Body**
   - Rich content: text, images, code blocks, embeds

4. **Author Bio**
   - Photo, name, role, brief bio
   - Social links

5. **Share Buttons**
   - Twitter, LinkedIn, copy link

6. **Related Posts**

7. **Comments** (optional — could use Disqus or similar)

8. **Newsletter CTA**

---

#### CAREERS `/careers`

**Content Blocks:**

1. **Hero Section**
   - "Join BI3" headline
   - Team culture emphasis

2. **Why Join Us**
   - Benefits of working with BI3
   - Learning opportunities (especially for young developers)
   - Internship program details

3. **Open Positions**
   - List of current openings (if any)
   - Each: Title, type (full-time, intern), location, brief description

4. **No Openings Message**
   - "We're always looking for talent"
   - Open application encouragement

5. **Application Process**
   - Steps explained

6. **Application Form or Email Link**

7. **Team Culture Section**
   - Photos, values, day-in-the-life

---

#### CONTACT `/contact`

**Content Blocks:**

1. **Hero Section**
   - "Let's Talk" headline
   - Encouraging subtext

2. **Contact Form**
   - Name (required)
   - Email (required)
   - Company/Organization (optional)
   - Project Type dropdown (Web, Game, App, Design, Other)
   - Budget Range dropdown (optional)
   - Message (required)
   - File upload (optional — briefs, mockups)
   - Submit button with loading state

3. **Direct Contact Info**
   - Email address
   - Social media links
   - Location: Tashkent, Uzbekistan
   - Timezone: UTC+5

4. **Response Time Expectation**
   - "We typically respond within 24-48 hours"

5. **FAQ Quick Links**
   - Common questions with answers

---

#### STATUS `/status`

**Content Blocks:**

1. **Current Status Banner**
   - "All Systems Operational" or incident status

2. **Service Status List**
   - Website: Status indicator
   - CMS: Status indicator
   - API/Forms: Status indicator
   - Demo servers: Status indicator

3. **Uptime History**
   - Last 30/90 days visualization

4. **Incident History**
   - Past incidents with timestamps and resolutions

5. **Subscribe to Updates**
   - Email notification signup

---

#### PRIVACY POLICY `/privacy`

**Content Blocks:**

1. **Header**
   - "Privacy Policy"
   - Last updated date

2. **Policy Sections**
   - Information we collect
   - How we use information
   - Cookies and tracking
   - Third-party services
   - Data retention
   - Your rights
   - Contact for privacy concerns

---

#### TERMS OF SERVICE `/terms`

**Content Blocks:**

1. **Header**
   - "Terms of Service"
   - Last updated date

2. **Terms Sections**
   - Acceptance of terms
   - Use of services
   - Intellectual property
   - User responsibilities
   - Limitation of liability
   - Governing law (Uzbekistan)
   - Contact information

---

#### 404 PAGE

**Content Blocks:**

1. **Creative Error Display**
   - "404" with stylized treatment
   - Witty message (e.g., "Looks like this page went on an adventure")

2. **Helpful Links**
   - Home
   - Portfolio
   - Contact

3. **Search** (optional)

---

#### OFFLINE PAGE (PWA)

**Content Blocks:**

1. **Offline Indicator**
   - "You're Offline" message

2. **Cached Content Access**
   - Links to cached pages if available

3. **Retry Button**

---

## Part 4: UX & UI Features

### 4.1 Responsive Behavior

**Breakpoint Strategy:**
- Desktop-first design approach
- Breakpoints:
  - Desktop: 1280px+
  - Laptop: 1024px - 1279px
  - Tablet: 768px - 1023px
  - Mobile: 320px - 767px

**Responsive Principles:**
- Navigation collapses to hamburger menu at tablet breakpoint
- Grid layouts shift from multi-column to single column progressively
- Hero sections adapt height and text sizing
- Images serve appropriate sizes via srcset
- Touch targets minimum 44x44px on mobile
- Footer stacks vertically on mobile

### 4.2 Hero Pattern Ideas

**Option A: Interactive Terminal Effect**
- Simulated terminal typing out "BI3" and tagline
- Command-line aesthetic with blinking cursor
- Subtle glitch effects
- User can "type" commands that reveal content

**Option B: Animated 3D Geometric Shapes**
- Low-poly or wireframe 3D shapes floating in space
- Subtle parallax on mouse movement
- WebGL-rendered but with canvas fallback
- Performance-optimized with reduced motion support

**Option C: Particle Network**
- Connected particle system responding to cursor
- Represents connectivity and technology
- Canvas-based for performance

**Option D: Gradient Mesh Animation**
- Slowly morphing gradient backgrounds
- CSS-based for maximum performance
- Subtle and professional

**Recommendation:** Start with Option D (gradient) for MVP, enhance to Option A or B post-launch

### 4.3 Portfolio Interactions

**Grid Behavior:**
- Filterable by category (instant filter, no page reload)
- Animated transitions when filters change (FLIP technique)
- Masonry layout option for varied image sizes
- Grid layout option for uniform presentation
- Hover states: Slight lift, overlay with title and CTA

**Case Study Pages:**
- Sticky navigation for long-form content
- Progress indicator showing reading position
- Smooth scroll between sections
- Image lightbox for galleries
- Before/after slider component
- Lazy-loaded media
- Downloadable PDF version generation

### 4.4 Demos Section Features

**Security & Access:**
- Secure, time-limited download links for APKs
- Token-based access for pre-release builds
- Version tracking and changelog display
- Analytics on download counts

**Web Playable:**
- WebGL game embeds with loading states
- Fullscreen toggle
- Mobile touch controls where applicable
- Performance warning for low-end devices

**Mobile Builds:**
- APK direct download with version info
- QR codes for easy mobile access
- TestFlight links for iOS
- Installation instructions per platform

### 4.5 Team Page Features

**Individual Profiles:**
- High-quality photo (consistent style across team)
- Name and role
- Age (optional — emphasizes youth but keep optional)
- Bio: 2-3 sentences about background and interests
- Personal tech stack icons
- Social links: GitHub, LinkedIn, Twitter, personal site
- Fun fact or hobby (humanizing element)

**Team Composition Display:**
- Visual skill matrix showing team capabilities
- Years of experience per domain

### 4.6 Contact Form Features

**Form Fields:**
- Progressive disclosure: Start simple, reveal optional fields
- Real-time validation with clear error messages
- Email format validation
- Character limits with counters
- File upload: Drag-and-drop, max 10MB, accepted formats listed

**Spam Protection:**
- hCaptcha (privacy-focused alternative to reCAPTCHA)
- Honeypot fields
- Rate limiting
- Form token validation

**Submission Experience:**
- Loading state on button
- Success confirmation with next steps
- Error handling with retry option
- Email confirmation to submitter

### 4.7 Dark Mode Implementation

**Strategy:**
- Dark mode as default (matches tech aesthetic)
- Light mode toggle in header/footer
- System preference detection on first visit
- User preference stored in localStorage
- Smooth transition animation (150-200ms)
- All components designed for both modes

**Considerations:**
- Ensure contrast ratios meet WCAG AA in both modes
- Images with transparency need dark-mode variants or backgrounds
- Syntax highlighting themes for both modes

### 4.8 Micro-interactions & Motion

**Principles:**
- Purposeful motion that aids understanding
- Never decorative-only animation
- Respect prefers-reduced-motion preference
- Performance-first: CSS transforms over layout changes

**Implementations:**
- **Navigation:** Smooth underline animations on hover
- **Buttons:** Subtle scale and shadow lift on hover
- **Cards:** Elevation change on hover
- **Page Transitions:** Fade or slide transitions between pages
- **Loading States:** Skeleton screens over spinners
- **Scroll Animations:** Subtle fade-in on scroll (IntersectionObserver)
- **Lottie Animations:** For illustrations, icons, empty states

**Motion Tokens:**
- Duration-fast: 150ms
- Duration-normal: 300ms
- Duration-slow: 500ms
- Easing-default: cubic-bezier(0.4, 0, 0.2, 1)

---

## Part 5: Accessibility & Internationalization

### 5.1 WCAG 2.1 AA Requirements

**Perceivable:**
- Color contrast minimum 4.5:1 for normal text, 3:1 for large text
- All images have descriptive alt text
- Videos have captions/transcripts
- Content doesn't rely on color alone
- Text can be resized to 200% without loss of function

**Operable:**
- All functionality available via keyboard
- Visible focus indicators (custom styled, not browser default)
- Skip links to main content
- No keyboard traps
- No time limits without user control
- No content that flashes more than 3 times/second

**Understandable:**
- Language declared in HTML
- Consistent navigation across pages
- Form labels clearly associated with inputs
- Error messages are descriptive and helpful
- Form fields have clear instructions

**Robust:**
- Valid HTML
- ARIA used correctly where needed
- Works across modern browsers and assistive technologies

### 5.2 Specific Accessibility Implementations

**Focus Management:**
- Custom focus ring: 2px solid accent color with offset
- Focus-visible for keyboard-only focus styles
- Focus trapped in modals
- Focus returned after modal close

**Semantic HTML:**
- Proper heading hierarchy (one H1 per page)
- Landmark regions (header, nav, main, footer)
- Lists for navigation items
- Buttons for actions, links for navigation

**ARIA Usage:**
- aria-label for icon-only buttons
- aria-expanded for dropdowns
- aria-current for active navigation
- aria-live for dynamic content updates
- role="alert" for error messages

**Skip Links:**
- "Skip to main content" link as first focusable element
- "Skip to navigation" if needed
- Visually hidden until focused

### 5.3 Internationalization Strategy

**Supported Languages:**
- English (en) — Default
- Russian (ru) — Major regional language
- Uzbek (uz) — Local language, Latin script primary

**Route Structure:**
```
/                → English (default)
/ru/             → Russian
/uz/             → Uzbek

Examples:
/about           → English about page
/ru/about        → Russian about page
/uz/about        → Uzbek about page
```

**Implementation Approach:**
- Route-based translations using Next.js i18n or similar
- Translation files in JSON format per language
- CMS content with language variants
- Language selector in header (dropdown or flags + text)
- Store preference in localStorage, cookie for SSR
- hreflang tags for SEO

**Language Selector Design:**
- Display current language code/name
- Dropdown with all options
- Flag icons optional (can be controversial — text preferred)
- Persist selection across sessions

**Content Translation Priority:**
1. Navigation and UI strings
2. Home page
3. About page
4. Services pages
5. Contact page
6. Portfolio (at minimum titles/descriptions)
7. Legal pages
8. Blog (optional — can remain English-only initially)

**RTL Consideration:**
- Not required for EN/RU/UZ (all LTR)
- Architecture should not preclude future RTL support

### 5.4 Regional Considerations

**Timezone:**
- Display times in Tashkent timezone (UTC+5) by default
- Blog post dates, event times, etc.
- Note timezone in footer: "Tashkent, Uzbekistan (UTC+5)"

**Date Formats:**
- English: Month DD, YYYY
- Russian: DD.MM.YYYY
- Uzbek: DD.MM.YYYY

**Number Formats:**
- Use locale-appropriate separators for large numbers

---

## Part 6: Technical Stack Recommendations

### 6.1 Frontend Framework

**Recommendation: Next.js 14+ with App Router**

**Rationale:**
- SSR and SSG for SEO and performance
- Built-in i18n support
- API routes for serverless functions
- Image optimization built-in
- Strong TypeScript support
- Large ecosystem and community
- Vercel deployment integration

**Alternatives Considered:**
- SvelteKit: Excellent performance, smaller community
- Astro: Great for content sites, less interactive capability
- Remix: Strong fundamentals, newer ecosystem

### 6.2 Language

**Recommendation: TypeScript (strict mode)**

**Rationale:**
- Type safety prevents runtime errors
- Better IDE support and autocomplete
- Self-documenting code
- Easier refactoring at scale

### 6.3 Styling

**Recommendation: Tailwind CSS v3+**

**Rationale:**
- Design system friendly with custom config
- Dark mode built-in
- Small production bundle (purged CSS)
- Rapid development
- Consistent spacing/sizing scales

**Design System Approach:**
- Custom Tailwind config with BI3 colors, fonts, spacing
- Component library built with Tailwind
- CSS custom properties for theme switching

### 6.4 Animation Libraries

**Recommendation: Layered approach**

**Layer 1 (CSS):** CSS transitions and animations for simple interactions

**Layer 2 (Framer Motion):** React-based animations for complex interactions
- Page transitions
- Layout animations
- Gesture support

**Layer 3 (Lottie):** For complex illustrations and icons
- Lightweight player (lottie-react)
- After Effects animations exported as JSON

**Performance Note:** All animations should:
- Use transform and opacity only
- Respect prefers-reduced-motion
- Be GPU-accelerated
- Have fallbacks

### 6.5 Headless CMS

**Recommendation: Sanity**

**Rationale:**
- Real-time collaboration
- Flexible schema definition
- Excellent image pipeline (transformations, CDN)
- Free tier generous for small teams
- Great developer experience
- Preview functionality

**Alternatives:**
- Strapi: Self-hosted, full control, more maintenance
- Contentful: Enterprise-grade, can be expensive
- Keystatic: Git-based, simpler but less flexible

**CMS Content Types:**
- Portfolio projects
- Blog posts
- Team members
- Services (if frequently updated)
- Demo/product entries
- Site settings (global content)
- Translations

### 6.6 Media Handling

**Image CDN: Sanity's built-in or Cloudinary**

**Strategy:**
- Serve AVIF with WebP fallback
- Responsive images with srcset
- Lazy loading with blur placeholder
- Maximum dimensions defined
- Automatic compression

**Video:**
- Self-hosted for demos (if small)
- YouTube/Vimeo embeds for larger content
- Lazy-load video players

### 6.7 Backend/API

**Recommendation: Serverless Functions (Vercel Functions)**

**Use Cases:**
- Contact form submission
- Demo download token generation
- Analytics event tracking
- Status page data aggregation
- Newsletter signup

**Alternatives:**
- AWS Lambda
- Netlify Functions
- Cloudflare Workers

### 6.8 Authentication (Admin Only)

**Recommendation: OAuth via CMS provider**

**Details:**
- No public authentication needed
- CMS handles content editor auth
- Admin-only access to CMS dashboard
- Team members added via CMS invite system

### 6.9 Analytics & Monitoring

**Analytics: Plausible or PostHog**

**Rationale:**
- Privacy-focused (no cookie banner needed for Plausible)
- Lightweight script
- Essential metrics covered
- Self-hostable option

**Alternative: Google Analytics 4**
- Free, full-featured
- Requires cookie consent

**Error Monitoring: Sentry**
- Frontend error tracking
- Performance monitoring
- Release tracking
- Free tier sufficient

### 6.10 Hosting & Deployment

**Recommendation: Vercel**

**Rationale:**
- Native Next.js support
- Automatic deployments from Git
- Preview deployments for PRs
- Edge functions
- Analytics built-in
- Generous free tier

**Alternatives:**
- Netlify: Good, similar features
- DigitalOcean App Platform: More control, more setup
- Railway: Simple deployment

**CI/CD: GitHub Actions**
- Lint checks on PR
- Type checking
- Build verification
- Automated testing
- Preview deployment triggers

### 6.11 Development Tools

**Code Quality:**
- ESLint with strict config
- Prettier for formatting
- Husky for pre-commit hooks
- lint-staged for efficient linting

**Component Development:**
- Storybook for UI component library
- Chromatic for visual regression testing (optional)

**Testing:**
- Vitest for unit tests
- Playwright for E2E tests
- axe-core for accessibility testing

---

## Part 7: SEO, Metadata & Social Sharing

### 7.1 Meta Requirements by Page Type

**Global Template:**
```
Title: {Page Title} | BI3 - Young Developers from Tashkent
Description: {Page-specific description, 150-160 chars}
Canonical: {Full canonical URL}
```

**Home Page:**
```
Title: BI3 - Web, Games & App Development Studio | Tashkent, Uzbekistan
Description: Young development studio creating exceptional websites,
games, and mobile apps. Based in Tashkent, Uzbekistan. Part of Natex Labs.
```

**Service Pages:**
```
Title: {Service Name} | BI3 Development Services
Description: Professional {service} development by BI3.
{Unique value proposition}. Get a quote today.
```

**Portfolio:**
```
Title: Our Work - Case Studies & Portfolio | BI3
Description: Explore BI3's portfolio of websites, games, and mobile apps.
Detailed case studies showcasing our development process and results.
```

**Case Study:**
```
Title: {Project Name} - {Category} Case Study | BI3
Description: How BI3 built {Project Name}. {Brief outcome/result}.
View the full case study.
```

**Blog Post:**
```
Title: {Post Title} | BI3 Blog
Description: {Post excerpt, first 160 chars}
```

### 7.2 Open Graph Tags

**Required for all pages:**
```html
<meta property="og:title" content="{Title}">
<meta property="og:description" content="{Description}">
<meta property="og:image" content="{Image URL - 1200x630px}">
<meta property="og:url" content="{Canonical URL}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="BI3">
<meta property="og:locale" content="en_US">
<meta property="og:locale:alternate" content="ru_RU">
<meta property="og:locale:alternate" content="uz_UZ">
```

**For articles/blog:**
```html
<meta property="og:type" content="article">
<meta property="article:published_time" content="{ISO date}">
<meta property="article:author" content="{Author name}">
```

### 7.3 Twitter Cards

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{Title}">
<meta name="twitter:description" content="{Description}">
<meta name="twitter:image" content="{Image URL}">
<meta name="twitter:site" content="@BI3team">
```

### 7.4 Structured Data (JSON-LD)

**Organization (site-wide):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BI3",
  "url": "https://bi3.dev",
  "logo": "https://bi3.dev/logo.png",
  "description": "Young development studio...",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tashkent",
    "addressCountry": "UZ"
  },
  "parentOrganization": {
    "@type": "Organization",
    "name": "Natex Labs",
    "url": "https://natex.io"
  },
  "sameAs": [
    "https://github.com/bi3",
    "https://linkedin.com/company/bi3"
  ]
}
```

**BreadcrumbList (all pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "/"},
    {"@type": "ListItem", "position": 2, "name": "{Current}", "item": "/{path}"}
  ]
}
```

**WebSite (home):**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "BI3",
  "url": "https://bi3.dev"
}
```

**Person (team members):**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "{Name}",
  "jobTitle": "{Role}",
  "worksFor": {"@type": "Organization", "name": "BI3"}
}
```

### 7.5 Technical SEO

**Sitemap:**
- XML sitemap at /sitemap.xml
- Include all public pages
- Exclude admin, preview, draft pages
- Update on content changes
- Submit to Google Search Console

**Robots.txt:**
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_next/

Sitemap: https://bi3.dev/sitemap.xml
```

**Hreflang Tags:**
```html
<link rel="alternate" hreflang="en" href="https://bi3.dev/about">
<link rel="alternate" hreflang="ru" href="https://bi3.dev/ru/about">
<link rel="alternate" hreflang="uz" href="https://bi3.dev/uz/about">
<link rel="alternate" hreflang="x-default" href="https://bi3.dev/about">
```

### 7.6 Performance Targets (Lighthouse)

| Metric | Target |
|--------|--------|
| Performance | ≥ 90 |
| Accessibility | ≥ 90 |
| Best Practices | ≥ 90 |
| SEO | ≥ 90 |
| PWA | Optional |

---

## Part 8: Security, Privacy & Compliance

### 8.1 Transport Security

**HTTPS:**
- Enforce HTTPS on all pages
- Redirect HTTP to HTTPS
- Valid SSL certificate (auto via Vercel/hosting)

**HSTS Header:**
```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

**Other Security Headers:**
```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Content-Security-Policy: [appropriate policy]
```

### 8.2 Application Security

**Form Protection:**
- CSRF tokens on all forms
- Rate limiting: Max 5 submissions per IP per minute
- Input validation (server-side, not just client)
- Sanitize all inputs before storage
- Parameterized queries if using database

**File Upload Security:**
- Whitelist allowed file types
- Validate file headers, not just extensions
- Scan for malware (if possible)
- Store outside web root
- Generate random filenames
- Size limits enforced server-side

**API Security:**
- Rate limiting on all endpoints
- Input validation
- Error messages don't leak sensitive info
- No sensitive data in URLs

### 8.3 Privacy & Compliance

**Cookie Policy:**
- Essential cookies only by default
- Analytics opt-in via consent banner
- Cookie banner with accept/reject options
- Clear explanation of each cookie type

**Privacy-First Defaults:**
- Use privacy-focused analytics (Plausible)
- Minimize data collection
- Don't store IPs in logs (or anonymize)
- Clear data retention policies

**Contact Form Data:**
- Store only what's necessary
- Encrypt at rest if storing in database
- Clear retention period (e.g., 1 year)
- Process for data deletion requests
- Don't share with third parties

**Legal Pages:**
- Privacy Policy (required)
- Terms of Service (recommended)
- Cookie Policy (can be part of Privacy)
- Accessible and up-to-date

### 8.4 Backup & Recovery

**CMS Backup:**
- Sanity has built-in data export
- Weekly automated backups
- Store backups securely (encrypted)

**Code Backup:**
- Git repository is primary
- Multiple team members have access
- Protected main branch

**Asset Backup:**
- CMS-hosted assets backed up with CMS
- Critical assets duplicated in secondary storage

**Recovery Plan:**
- Document deployment process
- Test recovery procedure quarterly
- Maximum acceptable downtime: 4 hours

---

## Part 9: Performance & Testing

### 9.1 Performance Budget

| Metric | Budget |
|--------|--------|
| Initial page weight | < 500KB (compressed) |
| Total page weight | < 1MB (with lazy-loaded assets) |
| Time to First Byte (TTFB) | < 200ms |
| First Contentful Paint (FCP) | < 1.5s |
| Largest Contentful Paint (LCP) | < 2.5s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| First Input Delay (FID) | < 100ms |
| Total Blocking Time (TBT) | < 300ms |

### 9.2 Performance Optimization Strategies

**Image Optimization:**
- Next.js Image component with automatic optimization
- AVIF/WebP formats with fallbacks
- Lazy loading for below-fold images
- Blur placeholders during load
- Responsive sizing with srcset

**JavaScript Optimization:**
- Code splitting by route
- Dynamic imports for heavy components
- Tree shaking enabled
- No unused dependencies
- Bundle analysis in CI

**CSS Optimization:**
- Tailwind purge unused styles
- Critical CSS inlined
- No render-blocking stylesheets

**Caching:**
- Static assets: long cache (1 year)
- HTML: short cache with revalidation
- API responses: appropriate cache headers
- CDN caching via Vercel

### 9.3 Core Web Vitals Monitoring

**Tools:**
- Google Search Console CWV report
- Vercel Analytics (if using Vercel)
- PageSpeed Insights for spot checks
- Web Vitals library for RUM

**Process:**
- Weekly review of CWV metrics
- Alert on significant regressions
- Performance audit before major releases

### 9.4 Testing Strategy

**Unit Testing (Vitest):**
- Utility functions
- Component logic
- Custom hooks
- Form validation

**Component Testing (Vitest + Testing Library):**
- UI components render correctly
- Props work as expected
- Accessibility attributes present
- User interactions work

**E2E Testing (Playwright):**
- Critical user flows:
  - Home page loads
  - Portfolio filtering works
  - Case study navigation
  - Contact form submission
  - Demo download flow
  - Language switching
- Run on CI for every PR
- Run full suite before production deploy

**Accessibility Testing:**
- axe-core in CI (catches ~30-40% of issues)
- Manual testing with screen reader
- Keyboard-only navigation test
- Color contrast verification

**Visual Regression (Optional):**
- Chromatic for Storybook components
- Percy or Playwright screenshots

**Test Coverage Target:**
- 70%+ for utility functions
- 60%+ for component logic
- 100% for critical user flows (E2E)

---

## Part 10: Content & Editorial Plan

### 10.1 Starter Content Checklist

**Home Page:**
- [ ] Hero headline and tagline
- [ ] Stats/numbers (verify accuracy)
- [ ] Service overview copy (4 cards)
- [ ] About teaser paragraph
- [ ] Affiliation descriptions

**About Page:**
- [ ] Origin story (2-3 paragraphs)
- [ ] Mission statement
- [ ] Values list (3-4 items)
- [ ] Team bios (4 members)
- [ ] Team photos (professional quality)
- [ ] Affiliation descriptions

**Services Pages (×4):**
- [ ] Overview description per service
- [ ] Capabilities list per service
- [ ] Technology list per service
- [ ] FAQ (3-5 questions each)

**Portfolio (minimum 3 case studies):**
- [ ] Case Study 1: Web project
  - [ ] Challenge/solution narrative
  - [ ] Screenshots (5-10)
  - [ ] Metrics/results
- [ ] Case Study 2: Game project
  - [ ] Challenge/solution narrative
  - [ ] Screenshots/video
  - [ ] Metrics/results
- [ ] Case Study 3: Mobile app project
  - [ ] Challenge/solution narrative
  - [ ] Screenshots
  - [ ] Metrics/results

**Demos (minimum 1):**
- [ ] Demo 1: Playable or downloadable
  - [ ] Description
  - [ ] Screenshots
  - [ ] Download files

**Blog (minimum 2 posts):**
- [ ] Launch announcement post
- [ ] First technical/tutorial post

**Legal:**
- [ ] Privacy Policy draft
- [ ] Terms of Service draft

### 10.2 Tone Guidelines for Content

**Voice Characteristics:**
- Confident but not arrogant
- Technical but accessible
- Young energy but professional
- Enthusiastic but not hyperbolic
- Direct and clear

**Avoid:**
- Excessive jargon without explanation
- Overused startup buzzwords ("disrupting," "synergy")
- Self-deprecating age references
- Unprofessional slang

**Embrace:**
- Technical credibility
- Specific examples over vague claims
- Honest about team size/age as strength
- Local pride (Tashkent/Uzbekistan)

### 10.3 SEO Keywords

**Primary Keywords:**
- BI3
- Tashkent web development
- Uzbekistan game studio
- Mobile app development Tashkent
- Young developers Uzbekistan

**Secondary Keywords:**
- Web development company Uzbekistan
- Game development Central Asia
- iOS app development Tashkent
- Android app Uzbekistan
- UI/UX design Tashkent

**Long-tail Keywords:**
- Hire web developers in Tashkent
- Mobile app studio Uzbekistan
- Indie game developers Central Asia
- Startup development team Tashkent

### 10.4 Blog Content Strategy

**Publishing Cadence:** 1-2 quality posts per month

**Content Pillars:**

1. **Project Showcases (40%)**
   - Behind-the-scenes of completed projects
   - Technical challenges overcome
   - Design process documentation

2. **Tutorials & How-To (30%)**
   - Technical tutorials relevant to services
   - Tool recommendations
   - Development tips

3. **Team & Culture (20%)**
   - Team member spotlights
   - Day in the life
   - Learning journey posts

4. **News & Announcements (10%)**
   - New project launches
   - Team updates
   - Industry commentary

**Content Calendar Approach:**
- Plan 1 month ahead
- Mix of content types
- Tie to portfolio launches when possible

---

## Part 11: Analytics, Monitoring & Operations

### 11.1 Analytics Events to Track

**Page-Level:**
- All page views with URL, referrer, device type

**Engagement Events:**
- Contact form submissions (with project type)
- Demo downloads (by demo, platform)
- Portfolio CTA clicks (which project)
- Case study PDF downloads
- Time on case study pages
- Blog post reads (completion percentage)
- Newsletter signups
- Language changes
- Theme toggles

**Navigation Events:**
- Service page visits
- About page visits
- Outbound link clicks (Natex, FirstIt)

**Error Events:**
- Form submission errors
- 404 page hits
- JavaScript errors

### 11.2 Analytics Implementation

**Recommended: Plausible Analytics**

**Setup:**
- Add script to all pages
- Configure goal tracking for key events
- Set up email reports

**Dashboard Metrics:**
- Unique visitors
- Page views
- Bounce rate
- Visit duration
- Top pages
- Top sources
- Goal conversions

### 11.3 Error Monitoring (Sentry)

**Configuration:**
- Frontend error capture
- Source maps for stack traces
- Release tracking
- Environment tagging (production/preview)

**Alerts:**
- New error types: immediate notification
- Error spike: >10 errors/minute

**Review Process:**
- Weekly error review
- Prioritize by impact and frequency

### 11.4 Uptime Monitoring

**Tool: UptimeRobot (free tier)**

**Monitors:**
- Home page (1-minute interval)
- Contact form endpoint
- CMS API health

**Alerts:**
- Email notification on downtime
- Slack notification (if used)

**Status Page:**
- Public status page at /status
- Historical uptime display
- Incident communication

### 11.5 Operational Processes

**Daily:**
- No required daily tasks for small site

**Weekly:**
- Review error monitoring
- Check contact form submissions
- Publish blog content if scheduled

**Monthly:**
- Analytics review
- Performance audit (Lighthouse)
- Security dependency updates
- Backup verification

**Quarterly:**
- Content review and updates
- SEO performance review
- Accessibility audit
- Recovery procedure test

---

## Part 12: QA Checklist & Acceptance Criteria

### 12.1 Global QA Checklist

**Performance:**
- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse Accessibility ≥ 90
- [ ] Lighthouse Best Practices ≥ 90
- [ ] Lighthouse SEO ≥ 90
- [ ] No console errors
- [ ] No render-blocking resources
- [ ] Images optimized and lazy-loaded

**Accessibility:**
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Color contrast meets AA
- [ ] Keyboard navigation works
- [ ] Skip link present
- [ ] Focus indicators visible
- [ ] Screen reader tested
- [ ] Heading hierarchy correct
- [ ] ARIA used correctly

**SEO:**
- [ ] Title tag present and correct
- [ ] Meta description present
- [ ] Canonical URL set
- [ ] Open Graph tags complete
- [ ] Twitter Card tags complete
- [ ] Structured data valid
- [ ] hreflang tags correct
- [ ] Sitemap includes page
- [ ] No broken links

**Responsiveness:**
- [ ] Desktop (1440px) tested
- [ ] Laptop (1024px) tested
- [ ] Tablet (768px) tested
- [ ] Mobile (375px) tested
- [ ] No horizontal scroll
- [ ] Touch targets adequate
- [ ] Text readable without zoom

**Cross-Browser:**
- [ ] Chrome tested
- [ ] Firefox tested
- [ ] Safari tested
- [ ] Edge tested
- [ ] Mobile Safari tested
- [ ] Mobile Chrome tested

**Functionality:**
- [ ] All links work
- [ ] Forms submit correctly
- [ ] Error states work
- [ ] Loading states work
- [ ] Dark mode toggle works
- [ ] Language switcher works

### 12.2 Page-Specific QA

**Home Page:**
- [ ] Hero animation performs well
- [ ] Stats are accurate
- [ ] Featured works load correctly
- [ ] All CTAs link correctly

**Portfolio:**
- [ ] Filters work correctly
- [ ] All projects display
- [ ] Images load properly
- [ ] Pagination/load more works

**Case Study:**
- [ ] All sections render
- [ ] Images in gallery work
- [ ] Before/after slider works
- [ ] PDF download works (if applicable)
- [ ] Related projects show

**Contact:**
- [ ] All form fields validate
- [ ] Submission works
- [ ] Confirmation appears
- [ ] Email received
- [ ] File upload works
- [ ] CAPTCHA works

**Demos:**
- [ ] Downloads work
- [ ] Correct files download
- [ ] Web embeds load
- [ ] Version info accurate

**Blog:**
- [ ] Posts render correctly
- [ ] Code blocks formatted
- [ ] Images display
- [ ] Author info correct
- [ ] Share buttons work

### 12.3 Pre-Launch Checklist

**Domain & DNS:**
- [ ] Domain registered
- [ ] DNS configured
- [ ] SSL certificate active
- [ ] www redirect works

**Content:**
- [ ] All placeholder content replaced
- [ ] All images are final
- [ ] Legal pages reviewed
- [ ] Contact info accurate

**Technical:**
- [ ] Environment variables set
- [ ] API keys secured
- [ ] Error monitoring active
- [ ] Analytics installed
- [ ] Forms tested with real submissions

**SEO:**
- [ ] robots.txt allows crawling
- [ ] Sitemap submitted
- [ ] Google Search Console verified
- [ ] Social previews tested

**Security:**
- [ ] Security headers configured
- [ ] No sensitive data exposed
- [ ] Rate limiting active
- [ ] Backup system tested

---

## Part 13: Deployment & Launch Plan

### 13.1 Pre-Launch Phase (1 week before)

**Day -7:**
- [ ] Staging environment fully tested
- [ ] All QA checklists complete
- [ ] Team reviewed all content

**Day -5:**
- [ ] DNS configuration prepared
- [ ] SSL ready
- [ ] Analytics accounts created

**Day -3:**
- [ ] Final content review
- [ ] Social announcement prepared
- [ ] Email announcement prepared

**Day -1:**
- [ ] Domain DNS updated
- [ ] SSL certificate active
- [ ] Production environment tested
- [ ] Rollback plan documented

### 13.2 Launch Day

**Hour 0:**
- [ ] Deploy to production
- [ ] Verify all pages load
- [ ] Test contact form
- [ ] Test demo downloads

**Hour 1:**
- [ ] Submit sitemap to Google
- [ ] Verify analytics tracking
- [ ] Verify error monitoring

**Hour 2-4:**
- [ ] Post social announcements
- [ ] Send email announcements
- [ ] Monitor for errors

### 13.3 Post-Launch (First 30 Days)

**Week 1:**
- [ ] Daily error monitoring
- [ ] Daily uptime checks
- [ ] Respond to any issues immediately
- [ ] Gather initial feedback

**Week 2:**
- [ ] First analytics review
- [ ] First performance audit
- [ ] Address any reported issues

**Week 3-4:**
- [ ] SEO indexing check
- [ ] Search Console review
- [ ] First content update (if needed)
- [ ] First blog post post-launch

### 13.4 Rollback Procedures

**Trigger Conditions:**
- Major functionality broken
- Security vulnerability discovered
- Data corruption

**Rollback Steps:**
1. Revert to previous deployment (Vercel: 1-click)
2. Notify team immediately
3. Document issue
4. Fix in development
5. Test fix thoroughly
6. Redeploy when ready

**Communication:**
- Update status page
- Notify via social if public-facing issue
- Post-mortem after resolution

---

## Part 14: Roles, Responsibilities & Timeline

### 14.1 Team Role Mapping

**Team Member 1: Project Manager / Content Lead**
- Overall project coordination
- Content writing and editing
- Client communication
- QA and testing coordination
- Blog content management

**Team Member 2: Frontend Developer / Designer**
- UI component development
- Responsive implementation
- Animation and interactions
- Storybook maintenance
- Accessibility implementation

**Team Member 3: Full-Stack Developer / DevOps**
- Next.js architecture
- API development
- CMS integration
- Deployment and CI/CD
- Performance optimization

**Team Member 4: Designer / Animator**
- Visual design (Figma)
- Brand assets creation
- Lottie animations
- Image/video editing
- Portfolio asset preparation

### 14.2 Sprint Plan (6 Sprints × 2-3 weeks each)

---

#### Sprint 1: Foundation & Design System
**Duration:** 2-3 weeks

**Deliverables:**
- [ ] Project setup (Next.js, TypeScript, Tailwind)
- [ ] Git repository and CI/CD pipeline
- [ ] Design system in Tailwind config (colors, typography, spacing)
- [ ] Core components: Button, Input, Card, Container
- [ ] Layout components: Header, Footer, Navigation
- [ ] Dark mode implementation
- [ ] Home page layout (static)
- [ ] Basic responsive behavior

**Definition of Done:**
- Storybook running with core components
- CI pipeline passing
- Home page renders on all breakpoints

---

#### Sprint 2: Core Pages & Navigation
**Duration:** 2-3 weeks

**Deliverables:**
- [ ] About page (static)
- [ ] Services overview page
- [ ] Service subpages (4 pages)
- [ ] Contact page with form UI
- [ ] 404 page
- [ ] Navigation fully functional
- [ ] Language switcher UI (no translations yet)
- [ ] Footer complete

**Definition of Done:**
- All core pages render correctly
- Navigation works on all devices
- Form validation works (client-side)

---

#### Sprint 3: Portfolio & Case Studies
**Duration:** 2-3 weeks

**Deliverables:**
- [ ] CMS setup (Sanity)
- [ ] Portfolio schema and content types
- [ ] Portfolio listing page with filtering
- [ ] Case study template page
- [ ] 3 case studies entered in CMS
- [ ] Image optimization pipeline
- [ ] Related projects component

**Definition of Done:**
- Portfolio filtering works
- Case studies render from CMS
- Images optimized and lazy-loaded

---

#### Sprint 4: Dynamic Features & Forms
**Duration:** 2-3 weeks

**Deliverables:**
- [ ] Contact form backend (serverless function)
- [ ] Form submission to email
- [ ] Form spam protection (hCaptcha)
- [ ] Demo download system
- [ ] Demo pages template
- [ ] At least 1 demo entry
- [ ] Careers page
- [ ] Status page (basic)

**Definition of Done:**
- Contact form submissions received via email
- Demo downloads work
- All dynamic features functional

---

#### Sprint 5: Blog & Content
**Duration:** 2-3 weeks

**Deliverables:**
- [ ] Blog schema in CMS
- [ ] Blog listing page
- [ ] Blog post template
- [ ] 2 initial blog posts
- [ ] Author bio component
- [ ] Social sharing buttons
- [ ] Newsletter signup
- [ ] i18n implementation (3 languages)
- [ ] Translated navigation and key pages

**Definition of Done:**
- Blog fully functional
- Language switcher works
- Key pages have translations

---

#### Sprint 6: Polish, QA & Launch
**Duration:** 2-3 weeks

**Deliverables:**
- [ ] All animations and micro-interactions
- [ ] Performance optimization
- [ ] Full accessibility audit and fixes
- [ ] SEO implementation complete
- [ ] All meta tags and structured data
- [ ] Legal pages finalized
- [ ] Full QA across devices/browsers
- [ ] E2E tests for critical paths
- [ ] Pre-launch checklist complete
- [ ] Launch!

**Definition of Done:**
- All Lighthouse scores ≥ 90
- All QA checklists pass
- Site live on production domain

---

## Part 15: Deliverables for the Developer

### 15.1 Prioritized TODO List

**Phase 1: Foundation**
1. Initialize Next.js project with TypeScript
2. Configure Tailwind CSS with custom theme
3. Set up ESLint, Prettier, Husky
4. Create layout component (header, footer, nav)
5. Implement dark mode toggle
6. Build core UI components (Button, Card, Input)
7. Set up Storybook

**Phase 2: Static Pages**
8. Build home page layout
9. Build about page
10. Build services pages (overview + 4 subpages)
11. Build contact page (form UI only)
12. Build 404 page

**Phase 3: CMS & Portfolio**
13. Set up Sanity CMS
14. Create portfolio schema
15. Build portfolio listing with filters
16. Build case study template
17. Enter 3 case studies

**Phase 4: Dynamic Features**
18. Create contact form API endpoint
19. Implement email sending
20. Add spam protection
21. Build demo pages template
22. Implement demo downloads

**Phase 5: Blog & i18n**
23. Create blog schema in CMS
24. Build blog listing page
25. Build blog post template
26. Implement i18n routing
27. Add translations for key pages

**Phase 6: Launch Prep**
28. Complete all animations
29. Performance optimization
30. SEO implementation
31. Accessibility fixes
32. E2E tests
33. Launch

### 15.2 Route Map with Test Content

| Route | Test Content Needed |
|-------|---------------------|
| `/` | Hero text, 4 service cards, 3 featured projects, stats |
| `/about` | Story text, 4 team bios with photos, values list |
| `/services` | Overview text, 4 service summaries |
| `/services/web` | Web dev description, capabilities, tech list, FAQ |
| `/services/games` | Game dev description, capabilities, tech list, FAQ |
| `/services/mobile` | Mobile description, capabilities, tech list, FAQ |
| `/services/design` | Design description, capabilities, tech list, FAQ |
| `/works` | 3+ project cards with images |
| `/works/project-1` | Full case study content |
| `/works/project-2` | Full case study content |
| `/works/project-3` | Full case study content |
| `/demos` | 1+ demo with screenshots |
| `/demos/demo-1` | Demo description, files |
| `/blog` | 2+ post previews |
| `/blog/post-1` | Full blog post |
| `/blog/post-2` | Full blog post |
| `/careers` | Culture text, 1-2 sample positions |
| `/contact` | Contact info, form |
| `/status` | Service status data |
| `/privacy` | Legal text |
| `/terms` | Legal text |

---

## Part 16: Example User Journeys

### Journey 1: Potential Client Finding a Development Partner

**User:** Startup founder in Tashkent looking for app development

**Flow:**
1. **Entry:** Searches "mobile app development Tashkent" on Google
2. **Landing:** Arrives on `/services/mobile` via organic search
3. **Exploration:** Reads service description, views tech stack
4. **Validation:** Clicks "View Our Work" → `/works`
5. **Deep Dive:** Filters by "Mobile," clicks on a relevant case study
6. **Case Study:** Reads problem/solution, views screenshots, sees results
7. **Trust Building:** Visits `/about` to learn about the team
8. **Conversion:** Clicks "Contact Us" CTA → `/contact`
9. **Submission:** Fills form with project details, uploads brief PDF
10. **Confirmation:** Sees success message, receives email confirmation
11. **Next Step:** BI3 team responds within 24-48 hours

**Key Success Metrics:**
- Time on case study page > 2 minutes
- Contact form submission
- Low bounce rate from service page

---

### Journey 2: Gamer Discovering and Playing a Demo

**User:** 18-year-old gamer in Uzbekistan who heard about BI3's game

**Flow:**
1. **Entry:** Direct link from social media → `/demos/game-name`
2. **Landing:** Sees game hero, description, screenshots
3. **Engagement:** Watches gameplay trailer (embedded video)
4. **Play (Web):** Clicks "Play in Browser," WebGL game loads
5. **Play Session:** Plays for 5-10 minutes
6. **Mobile Interest:** Wants to play on phone, sees APK download
7. **Download:** Clicks APK download, saves file
8. **Follow-up:** Signs up for newsletter to get updates
9. **Social:** Shares game link on Telegram

**Key Success Metrics:**
- Web demo play initiated
- APK download count
- Newsletter signup
- Social shares

---

### Journey 3: Recruiter Evaluating the Team

**User:** Technical recruiter from a larger company exploring young talent

**Flow:**
1. **Entry:** LinkedIn link to BI3 website → `/`
2. **First Impression:** Notes professional design, views quick stats
3. **Team Research:** Navigates to `/about`
4. **Team Deep Dive:** Reviews each team member's profile
5. **Skills Validation:** Views individual GitHub links
6. **Work Quality:** Browses `/works`, opens 2-3 case studies
7. **Contact Intent:** Navigates to `/contact`
8. **Inquiry:** Submits contact form as "Partnership" inquiry
9. **Alternative:** Downloads team info or sends LinkedIn messages

**Key Success Metrics:**
- About page engagement
- Multiple case study views
- Contact form submission (partnership category)
- Outbound clicks to team social profiles

---

## Appendix: Trade-offs & Recommendations

### Trade-off 1: Advanced 3D Hero vs. Performance

**Options:**
- A) Full WebGL 3D interactive hero (Three.js, React Three Fiber)
- B) CSS-based animated gradient with subtle effects
- C) Static hero with Lottie micro-animations

**Recommendation:** Start with Option B or C for MVP. Lighthouse scores are critical for SEO and user experience. Add Option A as enhancement post-launch if performance can be maintained.

**Fallback:** If 3D is implemented, provide CSS fallback for low-power devices and respect prefers-reduced-motion.

### Trade-off 2: Full i18n vs. English-First Launch

**Options:**
- A) Launch with all 3 languages complete
- B) Launch English-only, add languages later
- C) Launch with English + Russian, add Uzbek later

**Recommendation:** Option C. English and Russian cover broader audience immediately. Uzbek can be added in Sprint 6 or post-launch. Architecture should support all 3 from day one.

### Trade-off 3: Custom CMS vs. Headless CMS

**Options:**
- A) Build custom admin panel
- B) Use Sanity (recommended)
- C) Use Strapi (self-hosted)

**Recommendation:** Option B (Sanity). Building custom CMS is unnecessary complexity for a small team. Sanity offers free tier, excellent DX, and real-time collaboration. Strapi is viable if self-hosting is preferred.

### Trade-off 4: Blog Comments

**Options:**
- A) No comments (simplest)
- B) Disqus integration
- C) Custom comments with moderation

**Recommendation:** Option A for launch. Comments require moderation effort. If community engagement is desired later, consider Option B or GitHub-based comments for technical posts.

### Trade-off 5: PWA Features

**Options:**
- A) Full PWA (offline, install prompt)
- B) Basic PWA (manifest, offline page)
- C) No PWA

**Recommendation:** Option B. Basic PWA is low effort and provides nice touches (app icon, themed status bar). Full offline support is overkill for portfolio site.

---

## Final Notes

This conception document provides a comprehensive foundation for building the BI3 website. The architecture is designed to be:

- **Modular:** Components can be built and tested independently
- **Scalable:** CMS-driven content allows easy updates
- **Accessible:** WCAG 2.1 AA compliance built-in
- **Performant:** Lighthouse 90+ achievable with discipline
- **Maintainable:** Clear patterns and documentation

The 6-sprint timeline is realistic for a motivated 4-person team with varying experience levels. The key is to ship an MVP early (after Sprint 3) and iterate from there.

**Remember:**
- Quality over quantity in the portfolio
- Performance is a feature
- Accessibility is non-negotiable
- Ship early, iterate often

---

**Document prepared for:** BI3 Team
**Date:** November 26, 2025
**Version:** 1.0
