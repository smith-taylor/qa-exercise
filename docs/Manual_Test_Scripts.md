# Manual Test Scripts – Delta.com Flight Booking

This manual test suite covers a high-priority set of scenarios for validating the flight booking experience on [Delta.com](https://www.delta.com). Test cases are designed for both positive and negative flows and follow best practices in QA such as traceability, isolation, reusability, and risk awareness.

---

## 📋 Test Case Matrix

| Test ID | Title | Preconditions | Steps | Test Data | Expected Result | Priority | Risk |
|--------|-------|---------------|-------|-----------|------------------|----------|------|
| TC001 | One-Way Flight Search – Valid | Delta.com is accessible | 1. Select “One Way” <br> 2. Enter valid origin and destination <br> 3. Select future date <br> 4. Click “Search” | ATL → JFK, Date: 30 days from today | List of flights appears with price, duration, and airline details | High | Low |
| TC002 | Round-Trip Flight – Valid | Delta.com is accessible | 1. Select “Round Trip” <br> 2. Enter valid origin and destination <br> 3. Select departure and return dates <br> 4. Click “Search” | ATL ↔ LAX, 7 days apart | Outbound and return flights visible, selectable | High | Medium |
| TC003 | Required Fields Validation | Delta.com is accessible | 1. Leave all fields blank <br> 2. Click “Search” | — | Error messages displayed for missing input | High | Low |
| TC004 | Invalid Airport Code | Delta.com is accessible | 1. Enter “XXX” as origin <br> 2. Enter valid destination <br> 3. Click “Search” | Origin: XXX | User gets meaningful error like “airport not found” | Medium | Medium |
| TC005 | Past Date Entry | Delta.com is accessible | 1. Enter valid origin/destination <br> 2. Choose a past date <br> 3. Click “Search” | Date: yesterday | Validation error or date auto-corrected | Medium | Low |
| TC006 | Date Picker Calendar Logic | Delta.com is accessible | 1. Click calendar widget <br> 2. Navigate months <br> 3. Try to select greyed-out dates | N/A | Only valid future dates are selectable | Medium | Medium |
| TC007 | Autocomplete City Lookup | Delta.com is accessible | 1. Type “New” into origin field <br> 2. Observe suggestions | N/A | Suggestions: “New York”, “Newark”, etc. | Low | Low |
| TC008 | Session Timeout Behavior | User leaves session idle | 1. Enter search criteria <br> 2. Wait 20+ minutes <br> 3. Try to submit | ATL → BOS | Session should expire or auto-refresh securely | Medium | High |
| TC009 | Mobile Responsiveness – iPhone 13 | Access Delta.com on mobile emulator | 1. Load homepage <br> 2. Open menu <br> 3. Search for flight | — | Functional parity with desktop; no layout break | High | Medium |
| TC010 | Accessibility (a11y) – Keyboard Only | — | 1. Tab through fields <br> 2. Check ARIA labels & focus <br> 3. Submit form | — | All elements accessible by keyboard/tab key | High | High |

---

## ✅ Notes on Test Strategy

- **Traceability**: Each case is mapped to a Cypress spec or gap for automation coverage.
- **Data Variants**: Use fixture sets to simulate edge cases (e.g., obscure airports, leap years).
- **Cross-Browser Testing**: Recommended for Chrome, Firefox, and Safari.
- **Localization Check**: Add variations for international searches (e.g., CDG → JFK).
- **Post-Booking Coverage**: Future expansion may include validating cart, seat selection, and checkout flow.
- **Exploratory Pass**: Conduct ad-hoc testing before release cutoff using scenario tours.

---

## ✅ Manual vs Automated Mapping

| Manual Test ID | Automated? | Cypress Spec File |
|----------------|------------|-------------------|
| TC001 | ✅ Yes | one_way_search.cy.ts |
| TC002 | ✅ Yes | round_trip_search.cy.ts |
| TC003 | ✅ Yes | validations.cy.ts |
| TC004 | ✅ Yes | validations.cy.ts |
| TC005 | ⏳ In Progress | validations.cy.ts |
| TC006–TC010 | 🚧 Manual Only | Planned in future specs |

---

## ✅ QA Best Practices Applied

- **Atomic tests**: Small, focused validations per flow  
- **Independent setup/teardown**: Reset cookies/localStorage  
- **Negative testing**: Not just “happy path” tests  
- **Visual checkpoints**: Cypress screenshots on failure  
- **Code/data separation**: Fixtures decouple logic  
- **CI-ready**: Parallelizable for GitLab pipelines  

---

## ✅ Future Manual Additions

- Booking confirmation email content validation  
- SkyMiles member booking and login coverage  
- Seat and upgrade options pre-checkout  
- Rebooking and change flight flows  
- Travel insurance options toggle  

---

_Last updated: May 2025_
