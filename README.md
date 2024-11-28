# **Playwright Practice Automation Framework**

This project is a demonstration of a robust automation framework built with [Playwright](https://playwright.dev/) for end-to-end testing. It includes advanced features, CI/CD integration, and is designed to follow best practices for Senior Software Development Engineers in Test (SDET).

---

## **Goals Achieved**
As a Senior SDET, the following goals have been accomplished in this project:

1. **Robust Test Framework**:
   - Developed an organized and scalable test framework using Playwright.
   - Structured the tests into specific test suites (e.g., login and cart functionality).

2. **Environment Configuration**:
   - Implemented `.env` files to manage environment-specific variables securely.
   - Integrated with GitHub Actions using **Secrets** to securely inject sensitive data.

3. **Continuous Integration (CI)**:
   - Configured a GitHub Actions pipeline to automate tests on:
     - Pushes directly to the `master` branch.
     - Pull requests targeting the `master` branch.
   - Enabled **manual execution** of tests for feature branches via the `workflow_dispatch` trigger.

4. **HTML Reporting**:
   - Integrated Playwright's HTML reporting for detailed test results.
   - Configured the reports to be generated in `output/playwright-report/`.

5. **Error Resilience**:
   - Added steps to handle missing dependencies in CI environments (`npx playwright install-deps`).

6. **Custom Scripts**:
   - Created `package.json` scripts for simplified test execution and debugging.

---

## **Execution Options**

### **1. Running Tests Locally**

#### **Manual Execution**
Run tests locally using the scripts in `package.json`:

- Run all tests:
  ```bash
  npm test

---

## **CI Execution**

- **Automatic Triggers**:
  1. On push to `master`.
  2. On pull request to `master`.

- **Manual Trigger**:
  1. Navigate to the **Actions** tab in the GitHub repository.
  2. Select **“Playwright Tests”**.
  3. Click **Run workflow**, choose the desired branch, and execute.

---

## **Future Enhancements**

1. **Slack Notifications**:
   - Automate sending test results (HTML report links) to a Slack channel.
   - Include pass/fail summary, branch name, and execution time.

2. **Test Parallelization**:
   - Reduce execution time by running tests in parallel.

3. **Dynamic Environment Support**:
   - Expand `.env` configuration to handle multiple environments (e.g., staging, production).

4. **Enhanced Reporting**:
   - Generate additional summary reports (e.g., JUnit, JSON) for broader integration.

5. **Failure Insights**:
   - Capture screenshots and stack traces for failed tests automatically.