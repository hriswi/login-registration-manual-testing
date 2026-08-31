# Test Plan – Login & Registration Testing Project

## 1. Project Overview
This is a simple **Login and Registration web application** built for practicing and
demonstrating **Manual QA Testing** skills. It has three pages: Registration, Login,
and Dashboard. The purpose of this document is to describe what will be tested,
how it will be tested, and what is out of scope.

## 2. Objective
The objective of this testing effort is to:
- Verify that Registration and Login work correctly with valid data.
- Verify that proper error messages appear for invalid/empty inputs.
- Verify UI elements (buttons, links, password visibility toggle) work as expected.
- Verify that a user can log out and cannot access the Dashboard without logging in.
- Identify and report any bugs/defects found during testing.

## 3. Scope

### In Scope
- Registration page (Name, Email, Password, Confirm Password, Register button)
- Login page (Email, Password, Login button, Forgot Password link)
- Dashboard page (welcome message, Logout button)
- Basic UI and navigation checks
- Field validation (empty fields, invalid email, short password, password mismatch)

### Out of Scope
- Performance testing / load testing
- Security testing (penetration testing, SQL injection attacks, etc.)
- Automated testing (this project is 100% manual testing)
- Cross-browser/cross-device compatibility testing (tested only on Chrome/desktop)
- Real email sending for "Forgot Password" (not implemented in this simple app)
- Database/server-side testing (this app uses browser localStorage only, no real backend)

## 4. Test Approach
All testing will be done **manually** using the Chrome browser by:
1. Reading the requirements/features of each page.
2. Writing test scenarios and detailed test cases.
3. Executing each test case step by step.
4. Recording the actual result and marking status as Pass/Fail.
5. Logging a Bug Report for every failed test case.

## 5. Test Environment
| Item | Details |
|---|---|
| Application Type | Static Web Application (HTML, CSS, JavaScript) |
| Browser Used | Google Chrome (latest version) |
| Operating System | Windows 10/11 |
| Data Storage | Browser localStorage (no real database) |
| Test Type | Manual Functional & UI Testing |

## 6. Features to be Tested
1. User Registration
2. User Login
3. Field-level Validations
4. Password Show/Hide Toggle
5. Forgot Password link
6. Dashboard access control (only logged-in users can view it)
7. Logout functionality
8. Basic navigation between pages

## 7. Entry Criteria
- The application (Registration, Login, Dashboard pages) is built and accessible in the browser.
- Test cases are written and reviewed.

## 8. Exit Criteria
- All planned test cases have been executed.
- All identified bugs have been logged with clear steps to reproduce.
- Test Execution Report is completed and shared.

## 9. Roles
| Role | Name |
|---|---|
| Developer & Tester | [Your Name] – MCA Student |

## 10. Deliverables
- Test Plan (this document)
- Test Scenarios
- Test Cases
- Bug Reports
- Test Execution Report
