# Test Cases – Login & Registration Testing Project

**Total Test Cases: 30**
**Legend:** P1 = High Priority, P2 = Medium Priority, P3 = Low Priority
Bug references (e.g. BUG-01) are explained in `04_Bug_Reports.md`.

---

### TC-01
- **Test Scenario:** Valid registration with correct details
- **Preconditions:** User is on the Registration page. Email is not already registered.
- **Steps:**
  1. Enter a valid name
  2. Enter a valid, unused email
  3. Enter a valid password (6+ characters)
  4. Enter the same password in Confirm Password
  5. Click Register
- **Test Data:** Name: Riya Sharma, Email: riya.sharma@gmail.com, Password: Test@123
- **Expected Result:** User is registered successfully and redirected to Login page with a success message
- **Actual Result:** User registered and redirected to Login page, but success message incorrectly says "Login Successful!" instead of "Registration Successful!"
- **Status:** Fail (see BUG-05)
- **Priority:** P2

---

### TC-02
- **Test Scenario:** Registration with empty Name field
- **Preconditions:** User is on the Registration page
- **Steps:** Leave Name empty, fill other fields correctly, click Register
- **Test Data:** Name: (empty), Email: user1@gmail.com, Password: Test@123, Confirm: Test@123
- **Expected Result:** Error message "Name is required." is shown; form is not submitted
- **Actual Result:** As expected
- **Status:** Pass
- **Priority:** P1

---

### TC-03
- **Test Scenario:** Registration with empty Email field
- **Preconditions:** User is on the Registration page
- **Steps:** Leave Email empty, fill other fields correctly, click Register
- **Test Data:** Name: Aman, Email: (empty), Password: Test@123, Confirm: Test@123
- **Expected Result:** Error message "Email is required." is shown
- **Actual Result:** As expected
- **Status:** Pass
- **Priority:** P1

---

### TC-04
- **Test Scenario:** Registration with empty Password field
- **Preconditions:** User is on the Registration page
- **Steps:** Leave Password empty, fill other fields, click Register
- **Test Data:** Name: Aman, Email: aman1@gmail.com, Password: (empty), Confirm: Test@123
- **Expected Result:** Error message "Password is required." is shown
- **Actual Result:** As expected
- **Status:** Pass
- **Priority:** P1

---

### TC-05
- **Test Scenario:** Registration with empty Confirm Password field
- **Preconditions:** User is on the Registration page
- **Steps:** Fill all fields but leave Confirm Password empty, click Register
- **Test Data:** Name: Aman, Email: aman2@gmail.com, Password: Test@123, Confirm: (empty)
- **Expected Result:** Error message "Please confirm your password." is shown
- **Actual Result:** As expected
- **Status:** Pass
- **Priority:** P1

---

### TC-06
- **Test Scenario:** Registration with all fields empty
- **Preconditions:** User is on the Registration page
- **Steps:** Leave all fields empty and click Register
- **Test Data:** All fields empty
- **Expected Result:** All relevant error messages are shown; form is not submitted
- **Actual Result:** As expected
- **Status:** Pass
- **Priority:** P1

---

### TC-07
- **Test Scenario:** Registration with invalid email format (missing domain extension)
- **Preconditions:** User is on the Registration page
- **Steps:** Enter an email like "user@com" and fill the rest correctly, click Register
- **Test Data:** Email: user@com
- **Expected Result:** Error message "Enter a valid email address." should be shown, and the form should not submit
- **Actual Result:** No error is shown; the email is accepted as valid and registration succeeds
- **Status:** Fail (see BUG-02)
- **Priority:** P1

---

### TC-08
- **Test Scenario:** Registration with invalid email format (missing @ symbol)
- **Preconditions:** User is on the Registration page
- **Steps:** Enter an email like "usergmail.com", fill rest correctly, click Register
- **Test Data:** Email: usergmail.com
- **Expected Result:** Error message "Enter a valid email address." is shown
- **Actual Result:** As expected
- **Status:** Pass
- **Priority:** P1

---

### TC-09
- **Test Scenario:** Registration with password shorter than 6 characters
- **Preconditions:** User is on the Registration page
- **Steps:** Enter a password with less than 6 characters, click Register
- **Test Data:** Password: 123, Confirm: 123
- **Expected Result:** Error message "Password must be at least 6 characters." is shown
- **Actual Result:** As expected
- **Status:** Pass
- **Priority:** P2

---

### TC-10
- **Test Scenario:** Registration with Password and Confirm Password not matching
- **Preconditions:** User is on the Registration page
- **Steps:** Enter different values in Password and Confirm Password fields, click Register
- **Test Data:** Password: Test@123, Confirm: Test@456
- **Expected Result:** Error message "Passwords do not match." is shown
- **Actual Result:** As expected
- **Status:** Pass
- **Priority:** P1

---

### TC-11
- **Test Scenario:** Registration using an email that is already registered
- **Preconditions:** An account with email "riya.sharma@gmail.com" already exists
- **Steps:** Try to register again using the same email
- **Test Data:** Email: riya.sharma@gmail.com
- **Expected Result:** Error message "This email is already registered." is shown
- **Actual Result:** As expected
- **Status:** Pass
- **Priority:** P2

---

### TC-12
- **Test Scenario:** Password show/hide toggle on Registration page – Password field
- **Preconditions:** User is on the Registration page
- **Steps:** Type a password, click the eye icon next to the Password field
- **Test Data:** Password: Test@123
- **Expected Result:** Password becomes visible as plain text; icon changes
- **Actual Result:** As expected
- **Status:** Pass
- **Priority:** P3

---

### TC-13
- **Test Scenario:** Password show/hide toggle on Registration page – Confirm Password field
- **Preconditions:** User is on the Registration page
- **Steps:** Type a value in Confirm Password field, click the eye icon next to it
- **Test Data:** Confirm Password: Test@123
- **Expected Result:** Confirm Password field becomes visible as plain text
- **Actual Result:** Clicking the eye icon next to Confirm Password instead toggles the Password field above it; Confirm Password field visibility does not change
- **Status:** Fail (see BUG-01)
- **Priority:** P3

---

### TC-14
- **Test Scenario:** Valid login with correct registered credentials
- **Preconditions:** A user is already registered
- **Steps:** Enter the registered email and correct password, click Login
- **Test Data:** Email: riya.sharma@gmail.com, Password: Test@123
- **Expected Result:** User is redirected to the Dashboard page and sees a welcome message with their name
- **Actual Result:** As expected
- **Status:** Pass
- **Priority:** P1

---

### TC-15
- **Test Scenario:** Login with an email that is not registered
- **Preconditions:** User is on the Login page
- **Steps:** Enter an email that was never registered, enter any password, click Login
- **Test Data:** Email: notregistered@gmail.com, Password: Test@123
- **Expected Result:** Error message "Email not registered." is shown
- **Actual Result:** As expected
- **Status:** Pass
- **Priority:** P1

---

### TC-16
- **Test Scenario:** Login with correct email but incorrect password
- **Preconditions:** A user is already registered
- **Steps:** Enter the registered email and a wrong password, click Login
- **Test Data:** Email: riya.sharma@gmail.com, Password: WrongPass1
- **Expected Result:** Error message "Incorrect password." is shown
- **Actual Result:** As expected
- **Status:** Pass
- **Priority:** P1

---

### TC-17
- **Test Scenario:** Login with empty Email field
- **Preconditions:** User is on the Login page
- **Steps:** Leave Email empty, enter a password, click Login
- **Test Data:** Email: (empty), Password: Test@123
- **Expected Result:** Error message "Email is required." is shown
- **Actual Result:** As expected
- **Status:** Pass
- **Priority:** P1

---

### TC-18
- **Test Scenario:** Login with empty Password field
- **Preconditions:** User is on the Login page
- **Steps:** Enter email, leave Password empty, click Login
- **Test Data:** Email: riya.sharma@gmail.com, Password: (empty)
- **Expected Result:** Error message "Password is required." is shown
- **Actual Result:** As expected
- **Status:** Pass
- **Priority:** P1

---

### TC-19
- **Test Scenario:** Login with both Email and Password empty
- **Preconditions:** User is on the Login page
- **Steps:** Leave both fields empty, click Login
- **Test Data:** Both fields empty
- **Expected Result:** Both error messages are shown; form is not submitted
- **Actual Result:** As expected
- **Status:** Pass
- **Priority:** P1

---

### TC-20
- **Test Scenario:** Login with an invalid email format
- **Preconditions:** User is on the Login page
- **Steps:** Enter an email like "test@com" (accepted by the buggy validation) and any password
- **Test Data:** Email: test@com, Password: Test@123
- **Expected Result:** Error message "Enter a valid email address." should be shown before checking credentials
- **Actual Result:** No format validation is shown on the Login page; the app directly checks if the email exists
- **Status:** Fail (see BUG-02)
- **Priority:** P2

---

### TC-21
- **Test Scenario:** Password show/hide toggle on Login page
- **Preconditions:** User is on the Login page
- **Steps:** Type a password, click the eye icon
- **Test Data:** Password: Test@123
- **Expected Result:** Password becomes visible as plain text
- **Actual Result:** As expected
- **Status:** Pass
- **Priority:** P3

---

### TC-22
- **Test Scenario:** Click "Forgot Password?" link on Login page
- **Preconditions:** User is on the Login page
- **Steps:** Click the "Forgot Password?" link
- **Test Data:** N/A
- **Expected Result:** User should be shown a message or a simple page explaining how to reset the password
- **Actual Result:** Nothing happens when the link is clicked; there is no page or message
- **Status:** Fail (see BUG-04)
- **Priority:** P2

---

### TC-23
- **Test Scenario:** Verify Dashboard shows the correct logged-in user's name
- **Preconditions:** User has successfully logged in
- **Steps:** Log in with valid credentials, observe the welcome message on Dashboard
- **Test Data:** Name used at registration: Riya Sharma
- **Expected Result:** Dashboard shows "Welcome, Riya Sharma"
- **Actual Result:** As expected
- **Status:** Pass
- **Priority:** P1

---

### TC-24
- **Test Scenario:** Verify Dashboard cannot be opened directly without logging in
- **Preconditions:** User is not logged in (no active session)
- **Steps:** Manually type the Dashboard page URL/file path in the browser and press Enter
- **Test Data:** N/A
- **Expected Result:** User should be redirected to the Login page
- **Actual Result:** As expected
- **Status:** Pass
- **Priority:** P1

---

### TC-25
- **Test Scenario:** Verify Logout functionality
- **Preconditions:** User is logged in and on the Dashboard page
- **Steps:** Click the Logout button
- **Test Data:** N/A
- **Expected Result:** User is logged out and redirected to the Login page
- **Actual Result:** As expected
- **Status:** Pass
- **Priority:** P1

---

### TC-26
- **Test Scenario:** Verify browser Back button after Logout does not show the Dashboard again
- **Preconditions:** User has just logged out
- **Steps:** After logging out, click the browser's Back button
- **Test Data:** N/A
- **Expected Result:** User should NOT be able to see the Dashboard page again; should stay on/return to Login page
- **Actual Result:** The Dashboard page is briefly shown again from the browser's cache when clicking Back
- **Status:** Fail (see BUG-03)
- **Priority:** P2

---

### TC-27
- **Test Scenario:** Verify navigation link from Login page to Registration page
- **Preconditions:** User is on the Login page
- **Steps:** Click "Register here" link
- **Test Data:** N/A
- **Expected Result:** User is taken to the Registration page
- **Actual Result:** As expected
- **Status:** Pass
- **Priority:** P3

---

### TC-28
- **Test Scenario:** Verify navigation link from Registration page to Login page
- **Preconditions:** User is on the Registration page
- **Steps:** Click "Login here" link
- **Test Data:** N/A
- **Expected Result:** User is taken to the Login page
- **Actual Result:** As expected
- **Status:** Pass
- **Priority:** P3

---

### TC-29
- **Test Scenario:** Verify UI consistency across all pages
- **Preconditions:** All three pages are accessible
- **Steps:** Open Login, Registration, and Dashboard pages one by one and observe fonts, colors, spacing, and button styles
- **Test Data:** N/A
- **Expected Result:** All pages should follow the same color theme, font, and button style
- **Actual Result:** As expected
- **Status:** Pass
- **Priority:** P3

---

### TC-30
- **Test Scenario:** Verify page titles are correct and meaningful
- **Preconditions:** All three pages are accessible
- **Steps:** Open each page and check the browser tab title
- **Test Data:** N/A
- **Expected Result:** Each page should have a clear, relevant title (e.g. "Login", "Register", "Dashboard")
- **Actual Result:** As expected
- **Status:** Pass
- **Priority:** P3
