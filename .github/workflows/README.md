# Modern QA Automation Framework (TypeScript & Playwright)

[![Playwright Tests Portfolio CI](https://github.com)](https://github.com)

A production-grade, enterprise-ready E2E test automation framework built using **Playwright** and **TypeScript**. This project serves as a showcase of modern software engineering principles applied to quality assurance, completely bypassing fragile UI practices in favor of resilient, maintainable design.

## 🚀 Key Architectural Pillars

* **Strict Zero-CSS Locators:** Elements are located exclusively via user-centric accessibility roles (`getByRole`, `getByLabel`, `getByText`). No raw CSS classes or brittle XPaths are used, ensuring tests mirror real user behavior and withstand layout redesigns.
* **Page Object Model (POM):** Scalable separation of concerns. Page structures, fields, and action mechanics are isolated within clean class files under `Pages/`, keeping test scripts clean and declarative.
* **Data-Driven Testing (DDT):** Utilizes an independent JSON data schema to loop multiple credential variations through a single test engine.
* **Visual Regression Assurances:** Pixel-by-pixel layout checking via baseline snapshot comparisons across distinct engines.
* **CI/CD Cloud Automation:** Fully integrated with GitHub Actions. Every push or pull request automatically triggers a headless test run across multiple browser engines inside an isolated Linux runner environment.
* **Flakiness Mitigation:** Configured with robust action timeouts, automatic retries, and comprehensive post-failure artifact gathering (Traces, Screenshots, Videos) for elite root-cause debugging.

---

## 🛠️ Technology Stack & Dependencies

* **Language:** TypeScript (Strict Typing enforced)
* **Test Runner:** Playwright Test
* **Browsers Evaluated:** Chromium (Chrome), Firefox, WebKit (Safari engine)
* **CI/CD Platform:** GitHub Actions

---

## 📁 Repository Structure Overview

```text
playwright/
├── .github/workflows/
│   └── playwright.yml       # Cloud CI pipeline configuration
├── Pages/
│   ├── LoginPage.ts         # Authentication component object
│   └── FormPage.ts          # Form registration component object
├── tests/
│   ├── login.spec.ts        # Authentication test verification scenarios
│   └── ecommerce.spec.ts    # Form submission validation scenarios
├── playwright.config.ts     # Global configuration, timeouts, and multi-browser matrix
└── package.json             # Dependencies and shortcut script definitions
```

---

## 💻 Local Setup & Execution Instructions

Follow these instructions to clone, install, and execute the test suites locally on your machine.

### 1. Prerequisites
Ensure you have **Node.js (LTS)** installed on your operating system.

### 2. Installation
Clone the repository and install all required framework packages and browser binary engines:
```bash
# Clone the portfolio repository
git clone https://github.com
cd playwright

# Install project dependencies
npm install

# Install Playwright browser executables
npx playwright install
```

### 3. Execution Commands
Run the automation suites using the following terminal shortcuts:

```bash
# Run all tests headlessly across all projects (Chromium, Firefox, WebKit)
npx playwright test

# Run a specific test file visually in headed mode (e.g., Form Validation)
npx playwright test ecommerce.spec.ts --project=chromium --headed

# Run a specific test file visually (e.g., Login Authentication)
npx playwright test login.spec.ts --project=chromium --headed

# View the last compiled interactive HTML test report
npx playwright show-report
```
