# KRA iTax System: Navigation Flows and Wireframes

## Document Overview

This document provides detailed navigation flows and ASCII wireframes for the redesigned KRA iTax system. These flows illustrate key user journeys and screen-to-screen navigation patterns.

---

## Table of Contents

1. [Overall System Architecture](#overall-system-architecture)
2. [User Journey 1: First-Time Individual Return Filing](#user-journey-1-first-time-individual-return-filing)
3. [User Journey 2: Quick VAT Filing (Mobile)](#user-journey-2-quick-vat-filing-mobile)
4. [User Journey 3: Tax Agent Batch Filing](#user-journey-3-tax-agent-batch-filing)
5. [Key Screen Wireframes](#key-screen-wireframes)
6. [Navigation Patterns](#navigation-patterns)
7. [Error Flows](#error-flows)

---

## Overall System Architecture

### High-Level Navigation Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                         iTax Kenya                               │
│                    (Public Landing Page)                         │
│                                                                   │
│  [About iTax]  [User Guide]  [Contact]  [Login]  [Register]    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ├─ Login ──────────────┐
                              │                      │
                    ┌─────────▼────────┐    ┌───────▼─────────┐
                    │  Individual/SME  │    │   Tax Agent     │
                    │    Dashboard     │    │   Dashboard     │
                    └─────────┬────────┘    └───────┬─────────┘
                              │                      │
        ┌─────────────────────┼──────────────┬──────┼─────────┐
        │                     │              │      │         │
   ┌────▼────┐    ┌──────────▼───┐   ┌─────▼───┐  │   ┌─────▼─────┐
   │  File   │    │   Payments   │   │   My    │  │   │  Client   │
   │ Returns │    │              │   │ Account │  │   │Management │
   └────┬────┘    └──────────────┘   └─────────┘  │   └───────────┘
        │                                           │
        ├─ Individual Returns (IT1, IT2)          │
        ├─ Business Returns (VAT, Corporate)      │
        ├─ PAYE Returns                            │
        └─ Other Returns                           │
                                                    │
                                            ┌───────▼────────┐
                                            │ Batch Filing   │
                                            │ Templates      │
                                            │ Client Reports │
                                            └────────────────┘
```

---

## User Journey 1: First-Time Individual Return Filing

### Flow Diagram

```
START: User receives SMS reminder
   │
   ▼
┌─────────────────────┐
│  1. Dashboard       │  ← Entry point after login
│  "Action Required:  │
│   File Tax Return"  │
└──────────┬──────────┘
           │ [Tap "File Return"]
           ▼
┌─────────────────────┐
│  2. Return Type     │  ← Selection screen
│     Selection       │
│  • Individual (IT1) │
│  • Business (IT2)   │
│  • VAT              │
└──────────┬──────────┘
           │ [Select "Individual IT1"]
           ▼
┌─────────────────────┐
│  3. First-Time      │  ← Onboarding check
│     Detection       │
│  "First time?       │
│   Let us guide you" │
│  [Tutorial] [Skip]  │
└──────────┬──────────┘
           │ [Select "Take Tutorial"]
           ▼
┌─────────────────────┐
│  4. Pre-Filing      │  ← Document checklist
│     Checklist       │
│  ☑ PIN              │
│  ☐ P9 Form          │
│  ☐ Bank Statements  │
│  [I'm Ready]        │
└──────────┬──────────┘
           │ [Tap "I'm Ready"]
           ▼
┌─────────────────────┐
│  5. Step 1 of 5:    │  ← Multi-step form begins
│  Personal Info      │
│  Progress: ████░░   │
│  (Pre-populated)    │
│  [Next]             │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  6. Step 2 of 5:    │
│  Income Details     │
│  Progress: ████████░│
│  • Salary: [____]   │
│  • Other: [____]    │
│  [Back] [Next]      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  7. Step 3 of 5:    │
│  Deductions/Reliefs │
│  Progress: ██████░░ │
│  • Mortgage: [___]  │
│  • Insurance: [___] │
│  [Back] [Next]      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  8. Step 4 of 5:    │
│  Upload Documents   │
│  Progress: ████████░│
│  📎 P9 Form         │
│  📎 Bank Statement  │
│  [Back] [Next]      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  9. Step 5 of 5:    │
│  Review & Submit    │
│  Progress: ████████ │
│  Summary of all data│
│  Tax: KSh 31,250    │
│  ☐ I declare...     │
│  [Submit]           │
└──────────┬──────────┘
           │ [Tap "Submit"]
           ▼
┌─────────────────────┐
│ 10. Processing      │
│     Screen          │
│  ⏳ Submitting...   │
│  "Usually takes     │
│   5-10 seconds"     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ 11. Success!        │
│     ✓ Filed         │
│  Ref: ITR-2025-XXX  │
│  [Download Receipt] │
│  [Back to Dashboard]│
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ 12. Dashboard       │  ← Return with updated status
│  ✓ Return Filed     │
│  Next: Payment due  │
└─────────────────────┘
           │
          END

Total Steps: 12 screens
Estimated Time: 15 minutes
Decision Points: 3 (Tutorial, I'm Ready, Submit)
```

### Alternative Paths

#### Path A: User Skips Tutorial
```
Screen 3: First-Time Detection
   │ [Tap "Skip"]
   ▼
Screen 4: Pre-Filing Checklist
   (continues normally)
```

#### Path B: User Exits Mid-Process
```
Any Step (2-9)
   │ [Tap "Save Draft" or Back button]
   ▼
┌─────────────────────┐
│  Save Draft         │
│  "Save progress?"   │
│  Your data will be  │
│  saved for 30 days  │
│  [Save] [Continue]  │
└──────────┬──────────┘
           │ [Tap "Save"]
           ▼
Dashboard (with "Resume Filing" option)
```

#### Path C: Validation Error at Submission
```
Screen 9: Review & Submit
   │ [Tap "Submit"]
   ▼
┌─────────────────────┐
│  Validation Error   │
│  ❌ 2 issues found  │
│  1. Field missing   │
│  2. Invalid format  │
│  [Fix Issues]       │
└──────────┬──────────┘
           │
           ▼
Return to relevant step with errors highlighted
```

---

## User Journey 2: Quick VAT Filing (Mobile)

### Flow Diagram (Mobile-Optimized)

```
START: User taps SMS link
   │
   ▼
┌──────────────────────┐
│  1. Deep Link        │  ← Opens app or mobile web
│     Authentication   │
│  (Biometric if       │
│   enabled, or PIN)   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  2. VAT Filing       │  ← Direct to task
│     Dashboard        │
│  "File May VAT"      │
│  Due in 3 days ⚠️    │
│  [File Now]          │
└──────────┬───────────┘
           │ [Tap "File Now"]
           ▼
┌──────────────────────┐
│  3. Smart Template   │  ← Time-saving feature
│     Option           │
│  "Use last month as  │
│   starting point?"   │
│  Last: KSh 240,000   │
│  [Yes] [No, Fresh]   │
└──────────┬───────────┘
           │ [Tap "Yes"]
           ▼
┌──────────────────────┐
│  4. VAT Form         │  ← Single-screen form
│     (Mobile)         │
│  Total Sales:        │
│  [285,000] ← user    │
│  VAT: 38,630 ← auto  │
│                      │
│  Total Purchases:    │
│  [180,000] ← user    │
│  VAT: 24,410 ← auto  │
│                      │
│  Net VAT Payable:    │
│  KSh 14,219.88       │
│  [Review & Submit]   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  5. Review Summary   │
│  Sales: 285,000      │
│  Purchases: 180,000  │
│  VAT Due: 14,219.88  │
│  ✓ Looks correct     │
│  [Submit Return]     │
└──────────┬───────────┘
           │ [Tap "Submit"]
           ▼
┌──────────────────────┐
│  6. Processing       │
│  ⏳ Submitting...    │
│  (3-5 seconds)       │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  7. Success +        │
│     Payment Prompt   │
│  ✓ VAT Filed!        │
│  Ref: VAT-2025-XXX   │
│  Pay KSh 14,219.88   │
│  Due: 20 June        │
│  [Pay Now] [Later]   │
└──────────┬───────────┘
           │ [Tap "Pay Now"]
           ▼
┌──────────────────────┐
│  8. Payment Method   │
│  Select method:      │
│  ⦿ M-Pesa            │
│  ○ Bank Transfer     │
│  ○ Card              │
│  [Continue]          │
└──────────┬───────────┘
           │ [Tap "Continue"]
           ▼
┌──────────────────────┐
│  9. M-Pesa Payment   │
│  Amount: 14,219.88   │
│  Phone: 0722XXXXXX   │
│  "Check your phone   │
│   for M-Pesa prompt" │
│  [Waiting...]        │
└──────────┬───────────┘
           │ [User completes on phone]
           ▼
┌──────────────────────┐
│ 10. Payment Success  │
│  ✓ Payment Received! │
│  M-Pesa: PQRS123456  │
│  KRA: PAY-2025-XXX   │
│  May VAT: Complete✓  │
│  [Download Receipt]  │
│  [Done]              │
└──────────┬───────────┘
           │
          END

Total Steps: 10 screens (6 if not paying)
Estimated Time: 12 minutes (with payment), 5 minutes (filing only)
User Inputs: 2 (sales, purchases)
```

### Mobile-Specific Features Highlighted

```
Mobile Optimizations:
├─ Deep linking from SMS
├─ Biometric authentication
├─ Single-column layouts
├─ Large touch targets (48dp minimum)
├─ Sticky bottom action buttons
├─ Native keyboard types
├─ M-Pesa integration
└─ Swipe gestures (back/forward)
```

---

## User Journey 3: Tax Agent Batch Filing

### Flow Diagram

```
START: Tax agent logs in
   │
   ▼
┌──────────────────────────────────┐
│  1. Tax Agent Dashboard          │
│  "Welcome Sarah"                 │
│  ┌─────────────────────────────┐│
│  │ 15 returns due this week    ││
│  │ 5 pending payments          ││
│  │ 3 new messages              ││
│  └─────────────────────────────┘│
│  Client List (sortable table):  │
│  [Name] [Type] [Due] [Status]   │
│  [Filter] [Sort] [Select]       │
└──────────────┬───────────────────┘
               │
               ▼
┌──────────────────────────────────┐
│  2. Filter & Select Clients      │
│  Filter: VAT Returns, Retail     │
│  Result: 10 clients              │
│  ☑ Client A    VAT   20 Jun      │
│  ☑ Client B    VAT   20 Jun      │
│  ☑ ... (8 more)                  │
│  [10 Selected]                   │
│  [Batch File VAT Returns]        │
└──────────────┬───────────────────┘
               │ [Click "Batch File"]
               ▼
┌──────────────────────────────────┐
│  3. Batch Filing Interface       │
│  Spreadsheet-style view:         │
│  ┌────────────────────────────┐ │
│  │Client│Sales  │Purch│VAT│   │ │
│  │A     │[___]  │[___]│   │✓  │ │
│  │B     │[___]  │[___]│   │✓  │ │
│  │...   │       │     │   │   │ │
│  └────────────────────────────┘ │
│  [Import Excel] [Validate]       │
└──────────────┬───────────────────┘
               │ [Click "Import Excel"]
               ▼
┌──────────────────────────────────┐
│  4. Excel Import                 │
│  "Select Excel file to import"  │
│  📎 [Browse Files]               │
│     └─ VAT_Returns_June.xlsx     │
│  [Upload]                        │
└──────────────┬───────────────────┘
               │
               ▼
┌──────────────────────────────────┐
│  5. Data Populated & Validated   │
│  ┌────────────────────────────┐ │
│  │Client│Sales  │Purch│VAT│St│ │
│  │A     │240,000│150k │9k │✓ │ │
│  │B     │260,000│170k │8k │✓ │ │
│  │C     │280,000│190k │11k│⚠️│ │
│  │D     │255,000│160k │9k │✓ │ │
│  │...   │       │    │   │  │ │
│  └────────────────────────────┘ │
│  ⚠️ 1 Warning: Client C sales    │
│     up 40% - verify              │
│  [Review Warning] [Continue]     │
└──────────────┬───────────────────┘
               │ [Review & confirm warning]
               ▼
┌──────────────────────────────────┐
│  6. Preview Summary              │
│  "Ready to submit 10 returns"    │
│  ┌────────────────────────────┐ │
│  │ Total VAT: KSh 245,600     │ │
│  │ Client A: KSh 24,560       │ │
│  │ Client B: KSh 28,100       │ │
│  │ ...                        │ │
│  └────────────────────────────┘ │
│  [Cancel] [Submit All 10]        │
└──────────────┬───────────────────┘
               │ [Click "Submit All"]
               ▼
┌──────────────────────────────────┐
│  7. Batch Processing             │
│  "Filing returns..."             │
│  Progress: ████████░░ 8 of 10    │
│  ✓ Client A - VAT-2025-001XX     │
│  ✓ Client B - VAT-2025-002XX     │
│  ✓ Client C - VAT-2025-003XX     │
│  ...                             │
│  ⏳ Client I - Processing...     │
│  ⏳ Client J - Queued            │
└──────────────┬───────────────────┘
               │
               ▼
┌──────────────────────────────────┐
│  8. Batch Complete               │
│  ✓ All 10 returns filed!         │
│  ┌────────────────────────────┐ │
│  │Client│Ref         │Time    │ │
│  │A     │VAT-XXX     │14:23   │ │
│  │B     │VAT-XXX     │14:23   │ │
│  │...   │            │        │ │
│  └────────────────────────────┘ │
│  [Download All (ZIP)]            │
│  [Email Clients]                 │
│  [Back to Dashboard]             │
└──────────────┬───────────────────┘
               │
              END

Total Steps: 8 screens
Estimated Time: 90 minutes (vs 6 hours individually)
Clients Processed: 10 simultaneously
Time Saved: 4.5 hours
```

### Batch Filing Feature Breakdown

```
Batch Filing Capabilities:
│
├─ Multi-select clients (checkbox selection)
├─ Filter by return type, due date, business type
├─ Excel/CSV import for bulk data entry
├─ Spreadsheet-style editing interface
├─ Bulk validation before submission
├─ Warning/error highlighting per client
├─ Progress tracking during submission
├─ Bulk receipt download (ZIP)
├─ Automated client email confirmations
└─ Batch history and audit trail
```

---

## Key Screen Wireframes

### Wireframe 1: Dashboard (Individual User - Desktop)

```
┌───────────────────────────────────────────────────────────────────┐
│ ☰ iTax Kenya          🔔 (3)  👤 Margaret Kamau  ⚙️ Settings │
├───────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Hi Margaret, here's your tax overview                             │
│                                                                     │
│  ┌───────────────────────────────────────────────────────────────┐│
│  │ ⚠️ ACTION REQUIRED                                            ││
│  │ Your 2024/2025 Income Tax Return is due in 12 days           ││
│  │                                                                ││
│  │ [File Return Now →]                                           ││
│  └───────────────────────────────────────────────────────────────┘│
│                                                                     │
│  Quick Actions                                                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌──────────┐│
│  │   📝       │  │   💰       │  │   📊       │  │   📄    ││
│  │            │  │            │  │            │  │          ││
│  │ File       │  │ Make       │  │ View Tax   │  │ Download ││
│  │ Return     │  │ Payment    │  │ Ledger     │  │ Certif.  ││
│  │            │  │            │  │            │  │          ││
│  └─────────────┘  └─────────────┘  └─────────────┘  └──────────┘│
│                                                                     │
│  ┌────────────────────────────┐  ┌─────────────────────────────┐ │
│  │ Upcoming Deadlines         │  │ Recent Activity             │ │
│  │ ─────────────────────────  │  │ ───────────────────────────  │ │
│  │                            │  │                              │ │
│  │ 📅 30 June 2025            │  │ ✓ PAYE Return Filed         │ │
│  │ Income Tax Payment         │  │   10 May 2025               │ │
│  │ KSh 31,250                 │  │   Ref: PAYE-2025-XXX        │ │
│  │                            │  │                              │ │
│  │ 📅 20 July 2025            │  │ ✓ PIN Certificate Downloaded│ │
│  │ VAT Return Filing          │  │   22 April 2025             │ │
│  │ (if applicable)            │  │                              │ │
│  │                            │  │ ⏳ Return Filing In Progress│ │
│  │ [View All Deadlines →]    │  │   Started: 15 May 2025      │ │
│  │                            │  │   [Resume →]                │ │
│  └────────────────────────────┘  └─────────────────────────────┘ │
│                                                                     │
│  Tax Account Summary                                                │
│  ┌───────────────────────────────────────────────────────────────┐│
│  │ Current Balance: KSh 31,250 (payable)                         ││
│  │ Last Payment: KSh 15,000 on 10 May 2025                       ││
│  │                                                                 ││
│  │ [View Detailed Statement →]  [Make Payment →]                 ││
│  └───────────────────────────────────────────────────────────────┘│
│                                                                     │
│  💬 Need Help?  [Chat with AI Assistant]  [Help Center]  [FAQs]  │
│                                                                     │
└───────────────────────────────────────────────────────────────────┘
```

### Wireframe 2: Dashboard (Mobile - Vertical)

```
┌──────────────────────────┐
│ ☰  iTax      [🔔3] [👤] │
├──────────────────────────┤
│                          │
│ Hi Margaret              │
│                          │
│ ┌──────────────────────┐│
│ │ ⚠️ ACTION REQUIRED   ││
│ │                      ││
│ │ Tax Return Due       ││
│ │ in 12 days           ││
│ │                      ││
│ │ [File Return →]     ││
│ └──────────────────────┘│
│                          │
│ Quick Actions            │
│ ┌──────────┐ ┌────────┐│
│ │ 📝 File  │ │ 💰 Pay ││
│ │  Return  │ │        ││
│ └──────────┘ └────────┘│
│ ┌──────────┐ ┌────────┐│
│ │ 📊 View  │ │ 📄 Docs││
│ │  Ledger  │ │        ││
│ └──────────┘ └────────┘│
│                          │
│ ┌──────────────────────┐│
│ │ 📅 Next Deadline     ││
│ │ ──────────────────   ││
│ │ Income Tax Payment   ││
│ │ 30 June 2025         ││
│ │ KSh 31,250           ││
│ │                      ││
│ │ [View All →]        ││
│ └──────────────────────┘│
│                          │
│ ┌──────────────────────┐│
│ │ Recent Activity      ││
│ │ ──────────────────   ││
│ │ ✓ PAYE Filed         ││
│ │   10 May 2025        ││
│ │                      ││
│ │ ✓ PIN Downloaded     ││
│ │   22 Apr 2025        ││
│ └──────────────────────┘│
│                          │
│ Balance: KSh 31,250 ↓   │
│                          │
├──────────────────────────┤
│ [🏠] [📝] [💰] [👤]    │ ← Sticky bottom nav
└──────────────────────────┘
```

### Wireframe 3: Return Selection Screen

```
┌───────────────────────────────────────────────────────────────────┐
│ ← Back to Dashboard          File Tax Return                      │
├───────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Which return do you need to file?                                 │
│  Select the return type that matches your situation                │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ 👤 Individual Income Tax (IT1)                              │ │
│  │                                                               │ │
│  │ For salaried employees and individuals with simple income    │ │
│  │ (employment, pension, interest, dividends)                   │ │
│  │                                                               │ │
│  │ This is for you if:                                          │ │
│  │ ✓ You have a job or receive a pension                       │ │
│  │ ✓ You're not running a business                             │ │
│  │ ✓ You want to claim personal tax reliefs                    │ │
│  │                                                               │ │
│  │ Estimated time: 15 minutes                                   │ │
│  │ Documents needed: PIN, P9 Form, Bank Statements (if claiming │ │
│  │ reliefs)                                                      │ │
│  │                                                               │ │
│  │                                          [Select This →]    │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ 💼 Individual with Business Income (IT2)                    │ │
│  │                                                               │ │
│  │ For self-employed individuals, sole proprietors, and those   │ │
│  │ with rental or business income                               │ │
│  │                                                               │ │
│  │ This is for you if:                                          │ │
│  │ ✓ You run your own business or are self-employed            │ │
│  │ ✓ You have rental property income                           │ │
│  │ ✓ You have both employment and business income              │ │
│  │                                                               │ │
│  │ Estimated time: 25 minutes                                   │ │
│  │ Documents needed: PIN, P9 (if applicable), Business records, │ │
│  │ Bank statements                                               │ │
│  │                                                               │ │
│  │                                          [Select This →]    │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ 🏢 VAT Return (VAT 3)                                        │ │
│  │                                                               │ │
│  │ Monthly value-added tax return for VAT-registered businesses │ │
│  │                                                               │ │
│  │ This is for you if:                                          │ │
│  │ ✓ Your business is VAT-registered                           │ │
│  │ ✓ You need to file monthly VAT returns                      │ │
│  │ ✓ You have sales and purchases to declare                   │ │
│  │                                                               │ │
│  │ Estimated time: 10 minutes                                   │ │
│  │ Documents needed: Sales records, Purchase invoices           │ │
│  │                                                               │ │
│  │                                          [Select This →]    │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ [View All Return Types ↓]                                   │ │
│  │                                                               │ │
│  │ PAYE Returns • Corporate Tax • Turnover Tax • Excise Duty   │ │
│  │ Customs Declarations • Other Returns                         │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ 💬 Not sure which return to file?                           │ │
│  │                                                               │ │
│  │ Our AI assistant can help you choose the right return type  │ │
│  │ based on your situation.                                     │ │
│  │                                                               │ │
│  │ [Ask AI Assistant]  [View User Guide]  [Contact Support]    │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
└───────────────────────────────────────────────────────────────────┘
```

### Wireframe 4: Multi-Step Form (Step 2 - Income Details)

```
┌───────────────────────────────────────────────────────────────────┐
│ ← Back               Individual Income Tax Return                  │
├───────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Progress: ████████░░░░░░░░ Step 2 of 5: Income Information       │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ Enter your income details from your P9 form                  │ │
│  │                                                               │ │
│  │ Need help? [📹 Watch Tutorial]  [📄 View Sample P9]         │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  Employment Income                                                  │
│  ────────────────────────────────────────────────────────────     │
│                                                                     │
│  Gross Salary (Annual) ⓘ                                           │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ KSh  [540,000.00                                     ]      │ │
│  └─────────────────────────────────────────────────────────────┘ │
│  ✓ This is your total salary before tax (from P9 Box A)           │
│                                                                     │
│  Benefits (Housing, Car, etc.) ⓘ                                   │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ KSh  [0.00                                           ]      │ │
│  └─────────────────────────────────────────────────────────────┘ │
│  ℹ️ Enter value of benefits provided by employer                  │
│                                                                     │
│  ───────────────────────────────────────────────────────────────  │
│                                                                     │
│  Other Income                                                       │
│  ────────────────────────────────────────────────────────────     │
│                                                                     │
│  Do you have rental income? ⓘ                                      │
│  ⦿ No    ○ Yes                                                    │
│                                                                     │
│  ℹ️ Income from renting out property, land, or rooms               │
│                                                                     │
│  Do you have business income? ⓘ                                    │
│  ⦿ No    ○ Yes                                                    │
│                                                                     │
│  ℹ️ Income from self-employment or business activities             │
│                                                                     │
│  Do you have interest or dividend income? ⓘ                        │
│  ⦿ No    ○ Yes                                                    │
│                                                                     │
│  ℹ️ Interest from bank accounts or dividends from investments      │
│                                                                     │
│  ───────────────────────────────────────────────────────────────  │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ 📊 Tax Estimate (so far)                                     │ │
│  │                                                               │ │
│  │ Total Income:          KSh 540,000                           │ │
│  │ Estimated Tax:         KSh  49,500                           │ │
│  │                                                               │ │
│  │ ℹ️ This will be refined as you add deductions in Step 3      │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ [← Back to Step 1]  [💾 Save Draft]  [Next: Deductions →]  │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  💬 Questions? [Chat with AI Assistant]  [FAQs]  [Help Center]    │
│                                                                     │
│  ⚠️ Your progress is automatically saved every 30 seconds          │
│                                                                     │
└───────────────────────────────────────────────────────────────────┘

Tooltip Example (when user hovers/taps ⓘ on "Gross Salary"):
┌─────────────────────────────────────────────────┐
│ Gross Salary                                    │
│ ─────────────────────────────────────────────  │
│                                                  │
│ This is your total salary before any tax or     │
│ other deductions.                                │
│                                                  │
│ Where to find it:                                │
│ • Look at your P9 form from your employer       │
│ • Find "Box A: Gross Salary"                    │
│ • It's usually your monthly salary × 12 months  │
│                                                  │
│ Example: If you earn KSh 45,000/month, your     │
│ gross annual salary is KSh 540,000              │
│                                                  │
│ [Got it]                                        │
└─────────────────────────────────────────────────┘
```

### Wireframe 5: Review & Submit Screen

```
┌───────────────────────────────────────────────────────────────────┐
│ ← Back               Individual Income Tax Return                  │
├───────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Progress: ████████████████ Step 5 of 5: Review & Submit          │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ Please review your return before submitting                  │ │
│  │ You can edit any section by clicking the pencil icon         │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ 1. Personal Information                          [✏️ Edit]  │ │
│  │ ───────────────────────────────────────────────────────────  │ │
│  │ Name:           Margaret Wanjiru Kamau                       │ │
│  │ PIN:            A234567890Z                                  │ │
│  │ ID Number:      12345678                                     │ │
│  │ Email:          margaret@email.com                           │ │
│  │ Phone:          0722XXXXXX                                   │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ 2. Income                                        [✏️ Edit]  │ │
│  │ ───────────────────────────────────────────────────────────  │ │
│  │ Gross Salary:           KSh 540,000.00                       │ │
│  │ Benefits:               KSh       0.00                       │ │
│  │ Rental Income:          KSh       0.00                       │ │
│  │ Business Income:        KSh       0.00                       │ │
│  │ Interest/Dividends:     KSh       0.00                       │ │
│  │ ─────────────────────────────────                           │ │
│  │ Total Income:           KSh 540,000.00                       │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ 3. Deductions & Tax Reliefs                      [✏️ Edit]  │ │
│  │ ───────────────────────────────────────────────────────────  │ │
│  │ Personal Relief:        KSh  28,800.00 (Standard)            │ │
│  │ Mortgage Interest:      KSh   6,750.00                       │ │
│  │ Insurance Relief:       KSh       0.00                       │ │
│  │ ─────────────────────────────────                           │ │
│  │ Total Reliefs:          KSh  35,550.00                       │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ 4. Uploaded Documents                            [✏️ Edit]  │ │
│  │ ───────────────────────────────────────────────────────────  │ │
│  │ ✓ P9 Form                        P9_Margaret_2024.pdf       │ │
│  │ ✓ Bank Statement                 BankStmt_Mortgage.pdf      │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ 📊 Tax Calculation                                           │ │
│  │ ═══════════════════════════════════════════════════════════  │ │
│  │                                                               │ │
│  │ Total Income:                             KSh 540,000.00     │ │
│  │ Less: Allowable Deductions:               KSh       0.00     │ │
│  │                                           ─────────────      │ │
│  │ Taxable Income:                           KSh 540,000.00     │ │
│  │                                                               │ │
│  │ Tax on Taxable Income:                    KSh  44,825.00     │ │
│  │ Less: Personal Relief:                    KSh  28,800.00     │ │
│  │ Less: Mortgage Interest Relief:           KSh   6,750.00     │ │
│  │                                           ─────────────      │ │
│  │ Tax Payable:                              KSh   9,275.00     │ │
│  │                                                               │ │
│  │ PAYE Already Paid (from P9):              KSh  42,000.00     │ │
│  │                                           ═════════════      │ │
│  │ REFUND DUE TO YOU:                        KSh  32,725.00     │ │
│  │                                           ═════════════      │ │
│  │                                                               │ │
│  │ ✓ You have overpaid and are due a refund!                   │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  Declaration                                                        │
│  ────────────────────────────────────────────────────────────     │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ ☐ I declare that the information provided in this return is │ │
│  │   true, correct, and complete to the best of my knowledge.  │ │
│  │                                                               │ │
│  │   I understand that providing false information is an        │ │
│  │   offense under the Tax Procedures Act.                      │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ [← Back to Edit]                    [Submit Return 🚀]      │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  ⚠️ Important Notes:                                               │
│  • After submission, you cannot edit this return                   │
│  • You will receive confirmation via email and SMS                 │
│  • Refund will be processed within 30 days if approved             │
│  • Keep the confirmation receipt for your records                  │
│                                                                     │
└───────────────────────────────────────────────────────────────────┘

Note: "Submit Return" button is disabled (grayed out) until user checks declaration box
```

### Wireframe 6: Success Confirmation Screen

```
┌───────────────────────────────────────────────────────────────────┐
│                          iTax Kenya                                │
├───────────────────────────────────────────────────────────────────┤
│                                                                     │
│                             ✓                                      │
│                      (animated checkmark)                          │
│                                                                     │
│                        Success!                                    │
│              Your tax return has been filed                        │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ Return Details                                                │ │
│  │ ───────────────────────────────────────────────────────────  │ │
│  │                                                               │ │
│  │ Reference Number:    ITR-2025-047XX                           │ │
│  │ Return Type:         Individual Income Tax (IT1)              │ │
│  │ Tax Year:            2024/2025                                │ │
│  │ Filed On:            15 May 2025 at 20:34                     │ │
│  │                                                               │ │
│  │ Status:              ✓ Successfully Submitted                 │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ 📊 Tax Summary                                                │ │
│  │ ───────────────────────────────────────────────────────────  │ │
│  │                                                               │ │
│  │ Tax Calculated:      KSh   9,275.00                           │ │
│  │ PAYE Already Paid:   KSh  42,000.00                           │ │
│  │                      ───────────────                          │ │
│  │ Refund Due:          KSh  32,725.00                           │ │
│  │                                                               │ │
│  │ ✓ You have overpaid and are eligible for a tax refund!       │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ What happens next?                                            │ │
│  │ ───────────────────────────────────────────────────────────  │ │
│  │                                                               │ │
│  │ 1. ✉️ Confirmation email sent to margaret@email.com          │ │
│  │    Check your inbox in the next few minutes                  │ │
│  │                                                               │ │
│  │ 2. 📱 SMS confirmation sent to 0722XXXXXX                    │ │
│  │    You should receive it immediately                         │ │
│  │                                                               │ │
│  │ 3. ⏳ KRA will review your return                             │ │
│  │    Usually takes 5 working days                              │ │
│  │                                                               │ │
│  │ 4. 💰 Refund will be processed to your bank account          │ │
│  │    Estimated timeline: 2-4 weeks after approval              │ │
│  │    You'll receive notification when refund is approved       │ │
│  │                                                               │ │
│  │ 5. 📄 Download and keep your confirmation receipt            │ │
│  │    You may need this for future reference                    │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  Actions                                                            │
│  ────────────────────────────────────────────────────────────     │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ [📄 Download Receipt PDF]        [✉️ Email Receipt]         │ │
│  │                                                               │ │
│  │ [📋 View in My Tax Returns]      [📊 View Tax Ledger]       │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ [🏠 Back to Dashboard]          [📝 File Another Return]    │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ 💬 How was your experience?                                  │ │
│  │                                                               │ │
│  │ Help us improve iTax by sharing your feedback               │ │
│  │                                                               │ │
│  │ [😊 Great!]  [😐 Okay]  [😞 Could be better]               │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  Questions or need help? [Chat with Support]  [Help Center]        │
│                                                                     │
└───────────────────────────────────────────────────────────────────┘
```

---

## Navigation Patterns

### Primary Navigation Structure

```
Navigation Hierarchy:
│
├─ Level 1: Top Bar (Always Visible)
│  ├─ iTax Logo (click → Dashboard)
│  ├─ Notifications (🔔)
│  ├─ Profile Menu (👤)
│  └─ Settings (⚙️)
│
├─ Level 2: Main Navigation (Desktop: Sidebar | Mobile: Hamburger)
│  ├─ Dashboard / Home
│  ├─ File Returns
│  ├─ Make Payments
│  ├─ My Tax Account
│  ├─ Documents & Certificates
│  ├─ Help & Support
│  └─ [Agent Only] Client Management
│
├─ Level 3: Context Navigation (Breadcrumbs)
│  └─ Home > File Returns > Individual Tax > Step 2 of 5
│
└─ Level 4: In-Page Navigation
   ├─ Tabs (for related content)
   ├─ Step indicators (for multi-step processes)
   └─ Anchor links (for long pages)
```

### Mobile Navigation Pattern

```
Mobile Navigation Components:

1. Top App Bar
┌────────────────────────────┐
│ ☰  iTax      [🔔3] [👤]   │ ← Persistent
└────────────────────────────┘

2. Hamburger Menu (slides in from left)
┌────────────────────────────┐
│ ✕ Close                    │
├────────────────────────────┤
│ 🏠 Dashboard               │
│ 📝 File Returns           │
│ 💰 Make Payments          │
│ 📊 My Tax Account         │
│ 📄 Documents              │
│ 💬 Help & Support         │
│ ⚙️ Settings               │
│ 🚪 Logout                 │
└────────────────────────────┘

3. Bottom Navigation Bar (context-specific)
┌────────────────────────────┐
│ [🏠 Home] [📝 File] [💬 Help]│ ← Task-specific
└────────────────────────────┘
```

### Breadcrumb Navigation

```
Desktop:
┌───────────────────────────────────────────────────────────┐
│ Home > File Returns > Individual Tax (IT1) > Step 3 of 5 │
│ (Each clickable to navigate back)                         │
└───────────────────────────────────────────────────────────┘

Mobile:
┌────────────────────────────┐
│ ← Step 3 of 5             │ ← Simple back + context
│   Deductions & Reliefs     │
└────────────────────────────┘
```

---

## Error Flows

### Error Flow 1: Field Validation Error

```
User Journey with Error:

Step 1: User enters invalid PIN format
┌────────────────────────────┐
│ PIN Number                 │
│ [A12345________]           │ ← User enters incomplete PIN
└────────────────────────────┘
        │ (User tabs away from field)
        ▼
┌────────────────────────────┐
│ ❌ PIN Number              │
│ [A12345________]           │
│ ⚠️ PIN must be exactly 11  │
│    characters.             │
│    Example: A001234567Z    │
│                            │
│ [Learn about PIN format]   │
└────────────────────────────┘
        │ (User corrects)
        ▼
┌────────────────────────────┐
│ ✓ PIN Number               │
│ [A001234567Z___]           │
│ ✓ Valid PIN format         │
└────────────────────────────┘
```

### Error Flow 2: Submission Validation Error

```
User attempts to submit with errors:

Step 1: User clicks "Submit"
┌────────────────────────────┐
│ [← Back]  [Submit Return 🚀]│ ← User clicks
└────────────────────────────┘
        │
        ▼
Step 2: System validates, finds errors
┌─────────────────────────────────────────────┐
│ ❌ Cannot Submit - 3 Issues Found           │
│ ─────────────────────────────────────────── │
│                                              │
│ 1. ❌ Required Field Missing                │
│    Section: Income Details (Step 2)         │
│    Field: "Gross Salary"                    │
│    Action: [Go to Step 2 and fill field]    │
│                                              │
│ 2. ⚠️ Invalid Format                        │
│    Section: Personal Info (Step 1)          │
│    Field: "Email Address"                   │
│    Issue: Must be valid email format        │
│    Action: [Go to Step 1 and correct]       │
│                                              │
│ 3. ⚠️ Document Not Uploaded                 │
│    Section: Supporting Docs (Step 4)        │
│    Document: "P9 Form" (required)           │
│    Action: [Go to Step 4 and upload]        │
│                                              │
│ ─────────────────────────────────────────── │
│ [Fix All Issues Automatically] [Review Each]│
└─────────────────────────────────────────────┘
        │ (User clicks "Fix All" or individual links)
        ▼
System navigates to first error, highlights field
┌─────────────────────────────────────────────┐
│ ← Back          Step 2 of 5: Income Details │
│ Progress: ████████░░░░░░░░                  │
│                                              │
│ ⚠️ Please complete highlighted fields       │
│                                              │
│ Gross Salary (Annual) ⓘ                     │
│ ┌─────────────────────────────────────────┐│
│ │ KSh [________________________] ← REQUIRED││
│ └─────────────────────────────────────────┘│
│ ❌ This field is required                   │
│                                              │
│ Please enter your gross annual salary from  │
│ your P9 form.                                │
│                                              │
│ [Next: Fix Email Address →]                 │
└─────────────────────────────────────────────┘
```

### Error Flow 3: System Error / Network Failure

```
User submits return, network fails:

Step 1: Submission in progress
┌────────────────────────────┐
│ ⏳ Submitting your return...│
│ Please wait...             │
└────────────────────────────┘
        │ (Network timeout)
        ▼
Step 2: Error detected, user notified
┌─────────────────────────────────────────────┐
│ ⚠️ Submission Failed                        │
│ ─────────────────────────────────────────── │
│                                              │
│ We couldn't submit your return due to a     │
│ connection issue.                            │
│                                              │
│ Your data has been saved automatically.     │
│ No information was lost.                     │
│                                              │
│ What to do next:                             │
│ 1. Check your internet connection           │
│ 2. Try submitting again                      │
│ 3. If problem persists, contact support     │
│                                              │
│ Error Code: NET_TIMEOUT_001                 │
│ Time: 15 May 2025, 20:35                    │
│                                              │
│ [Try Again]  [Save & Exit]  [Contact Support]│
└─────────────────────────────────────────────┘
        │ (User clicks "Try Again")
        ▼
┌────────────────────────────┐
│ ⏳ Retrying submission...  │
│ Attempt 2 of 3             │
└────────────────────────────┘
        │ (Success!)
        ▼
┌────────────────────────────┐
│ ✓ Success!                 │
│ Your return has been filed │
└────────────────────────────┘
```

### Error Flow 4: Anomaly Detection Warning

```
User enters unusually high value:

Step 1: User enters sales amount
┌────────────────────────────┐
│ Total Monthly Sales        │
│ [12,000,000________]       │ ← User enters 12M
└────────────────────────────┘
        │ (Field loses focus)
        ▼
Step 2: Smart validation triggers
┌─────────────────────────────────────────────┐
│ ⚠️ Please Verify This Amount                │
│ ─────────────────────────────────────────── │
│                                              │
│ You entered: KSh 12,000,000                 │
│                                              │
│ This seems unusually high for monthly sales.│
│                                              │
│ Common reasons:                              │
│ • Did you mean KSh 1,200,000?               │
│ • Did you enter annual instead of monthly?  │
│ • Is this a special circumstance?           │
│                                              │
│ Your last 3 months:                          │
│ April: KSh 240,000                          │
│ March: KSh 230,000                          │
│ February: KSh 250,000                        │
│                                              │
│ [Change to 1,200,000]  [Keep 12,000,000]   │
│ [Enter Different Amount]                     │
└─────────────────────────────────────────────┘
        │ (User selects correction or confirms)
        ▼
Continues with validated amount
```

---

## Conclusion

These navigation flows and wireframes illustrate the redesigned iTax system's user-centered approach, emphasizing:

1. **Clear visual hierarchy** - Important elements stand out
2. **Consistent navigation** - Users always know where they are
3. **Progressive disclosure** - Complexity revealed as needed
4. **Error prevention** - Validation before submission
5. **Graceful error handling** - Specific, actionable error messages
6. **Mobile optimization** - Touch-friendly, thumb-zone aware
7. **Feedback loops** - System status always visible
8. **Multiple pathways** - Accommodating different user needs

These designs prioritize usability, accessibility, and efficiency while maintaining the compliance and security requirements of a government tax system.

---

**Document prepared for**: HCI Assignment - KRA iTax Analysis
**Document type**: Navigation Flows and Wireframes
**Version**: 1.0
**Date**: January 2026
