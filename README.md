# Thaveedhu Raja | Freelance Video Editor Portfolio

A modern, minimal, and premium freelance video editing portfolio website for **Thaveedhu Raja**, built with **React**, **Vite**, and clean modern CSS.

Designed with a pure white (#FFFFFF) aesthetic, light-black (#333333) accents, elegant typography, generous whitespace, and responsive video playback.

---

## 🌟 Portfolio Highlights

* **Personal Freelancer Representation:** Tailored exclusively as an individual freelance editor, not an agency.
* **Color Palette:**
  * Background: Pure White (`#FFFFFF`)
  * Buttons: Light Black (`#333333`) with hover elevation
  * Button Text: White (`#FFFFFF`)
  * Main Text: Almost Black (`#111111`)
  * Secondary Text: Neutral Gray (`#777777`)
* **Hero Section:** "Turning Ideas Into Motion", freelance status indicator, 2 Years Experience badge, and direct CTAs.
* **Portfolio Showcase:** 3 video cards with play button overlays, 16:9 aspect ratio preservation, hover scrub/preview, and an interactive cinema lightbox modal with seek controls, mute/unmute, and fullscreen.
* **About Section:** Details experience (2 Years), location (Tirunelveli, India), and primary editing suite (DaVinci Resolve).
* **Skills Section:** 3 minimal cards detailing Storytelling, Sound Design, and Color Grading with key techniques.
* **Contact Section:** "Have a Project in Mind?", "Contact Me" and "Let's Talk" buttons, editable placeholders with instant clipboard copy and an inline customization mode saved to local storage.
* **Navigation Bar:** Fixed clean header with active section tracking, smooth scrolling, and mobile hamburger drawer.
* **Footer:** Minimal copyright and location attribution.
* **Responsiveness:** 100% responsive across mobile, tablet, and desktop viewports.

---

## 📂 Project Structure

```
d:/portfolio/
├── public/
│   └── videos/
│       ├── video1.mp4   # Nature & Color Grading Showcase
│       ├── video2.mp4   # Storytelling & Narrative Pacing
│       └── video3.mp4   # Sound Design & Urban Motion
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Header & responsive mobile menu
│   │   ├── Hero.jsx         # Hero section & freelance introduction
│   │   ├── Portfolio.jsx    # Video projects grid
│   │   ├── VideoModal.jsx   # Cinema video lightbox player
│   │   ├── About.jsx        # Freelance background & credentials
│   │   ├── Skills.jsx       # Storytelling, Sound Design, Color Grading
│   │   ├── Contact.jsx      # Contact channels & editable placeholders
│   │   └── Footer.jsx       # Minimal footer
│   ├── App.jsx              # Main page assembly
│   ├── index.css            # Pure white design system & typography
│   └── main.jsx             # React root mount
├── index.html               # Meta tags & Google Font (Plus Jakarta Sans)
├── package.json
└── vite.config.js
```

---

## 🚀 Quick Start

### 1. Development Mode
To start the live development server with hot reload:
```bash
npm run dev
```

### 2. Production Build & Preview
To build for production and launch the preview server:
```bash
npm run build
npm run preview
```
The preview runs locally at `http://localhost:4173/`.

---

## 🎬 How to Replace Videos with Your Own Edits

1. Place your exported video files inside `public/videos/`:
   * Rename them or keep:
     * `public/videos/video1.mp4`
     * `public/videos/video2.mp4`
     * `public/videos/video3.mp4`
2. If you want to customize titles, descriptions, or tags for each video, open `src/components/Portfolio.jsx` and edit the `videoProjects` array.

---

## 📬 Contact Placeholders

The portfolio comes with editable placeholders for:
* **Email:** `[your.email@example.com]`
* **Instagram:** `[@your_instagram_handle]`
* **WhatsApp:** `[+91 XXXXX XXXXX]`

Visitors or the portfolio owner can click the **"Edit Placeholders"** button directly on the website to input real details, which are automatically preserved on the device.
