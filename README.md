# NITA Essentials

A student-driven resource hub designed to help NIT Agartala students make informed decisions throughout their college journey.

<<<<<<< HEAD
## 🚀 Project Overview

When I first joined college, I was often confused about many practical aspects of student life:
=======
## Objective

When I first joined college, I was often confused about many practical aspects of student life:

>>>>>>> 9e39449121b57d13e77bd3520ce0a2d332980d43
* What books and academic materials should I follow?
* Which gadgets, stationery, and hostel essentials are actually worth buying?
* What resources can help me perform better academically?
* What sports and extracurricular items are useful?
* What mistakes should I avoid during college?

Most of this information was scattered across conversations with seniors, friends, and online sources. Over time, I learned what worked, what didn't, and what I wish I had known earlier.

<<<<<<< HEAD
**NITA Essentials** was created to bring all of that knowledge together in one place, helping students save time, avoid unnecessary expenses, and make better decisions throughout their college life. Instead of searching through multiple sources or relying solely on word-of-mouth advice, students can access curated recommendations and practical guidance in a centralized, easy-to-use website.

---

## 📸 Preview

Here is a glimpse of the NITA Essentials platform:

<div align="center">
  <img src="./icon/1.png" alt="Preview 1" width="48%" style="margin: 1%;">
  <img src="./icon/2.png" alt="Preview 2" width="48%" style="margin: 1%;">
  <img src="./icon/3.png" alt="Preview 3" width="48%" style="margin: 1%;">
  <img src="./icon/4.png" alt="Preview 4" width="48%" style="margin: 1%;">
</div>

---

## 📂 Project Structure & File Explanations

The project is built using HTML, CSS, and Vanilla JavaScript. We have intentionally kept the tech stack simple and modular to make it highly accessible for students to contribute.

Here is the current directory structure and a detailed explanation of what each file does:

```text
nita-essentials.github.io-main/
│
├── index.html          # The landing page. Introduces the platform's objective and provides quick navigation to all main categories.
├── about.html          # The about page. Details the story behind NITA Essentials, why it was created, and its core mission.
├── academics.html      # Study-related resources. Includes links to PYQs, syllabus copies, YouTube channels, and essential tools like calculators.
├── essentials.html     # Core recommendations page. Lists tried-and-tested gadgets, hostel items, and supplements used by actual students.
├── projects.html       # A showcase portal. Features web apps, tools, and research projects built by NITA students to encourage campus innovation.
├── sports.html         # Extracurricular guide. Holds gear recommendations for clubs like Hoopers NITA (Basketball) and general sports like Badminton.
├── tips.html           # Practical advice. Covers everything from hostel survival (padlocks, power banks) to placement tips (LeetCode, CGPA).
├── contribute.html     # Contribution guide. Provides a step-by-step tutorial on how students can fork the repo, make changes, and submit PRs.
│
├── footer.html         # A modular HTML component containing the website's footer. It is fetched and injected dynamically into every page.
├── notices.js          # A custom JavaScript file responsible for handling dynamic announcements and alerts across the platform.
│
├── css/
│   └── styles.css      # The global stylesheet. Controls the responsive layout, modern aesthetics, and typography for the entire site.
│
└── icon/               # Assets directory. Contains web app manifests, favicons, and preview screenshots used in this README.
```

---

## ✨ Features & Functionality

* **Comprehensive Resource Hub:** Curated lists spanning academics, hostel essentials, sports, projects, and general college tips.
* **Modular Design:** Uses reusable components (like `footer.html`) for easier maintenance.
* **Dynamic Content:** A custom `notices.js` script to handle and display the latest announcements seamlessly.
* **Responsive Layout:** Clean, accessible styling provided by `styles.css` ensuring a good experience on both desktop and mobile.
* **Community Driven:** An open invitation for students to contribute, correct, and add new resources.

---

## 🗺️ Website Structure & Navigation

The platform is divided into several key sections to help you find exactly what you need. Here's a detailed breakdown of what each page offers:

### 📚 Academic Resources (`academics.html`)
* **First-Year Essentials:** Access "God Level" resources like Sombaba Notes and the BS-MS Resource Hub for notes, books, and PYQs (Previous Year Questions).
* **Branch-Specific 2nd-Year Materials:** Dedicated folders for ECE, Civil, CSE, Mechanical, and BioTech containing PYQs and semester-wise study materials.
* **Online Platforms:** Links to crucial learning platforms like takeuforward (for Data Structures and Algorithms), NPTEL for core lectures, and Buddy4Study for scholarships.
* **Tools & Equipment:** Advice on physical tools needed for coursework, such as scientific calculators (Casio FX-82MS), mini drafters, and drawing boards.

### 🛒 Essential Purchases (`essentials.html`)
* **Gadgets:** Recommendations on tried-and-tested laptops (e.g., Lenovo LOQ) for coding and gaming, budget-friendly earphones (Samsung EHS64, boAt), and wireless earbuds (Nothing Ear Buds Pro 2).
* **Supplements & Groceries:** Budget-friendly protein options like Alpino Peanut Butter and Yogabar Oats for fitness enthusiasts.
* **Daily Use & Academics:** Recommendations for table lamps for late-night studying and reliable sports footwear (Asian, Campus) for regular campus wear.

### 🏃 Sports & Extracurriculars (`sports.html`)
* **Basketball (Hoopers NITA):** Essential gear recommendations for joining the campus basketball club, from budget-friendly Nivia Combat shoes to proper moisture-wicking jerseys and sports socks.
* **Badminton:** Guidance on beginner-friendly rackets and court-specific shoes to prevent injuries.
* *More sports gear guides will be added through community contributions.*

### 💡 College Tips (`tips.html`)
* **Hostel Life:** Immediate necessities (buy a padlock on day one), navigating power cuts (power banks and torches), and joining the "Buy & Sell NITA" WhatsApp group to score second-hand essentials.
* **Academics & Exams:** Why you shouldn't skip labs, the importance of PYQs for exams, and why wearing an analog watch to exams is a lifesaver.
* **Placements & Internships:** Early actionable advice: start LeetCode in your 1st year, build projects in your 2nd year, create a LinkedIn profile early, and maintain an 8.5+ CGPA.
* **Productivity:** Avoiding burnout by protecting your sleep schedule, learning to say "NO," and maximizing the first two weeks of the semester.

### 🛠️ Projects (`projects.html`)
* **Student Showcases:** Explore web apps, tools, and research created by NITA students.
* **Featured Projects:** Includes tools like the "NITA Faculty Directory" data extraction web app.
* **Submission Portal:** A place to submit your own side projects, coursework implementations, or open-source contributions for campus recognition.

---

## 🤝 How to Contribute

NITA Essentials is a community-driven project, and contributions from students are always welcome. Help us keep the information accurate, up-to-date, and useful for everyone!

### Contribution Guidelines
1. **Fork the repository** to your own GitHub account.
2. **Create a new branch** for your feature or fix (`git checkout -b feature/AddNewResource`).
3. **Make your changes** in the appropriate HTML files.
4. **Commit your updates** with clear, descriptive messages.
5. **Push to your branch** and **Open a Pull Request**.

### Contribution Policy
* Anyone can submit a Pull Request.
* Every contribution will be reviewed before acceptance.
* Contributions may be modified or rejected if they contain inaccurate, promotional, or low-quality information.

For more details, check out the [`contribute.html`](contribute.html) page on the live site.

---

## 🔮 Future Roadmap

* Expand academic resources across all departments.
* Add more student-contributed recommendations and projects.
* Implement a search functionality for faster navigation.
* Create department-specific and year-specific guides.
* Enhance the UI/UX with modern design elements and dark mode.
=======
**NITA Essentials** was created to bring all of that knowledge together in one place, helping students save time, avoid unnecessary expenses, and make better decisions throughout their college life.

---

## What You'll Find Here

### 📚 Academic Resources

* Recommended books and study materials
* Subject-wise resources
* Useful websites and online learning platforms
* Productivity tools and software
* Academic guidance and tips

### 🛒 Essential Purchases

* Hostel essentials
* Stationery recommendations
* Electronics and gadgets
* Daily-use college items
* Budget-friendly buying suggestions

### 🏃 Sports & Extracurriculars

* Sports equipment recommendations
* Fitness-related resources
* Club and activity-related suggestions

### 💡 College Tips

* Things every student should know
* Common mistakes to avoid
* Time-management advice
* Productivity strategies
* Practical lessons learned from experience

---

## Best Way to Use NITA Essentials

This platform is intended to serve as a reference guide throughout your college journey.

You can:

1. Explore recommendations before making purchases.
2. Discover useful academic resources.
3. Learn from experiences shared by students.
4. Find practical solutions to common college-life problems.
5. Contribute your own knowledge to help future students.

Whether you're a first-year student or approaching graduation, there is likely something useful here for you.

---

## Why This Project Exists

The goal is simple:

> Help students spend less time figuring things out and more time learning, building, exploring, and enjoying college life.

Instead of searching through multiple sources or relying solely on word-of-mouth advice, students can access curated recommendations and practical guidance in one place.

---

## Contributing

NITA Essentials is a community-driven project, and contributions from students are always welcome.

You can contribute by:

* Adding useful resources
* Suggesting better alternatives
* Sharing college-life tips
* Correcting outdated information
* Improving website functionality
* Enhancing documentation

### Contribution Policy

To maintain the quality and reliability of the information provided:

* Anyone can submit a Pull Request.
* Every contribution will be reviewed before acceptance.
* Contributions may be modified, requested for revision, or rejected if they contain inaccurate, misleading, outdated, promotional, or low-quality information.
* Acceptance of contributions is subject to verification by the maintainers.

This review process ensures that students receive trustworthy and useful recommendations.

### How to Contribute

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Commit your updates.
5. Open a Pull Request.
6. Wait for review and verification.

Once verified, your contribution may be merged into the project.

---

## Affiliate Disclosure

Some links on NITA Essentials may be affiliate links.

This means that if you purchase a product through one of these links, NITA-Essential earns a small commission at **no additional cost to you**.

The commissions earned help:

* Maintain and improve the website.
* Add new resources and recommendations.
* Cover operational and development expenses.
* Support my educational expenses, including tuition fees.

### Commitment to Honest Recommendations

Products and resources featured on this platform are included because they have been personally used, researched, recommended by students, or found genuinely useful during college life.

Affiliate commissions do **not** determine which products are recommended.

The primary goal of this platform is to help students make informed decisions and avoid unnecessary purchases.

Every purchase made through an affiliate link helps sustain this project and supports my education while allowing the platform to remain freely accessible to all students.

---

## Disclaimer

The recommendations, opinions, and experiences shared on this website are based on personal experience, research, and community contributions.

Students should use their own judgment before making purchasing, academic, or personal decisions.

Individual needs and preferences may vary.

---

## Future Goals

* Expand academic resources across departments.
* Add student-contributed recommendations.
* Improve search and navigation.
* Create department-specific guides.
>>>>>>> 9e39449121b57d13e77bd3520ce0a2d332980d43
* Build a larger community knowledge base for NIT Agartala students.

---

<<<<<<< HEAD
## ⚖️ Affiliate Disclosure

Some links on NITA Essentials may be affiliate links. If you purchase a product through one of these links, NITA-Essential earns a small commission at **no additional cost to you**.

The primary goal of this platform is to help students make informed decisions. Affiliate commissions do **not** determine which products are recommended; everything featured here is based on personal experience, student recommendations, and utility. These commissions help maintain the website and cover development and educational expenses.

---

## 📄 License
=======
## License
>>>>>>> 9e39449121b57d13e77bd3520ce0a2d332980d43

This project is open-source and available under the GPL 2.0 License.

---

<<<<<<< HEAD
## ❤️ Built by Students, for Students
=======
## Built by Students, for Students ❤️
>>>>>>> 9e39449121b57d13e77bd3520ce0a2d332980d43

If NITA Essentials helps you, consider contributing to make it even better for future students.
