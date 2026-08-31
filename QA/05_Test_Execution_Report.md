# Test Execution Report – Login & Registration Testing Project

## 1. Summary

| Metric | Count |
|---|---|
| Total Test Cases | 30 |
| Passed | 24 |
| Failed | 6 |
| Blocked | 0 |
| Not Executed | 0 |
| Total Bugs Found | 5 |
| Pass Percentage | 80% |

## 2. Test Execution Result Table

| TC ID | Test Scenario (short) | Status | Linked Bug |
|---|---|---|---|
| TC-01 | Valid registration | Fail | BUG-05 |
| TC-02 | Empty Name | Pass | - |
| TC-03 | Empty Email | Pass | - |
| TC-04 | Empty Password | Pass | - |
| TC-05 | Empty Confirm Password | Pass | - |
| TC-06 | All fields empty | Pass | - |
| TC-07 | Invalid email (no domain ext.) | Fail | BUG-02 |
| TC-08 | Invalid email (no @) | Pass | - |
| TC-09 | Short password | Pass | - |
| TC-10 | Password mismatch | Pass | - |
| TC-11 | Duplicate email | Pass | - |
| TC-12 | Password toggle (Password field) | Pass | - |
| TC-13 | Password toggle (Confirm field) | Fail | BUG-01 |
| TC-14 | Valid login | Pass | - |
| TC-15 | Login - unregistered email | Pass | - |
| TC-16 | Login - wrong password | Pass | - |
| TC-17 | Login - empty email | Pass | - |
| TC-18 | Login - empty password | Pass | - |
| TC-19 | Login - both empty | Pass | - |
| TC-20 | Login - invalid email format | Fail | BUG-02 |
| TC-21 | Password toggle - Login page | Pass | - |
| TC-22 | Forgot Password link | Fail | BUG-04 |
| TC-23 | Dashboard shows correct name | Pass | - |
| TC-24 | Dashboard blocked without login | Pass | - |
| TC-25 | Logout functionality | Pass | - |
| TC-26 | Back button after logout | Fail | BUG-03 |
| TC-27 | Login → Register navigation | Pass | - |
| TC-28 | Register → Login navigation | Pass | - |
| TC-29 | UI consistency check | Pass | - |
| TC-30 | Page titles check | Pass | - |

## 3. Bugs Found During This Execution
| Bug ID | Title | Severity | Priority |
|---|---|---|---|
| BUG-01 | Confirm Password eye icon toggles wrong field | Low | P3 |
| BUG-02 | Invalid email format accepted | Medium | P2 |
| BUG-03 | Dashboard visible after Logout via Back button | Medium | P2 |
| BUG-04 | Forgot Password link does nothing | Medium | P2 |
| BUG-05 | Wrong success message after registration | Low | P3 |

## 4. Conclusion
Out of 30 manual test cases executed, 24 passed and 6 failed. The 6 failures map to
5 unique defects (BUG-02 was found through two different test cases — once during
Registration and once during Login). All defects found are minor to medium in
severity and do not block the core Login/Registration/Logout flow. The application
is functionally usable, and the identified bugs have been logged for the
development team (in a real project) to fix and retest.
