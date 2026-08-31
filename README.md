# Login & Registration Testing – Manual QA Portfolio Project

## 1. Project Overview
This is a simple **Login and Registration web application**, built specifically as a
**Manual QA Testing portfolio project** by an MCA student applying for a QA Testing
internship. The goal of this project is not to showcase advanced development skills,
but to demonstrate the **complete manual testing process**: writing a test plan,
test scenarios, test cases, executing them, and reporting bugs — exactly like a
real QA tester would do on a small feature.

The application itself is intentionally kept very simple (plain HTML, CSS, and
JavaScript) so that all the focus stays on the **QA/testing work** in the `/QA` folder.

## 2. Features
- **Registration Page** – Name, Email, Password, Confirm Password, Register button
- **Login Page** – Email, Password, Login button, Forgot Password link
- **Dashboard Page** – Simple welcome screen shown only after a successful login
- **Logout** – Ends the session and returns the user to the Login page
- Basic client-side validation (empty fields, password length, password match, etc.)
- Password show/hide ("eye") icon on password fields

## 3. Technology Used
| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (plain, no framework) |
| Logic | Vanilla JavaScript (no libraries/frameworks) |
| Data Storage | Browser `localStorage` (acts as a simple fake "database") |

**Note:** There is no real backend server, database, or authentication framework
used in this project on purpose — it is meant to stay simple and 100% explainable
by a beginner.

## 4. How to Run the Project
1. Download/clone this project folder.
2. Open the folder on your computer.
3. Double-click `index.html` to open it directly in your browser (Chrome recommended).
4. That's it — no installation, no server, no build steps required.

**Suggested flow to try it out:**
1. Open `index.html` (Login page) → click "Register here"
2. Fill the Registration form and click Register
3. You'll be taken back to the Login page → log in with the same email/password
4. You will land on the Dashboard page showing a welcome message
5. Click Logout to end the session

## 5. Testing Performed
All testing on this project was done **manually** (no automation tools like
Selenium were used). The complete QA documentation is available inside the
`/QA` folder:

| File | Description |
|---|---|
| `QA/01_Test_Plan.md` | What will be tested, scope, and approach |
| `QA/02_Test_Scenarios.md` | High-level list of test scenarios |
| `QA/03_Test_Cases.md` | Detailed, step-by-step test cases |
| `QA/04_Bug_Reports.md` | Bugs found during testing, with steps to reproduce |
| `QA/05_Test_Execution_Report.md` | Final summary of pass/fail results |

## 6. Numbers
- **Total Test Cases Written & Executed:** 30
- **Passed:** 24
- **Failed:** 6
- **Total Bugs Found & Logged:** 5

## 7. What I Learned
- How to write a simple **Test Plan** before starting testing.
- The difference between a **Test Scenario** (what to test, high level) and a
  **Test Case** (exact steps, data, and expected result).
- How to write clear, reproducible **Bug Reports** that a developer could actually
  act on (steps to reproduce, expected vs actual result, severity, priority).
- The difference between **Severity** (how bad the bug is) and **Priority**
  (how urgently it should be fixed).
- How to test not just the "happy path" (valid data) but also negative/edge cases
  (empty fields, invalid formats, mismatched passwords, browser back-button behavior).
- How small, realistic bugs (like a copy-pasted click handler or a loose validation
  pattern) can slip into real applications — and how a QA tester's job is to catch
  these before the user does.

## 8. Disclaimer
This is a **personal/academic project** built to practice and demonstrate manual
QA testing skills. It is not a production application and does not claim any
professional/industry experience.
