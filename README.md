# 🚀 College Club Hub

<p align="center">
  <img src="logo.jpeg" alt="College Club Logo" width="160" height="auto">
</p>

<p align="center">
  <b>Learn • Build • Lead</b><br>
  A multi-page web application that brings all student clubs of Sitare University together in one place.
</p>

---

## 📌 Project Overview
* **Project Name:** College Club Hub
* **Institution:** Sitare University (Shri Ramswaroop Memorial University Campus, Lucknow)
* **Developed By:** Sweta, Viswamitra, Sumit
* **Faculty:** Muskan Katiyar
* **Difficulty Level:** Beginner (Semester 1 — Consistent Level)
* **Project Type:** Static multi-page website (HTML, CSS, JavaScript)

---

## 📖 Description
* College Club Hub is a dynamic and responsive multi-page web application designed for college student clubs (Coding, Music, Drama, Sports, Debate, and Art & Craft).
* Many students do not know which clubs exist on campus, when they meet, or how to join them. This project solves that by giving every club a single, easy-to-use platform.
* Describes the core mission, team members, office-bearers, and upcoming campus events of each club.
* Lets students explore clubs, read detailed club information in popups, check upcoming events, and register through a form.
* Serves as an interactive hub for student engagement and community building.
* Solves the challenge of scattered campus information by giving students one easy-to-use platform to discover active clubs, schedules, and how to join.

---

## ✨ Key Features
* **Announcement Ticker:** A scrolling `<marquee>` bar on the home page that shares the latest campus updates and registrations.
* **Hero Banner:** A full-width group photo with a welcome message and a "Join Clubs" call-to-action button.
* **Why Join Us Cards:** Four clickable cards (Meet New People, Learn & Grow, Share Ideas, Join Campus Events) that take the user to the Clubs page.
* **Upcoming Events Calendar:** Event cards with date, venue, timing, and a direct "Register Now" link.
* **Clubs Directory:** Responsive grid of club cards. Clicking a card opens a detailed popup modal.
* **Dedicated Coding Club Page:** Includes a decorative code terminal window, club statistics, technical learning tracks, and a roadmap of weekly and monthly sessions.
* **FAQ Accordions:** Expandable questions and answers built with HTML5 `<details>` and `<summary>`.
* **Contact Directory:** Student welfare office details, all 6 club coordinators with office hours and venues.
* **Registration Form:** A student club registration form with input validation.
* **Responsive Design:** The layout adjusts for desktop, tablet, and mobile screens.

---

## 🎭 Clubs Covered
* 💻 **Coding Club:** Full-stack web development, DSA and competitive coding, Git & GitHub, hackathons, and open-source project mentorship.
* 🎸 **Music Club:** Acoustic jamming, auditions, live band performances, and vocal and instrumental training sessions.
* 🎭 **Drama Club:** Street plays (Nukkad Natak), stage performances, and scriptwriting and acting workshops.
* 🏃 **Sports Club:** Inter-batch and inter-university sports tournaments, fitness conditioning camps, and regular team practice sessions.
* 🎙️ **Debate Club:** Parliamentary debates, MUN, Youth Parliament, and public speaking and extempore sessions.
* 🎨 **Art & Craft Club:** Painting, handmade crafts, art exhibitions, and DIY decor and campus mural workshops.

---

## 📅 Featured Upcoming Events
* **22 NOV 2026 — Youth Parliament & Art Expo** (Debate & Art Club) — Seminar Hall 2, 2:00 PM onwards
* **26 NOV 2026 — Acoustic Night & Street Play** (Music & Drama Club) — Main Auditorium, 5:00 PM onwards
* **29 NOV 2026 — 24-Hour Code-A-Thon Sprint** (Coding Club) — Computer Lab 1, 10:00 AM onwards

---

## 🗂️ File Structure & Architecture
* **`index.html` (Home Page):** Features the top announcement marquee ticker, hero banner with uncropped group photo (`group.jpeg`), why-join-us feature cards, and upcoming calendar events.
* **`about.html` (About & FAQ Page):** Dedicated section explaining the university ecosystem, student benefits, and interactive HTML5 `<details>` and `<summary>` FAQ accordions.
* **`club.html` (Clubs Directory):** Displays responsive grid cards for all active campus clubs with triggers for detailed popup modals.
* **`club-des.html` (Coding Club Page):** A specialized page dedicated to the Coding Club featuring a decorative code terminal window (`coding_club_hub.js`), statistics, and learning tracks.
* **`Contact.html` (Directory & Registration Form):** Lists official student welfare office details, all 6 club coordinators with office hours/venues, and a fully functional HTML5 student club registration form.
* **`app.js` (JavaScript Logic):** Manages dynamic DOM manipulation (`showClub()`, `closePopup()`) to populate and control the interactive modal popups.
* **`style.css` (Stylesheet):** Houses global layout rules, Flexbox and CSS Grid designs, responsive breakpoints, typography scaling, and smooth hover transition effects.

### 📁 Folder Tree
```text
College-Club-Hub/
├── index.html
├── about.html
├── club.html
├── club-des.html
├── Contact.html
├── app.js
├── style.css
├── logo.jpeg
├── group.jpeg
└── README.md
```

---

## 💻 HTML Requirements Implemented
* Semantic structural elements (`<header>`, `<nav>`, `<section>`, `<marquee>`, `<details>`, `<footer>`).
* Dedicated sections for About, Team Members / Office-Bearers with roles, Events, and Contact.
* Integration of official media assets (`logo.jpeg` and `group.jpeg`).
* Proper use of headings, lists, links, images, and form elements.

---

## 🎨 CSS Requirements Implemented
* Modern CSS Grid and Flexbox layouts for responsive card-style arrangements.
* Custom borders, clean padding/spacing, and drop-shadow styling.
* Interactive hover zoom and elevation (`transform: translateY`) effects on team and club cards.
* Consistent color theme, typography, and an active-link highlight in the navigation bar.

---

## ⚡ JavaScript Requirements Implemented
* Dynamic DOM element manipulation using `document.getElementById` and conditional logic to expand and view club/team details.
* Event listeners for modal popups, outside-click dismissal, and form submission validation.

---

## 🎯 Expected Features & Learning Outcomes
* **Expected Features:** Club intro, interactive member cards, expandable descriptions, and seamless navigation.
* **Learning Outcomes:** Implementation of semantic HTML lists/sections, Flexbox/Grid card layouts, conditional class toggling, and basic DOM event listeners.

---

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3
* **Scripting:** Vanilla JavaScript (ES6)
* **Version Control:** Git & GitHub Pages

---

## ▶️ How to Run the Project
1. Download or clone the project folder.
2. Make sure all files (`.html`, `.css`, `.js`, and images) are in the same folder.
3. Open `index.html` in any modern web browser (Chrome, Edge, Firefox).
4. Use the navigation bar to move between Home, About, Clubs, and Contact pages.

---

## 🙏 Acknowledgement
We extend our sincere gratitude to our faculty mentor **Muskan Katiyar** at **Sitare University**, for her continuous guidance, constructive feedback, and encouragement throughout the development of **College Club Hub**. We also thank our teammates and peers for their collaboration and support in bringing this project together.

---
© 2026 College Club Hub | Sitare University | Designed by Sweta & Team
