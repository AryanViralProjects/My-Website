# Instructions for Building a Personal Website

## 1. Overall Goal & Inspiration

*   **Objective:** Create a single-page personal website focused on introducing the user and linking to their blog/writing.
*   **Design Inspiration:** The website design should be heavily inspired by [https://f.inc/offseason](https://f.inc/offseason). Key characteristics to emulate are:
    *   Minimalist and modern aesthetic.
    *   Dark theme.
    *   Strong, impactful typography.
    *   Narrative-driven content flow.
    *   Clear call to action at the end.

## 2. Design & Styling Guidelines

*   **Theme:**
    *   **Background Color:** Dark (e.g., a near-black like `#111111` or pure black `#000000`).
    *   **Text Color:** Primarily white (`#FFFFFF`) or a light off-white/grey (e.g., `#F0F0F0` or `#EAEAEA`) for good contrast and readability.
*   **Accent Color:**
    *   Choose a single, striking accent color to be used sparingly for emphasis (e.g., main hero title, call-to-action buttons/links). This should contrast well with the dark background. *User to provide preference, or suggest a vibrant color like a deep red, electric blue, or warm gold.*
*   **Typography:**
    *   **Main Title (Hero Section):**
        *   Font: A large, impactful serif font (similar to the "Off Season" title).
        *   Color: Use the chosen accent color.
        *   Style: Should be the most prominent text element on the page.
    *   **Headings/Subheadings:**
        *   Font: Clean, modern sans-serif (e.g., Montserrat, Lato, Open Sans, Roboto).
        *   Weight: Bold or semi-bold.
        *   Color: White or light grey.
    *   **Body Text:**
        *   Font: Readable sans-serif, complementary to the heading font.
        *   Size: Ensure comfortable reading size (e.g., 16px-18px base).
        *   Line Height: Generous (e.g., 1.6 to 1.8) for readability.
        *   Color: White or light grey.
    *   **Links:**
        *   Style: Underlined by default for clear affordance.
        *   Color: White, or the accent color for primary call-to-action links.
*   **Layout:**
    *   **Structure:** Single-page, with content flowing vertically.
    *   **Alignment:** Primarily centered text for headings and narrative sections.
    *   **Spacing:** Ample whitespace (padding and margins) around sections and text blocks to maintain a clean, uncluttered look.
*   **Imagery:**
    *   One primary hero image. Ensure it's high quality.
    *   Apply a subtle dark overlay or a duotone filter to the hero image to help text stand out and integrate with the dark theme.

## 3. Website Sections & Content Structure

### Section 1: Hero Section

*   **Background:**
    *   A full-width, high-quality personal image provided by the user. This could be:
        *   A professional photo of the user.
        *   A photo of their workspace or an environment that inspires them.
        *   An abstract image symbolic of their passion or work.
    *   The image should have a dark overlay or filter applied.
*   **Text Elements (Overlaid on Image):**
    *   **Main Title:** The user's name or a compelling personal motto/tagline (e.g., "[User's Name]", "Innovate. Create. Inspire.", "Driven by [User's Core Passion]").
        *   Style: Use the large, impactful serif font in the accent color.
    *   **(Optional) Subtitle:** A brief, one-sentence description of who the user is or their primary mission (e.g., "Software Developer | Writer | Lifelong Learner").
        *   Style: Smaller sans-serif font, white color.

### Section 2: Introduction / My Journey (Narrative Style)

*   **Purpose:** To tell a concise story about the user, highlighting key moments or philosophies that have shaped them. Mimic the "data points" style of the reference site but personalize it.
*   **Content:**
    *   Begin with a captivating introductory paragraph (2-3 sentences) about the user's core philosophy, driving passion, or what they believe in.
    *   Follow with 2-4 "chapters" or "milestones" from their personal or professional life. Each should include:
        *   **Identifier:** A year, a title for the period, or a key theme (e.g., "**2020 - The Turning Point**", "**University - Discovering My Path**", "**The First Project - Lessons in Resilience**"). Make this bold.
        *   **Narrative:** A short (2-4 sentences) description of a significant experience, challenge, learning, or achievement during that period.
        *   **(Optional) Outcome/Realization:** A brief concluding thought on what was gained or realized (e.g., "Result: Uncovered a deep interest in [Field]", "Lesson: True growth comes from facing challenges head-on.").
*   **Style:** Clean sans-serif body text. Ensure paragraphs are well-spaced.

### Section 3: Current Focus / What I Do

*   **Purpose:** To briefly state what the user is currently engaged in or passionate about.
*   **Content:**
    *   A short transitional sentence leading into this section.
    *   Clearly state their main area(s) of work, study, or passion (e.g., "Currently, my focus is on [Main Activity/Field 1], with a keen interest in exploring [Secondary Interest/Field 2]. I also dedicate time to [Hobby/Side Project].").
    *   This can be a short paragraph or 2-3 concise bullet points if preferred.
*   **Style:** Clear heading for the section (e.g., "My Focus", "What I'm Working On", "Current Endeavors").

### Section 4: My Writing / Blog (Call to Action)

*   **Purpose:** To direct visitors to the user's blog or writing platform. This is the primary call to action.
*   **Content:**
    *   An inviting sentence or two (e.g., "I believe in sharing knowledge and stories. You can find more of my thoughts, insights, and explorations on my blog.", "For a deeper dive into my work and reflections, please visit my writings.").
    *   A prominent link or button with clear text. Examples:
        *   "Read My Blog"
        *   "Explore My Writing"
        *   "Visit [User's Name]'s Articles"
    *   This link MUST lead to the user's blog URL.
*   **Style:** Make this section and the call-to-action link visually distinct. The button/link could use the accent color for emphasis.

### Section 5: Footer (Optional, but Recommended)

*   **Content:**
    *   A simple copyright notice (e.g., "© [Current Year] [User's Name]").
    *   **(Optional)** Links to 2-3 key social media profiles (e.g., LinkedIn, GitHub, Twitter/X, Portfolio). These can be small icons or subtle text links.
*   **Style:** Keep the footer understated – smaller font size, less prominent color (e.g., a darker grey than the main body text).

## 4. Technical Considerations (for Claude)

*   **Stack:** Use HTML5, CSS3. JavaScript can be used for subtle enhancements (e.g., smooth scrolling for single-page navigation, minor non-intrusive animations) but is not essential for the core design.
*   **Responsiveness:** The website MUST be fully responsive and provide an optimal viewing experience on desktop, tablet, and mobile devices. Use fluid layouts, flexible images, and media queries.
*   **Performance:** Optimize images for the web to ensure fast loading times. Minify CSS and JS if applicable.
*   **Accessibility (A11y):**
    *   Ensure sufficient color contrast between text and background.
    *   Use semantic HTML tags.
    *   Provide `alt` text for all meaningful images (especially the hero image).
    *   Ensure keyboard navigability.
*   **Browser Compatibility:** Ensure compatibility with modern web browsers (Chrome, Firefox, Safari, Edge).

## 5. Content & Assets to be Provided by the User

Claude will need the following from the actual user to populate the website:

1.  **Hero Image:** The main background image for the top section.
2.  **Hero Title Text:** Their name or personal motto.
3.  **(Optional) Hero Subtitle Text.**
4.  **Accent Color Preference:** If they have one.
5.  **"My Journey" Content:**
    *   Introductory paragraph.
    *   Details for 2-4 personal "chapters" (Identifier, Narrative, Outcome/Realization).
6.  **"Current Focus" Content:** Paragraph or bullet points describing their current activities.
7.  **"My Writing" CTA Text:** Preferred text for the blog link/button.
8.  **Blog URL:** The direct link to their blog or writing page.
9.  **(Optional) Social Media Links:** URLs for any profiles to be included in the footer.
10. **(Optional) Specific Font Preferences:** If they have any, otherwise Claude can choose suitable ones based on the style guide.

---

This Markdown file should provide a comprehensive guide for Claude to create the personal website with the desired aesthetic and structure.
