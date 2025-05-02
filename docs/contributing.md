# Contributing to `delta-cypress-automation`

Thank you for (hypothetically) contributing to this Cypress test suite for Delta.com. Please (hyporthetically) follow the guidelines below to ensure consistency, test quality, and CI compatibility.

---

## 📦 Environment Setup

### 1. Fork and Clone

    
    ```bash
    git clone https://github.com/your-username/delta-cypress-automation.git
    cd delta-cypress-automation
    ```

### 2. Install Dependencies

    
    ```bash
    npm ci
    ```

### 3. Create a Branch

    
    ```bash
    git checkout -b feature/my-new-test
    ```

---

## 🧪 Test Development Guidelines

### Folder Structure

    
    ```text
    cypress/
    ├── fixtures/             → test data (e.g., flightData.json)
    ├── support/              → shared commands, custom functions
    ├── e2e/
    │   ├── page_objects/     → POM files (e.g., HomePage.ts)
    │   └── tests/            → Cypress specs (*.cy.ts)
    ```

### Best Practices

- ✅ Use the **Page Object Model (POM)** to encapsulate selectors & actions  
- ✅ Extract repeatable logic into `support/commands.ts`  
- ✅ Use `data-testid` selectors instead of brittle CSS or XPath  
- ✅ Avoid `cy.wait()`; prefer `.should()` or `cy.intercept()`  
- ✅ Keep tests atomic and reset state with `beforeEach()`  
- ✅ Use `cy.session()` or `cy.clearCookies()` to isolate tests  
- ✅ Store test data in `cypress/fixtures/`

---

## 🧹 Code Linting & Type Checking

Run the following before committing changes:

    
    ```bash
    npx tsc --noEmit
    npm run lint
    ```

---

## 🚀 Running Tests

Validate locally before submitting your work:

    
    ```bash
    npm run cy:run    # Headless mode
    npm run cy:open   # Interactive mode
    ```

---

## 📤 Submitting a Merge Request

1. Push your feature branch:

    
    ```bash
    git push origin feature/my-new-test
    ```

2. Open a Merge Request and include:

    - ✅ Clear title and description  
    - ✅ Screenshots or test video (if applicable)  
    - ✅ Reference to any related manual test cases (from `Manual_Test_Scripts.md`)  
    - ✅ Description of test purpose and scope  

---

## 🔍 Review Checklist

- [ ] Test is isolated and repeatable  
- [ ] Page Object or custom command added (if needed)  
- [ ] Cypress test runs pass locally and in GitLab CI  
- [ ] No hardcoded waits or selectors  
- [ ] Manual test mapping updated (if applicable)  
- [ ] Types and linter pass with `npx tsc --noEmit`  

---

## 🙌 Thank You
