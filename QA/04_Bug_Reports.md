# Bug Reports – Login & Registration Testing Project

These bugs were found while executing the test cases in `03_Test_Cases.md`.
They were intentionally kept simple so they are easy to understand, reproduce,
and explain in an interview.

---

## BUG-01: Confirm Password "show/hide" icon toggles the wrong field
- **Bug Title:** Eye icon next to Confirm Password toggles the Password field instead
- **Severity:** Low
- **Priority:** P3
- **Found in Test Case:** TC-13
- **Steps to Reproduce:**
  1. Go to the Registration page
  2. Type something in the "Password" field
  3. Type something in the "Confirm Password" field
  4. Click the eye icon next to "Confirm Password"
- **Expected Result:** The Confirm Password field's text should become visible/hidden
- **Actual Result:** The Password field's visibility toggles instead; Confirm Password is unaffected
- **Status:** Open
- **Suggested Cause (for interview explanation):** The eye icon's click code was copy-pasted from the Password field and the field ID was not updated to point to the Confirm Password field.

---

## BUG-02: Invalid email format is accepted (e.g. "user@com")
- **Bug Title:** Email validation does not check for a proper domain (like .com, .in)
- **Severity:** Medium
- **Priority:** P2
- **Found in Test Case:** TC-07, TC-20
- **Steps to Reproduce:**
  1. Go to the Registration (or Login) page
  2. Enter an email like `user@com` (no dot after @)
  3. Fill the rest of the form correctly
  4. Submit the form
- **Expected Result:** An error like "Enter a valid email address." should appear, and the form should not be submitted
- **Actual Result:** The email is accepted as valid and the form is submitted successfully
- **Status:** Open
- **Suggested Cause (for interview explanation):** The email validation uses a very simple pattern that only checks for an "@" symbol and does not check for a proper domain extension.

---

## BUG-03: Dashboard page reappears after Logout when clicking browser Back button
- **Bug Title:** Logged-out user can briefly see the Dashboard using the Back button
- **Severity:** Medium
- **Priority:** P2
- **Found in Test Case:** TC-26
- **Steps to Reproduce:**
  1. Log in successfully so the Dashboard page is shown
  2. Click the "Logout" button (you are redirected to the Login page)
  3. Click the browser's Back button
- **Expected Result:** The user should not be able to see the Dashboard page again after logging out
- **Actual Result:** The Dashboard page is shown briefly again (loaded from the browser's cache)
- **Status:** Open
- **Suggested Cause (for interview explanation):** The application does not force a fresh reload/re-check when the page is restored from browser cache (no cache-control handling was added), so old page content is briefly visible.

---

## BUG-04: "Forgot Password?" link does nothing
- **Bug Title:** Forgot Password link on Login page is non-functional
- **Severity:** Medium
- **Priority:** P2
- **Found in Test Case:** TC-22
- **Steps to Reproduce:**
  1. Go to the Login page
  2. Click on the "Forgot Password?" link
- **Expected Result:** Some message, page, or instructions about resetting the password should appear
- **Actual Result:** Nothing happens at all when the link is clicked
- **Status:** Open
- **Suggested Cause (for interview explanation):** The link was added to the page for UI purposes, but no click functionality/page was ever built for it (a common "placeholder" bug in early-stage projects).

---

## BUG-05: Wrong success message after registration
- **Bug Title:** Registration success message incorrectly says "Login Successful!"
- **Severity:** Low
- **Priority:** P3
- **Found in Test Case:** TC-01
- **Steps to Reproduce:**
  1. Go to the Registration page
  2. Fill all fields correctly with valid, unused data
  3. Click Register
- **Expected Result:** A message saying "Registration Successful!" should appear
- **Actual Result:** A message saying "Login Successful!" appears instead
- **Status:** Open
- **Suggested Cause (for interview explanation):** A likely copy-paste mistake — the developer reused the Login page's success text on the Registration page and forgot to update the wording.

---

## Bug Summary Table

| Bug ID | Title | Severity | Priority | Status |
|---|---|---|---|---|
| BUG-01 | Confirm Password eye icon toggles wrong field | Low | P3 | Open |
| BUG-02 | Invalid email format accepted | Medium | P2 | Open |
| BUG-03 | Dashboard visible after Logout via Back button | Medium | P2 | Open |
| BUG-04 | Forgot Password link does nothing | Medium | P2 | Open |
| BUG-05 | Wrong success message after registration | Low | P3 | Open |

### Note on Severity vs Priority (simple explanation)
- **Severity** = How badly does this affect the application/user? (e.g. crash = High severity)
- **Priority** = How urgently should this be fixed? (e.g. a spelling mistake on the homepage could be High priority even if Low severity, if the client wants it fixed quickly)
