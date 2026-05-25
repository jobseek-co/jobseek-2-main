# Frontend Requirements: Sign Up & Login Pages

## Overview

Update the Sign Up and Login pages with a clean, modern, mobile-first design optimized for Nigerian mobile users. All changes should follow Jobseek branding guidelines.

---

## General Design Requirements

- **Mobile-First Approach**: Design for mobile devices first (primary user base in Nigeria)
- **Branding**: Incorporate Jobseek logo and brand colors throughout
- **Responsive Design**: Fully responsive on all screen sizes (mobile, tablet, desktop)
- **Clean UI**: Modern, minimal design with clear hierarchy
- **Accessibility**: WCAG 2.1 AA compliant

---

## Role Selection

**Requirement**: Add clear role selection during signup process

- Implement "Job Seeker" vs "Client / Company / Recruiter" selection
- Use simple visual cards or dropdown menu for selection
- This role selection must be clearly visible and easy to toggle
- Make role selection a key part of the signup flow
- Save role selection and use for appropriate dashboard/profile redirects

---

## Login Page Specifications

### Fields

- [ ] **Email** (required)
- [ ] **Password** (required)

### UI Elements

- [ ] **"Forgot Password?" link** - Must be functional
- [ ] **"Remember Me" checkbox** (optional) - Store preference in local storage or session
- [ ] **Social Login Buttons** - Google sign-in at minimum (other platforms optional)
- [ ] **Link to Sign Up Page** - Clear CTA for new users
- [ ] **Loading State** - Show loading spinner/state on submit button during authentication
- [ ] **Error Messages** - Display specific, user-friendly error messages:
  - "Invalid credentials" (for wrong email/password)
  - "Email not confirmed" (for unverified email)
  - "Account locked" (if applicable)
  - Clear, non-generic error handling

### Validation

- Email format validation
- Password field masking
- Prevent form submission while loading

---

## Sign Up Page Specifications

### Fields

- [ ] **Full Name** (required)
- [ ] **Email** (required, unique validation)
- [ ] **Password** (required)
- [ ] **Confirm Password** (required, must match)
- [ ] **Phone Number** (optional, but recommended - useful for verification & contact)
- [ ] **Role Selection** (required) - "Job Seeker" or "Client / Recruiter"
  - Implement as simple cards or dropdown menu
  - Pre-select if coming from role selection page

### UI Elements & Features

- [ ] **Password Strength Indicator**
  - Visual bar showing password strength (Red/Orange/Green)
  - Real-time feedback as user types
  - Minimum requirements display (e.g., "8+ characters, 1 uppercase, 1 number")

- [ ] **Terms & Privacy Policy**
  - Checkbox: "I agree to Terms & Privacy Policy"
  - Both "Terms" and "Privacy Policy" must be clickable links
  - Links open in new tab/modal with full content

- [ ] **Social Sign Up**
  - "Sign up with Google" button (minimum requirement)
  - Additional social options optional (Facebook, LinkedIn, etc.)

- [ ] **Loading State**
  - Show loading spinner/state on submit button during registration
  - Disable button during submission

- [ ] **Error Messages**
  - Email already registered
  - Passwords don't match
  - Invalid phone number format
  - Password too weak
  - Required field missing
  - Generic server error handling

### Redirect Flow

- [ ] **Post-Signup Redirect**
  - Option 1: Direct to email verification page
  - Option 2: Direct to role-specific dashboard
  - Option 3: Direct to profile completion page (based on role)
  - **Note**: Email verification should occur before full access
  - Show verification status/next steps clearly

### Validation

- Real-time field validation with visual feedback
- Phone number format validation (Nigerian format preferred)
- Email uniqueness check (with API call)
- Password match verification

---

## Email Verification Page

- [ ] **Display verification message** - "Check your email to verify your account"
- [ ] **Resend verification link** - Option to resend email if not received
- [ ] **Email change option** - Allow user to update email before verification
- [ ] **Auto-redirect** - Redirect to dashboard/profile once email is verified (if auto-verification is implemented)
- [ ] **Timeout handling** - Display option to resend if link expires

---

## Post-Login Redirect

- [ ] Redirect to role-specific dashboard:
  - **Job Seeker** → Job Seeker Dashboard
  - **Client/Recruiter** → Client Dashboard
- [ ] **First-time users**: Redirect to profile completion page if profile not complete

---

## Technical Considerations

1. **Form State Management**: Use React Context or state management library
2. **API Integration**: All authentication should call backend API endpoints
3. **Session Management**: Implement proper session/token handling
4. **CORS**: Ensure API calls handle CORS properly
5. **Security**:
   - Never log sensitive data
   - Implement rate limiting on login attempts
   - Use HTTPS only
   - Secure password storage (bcrypt/similar on backend)
   - CSRF protection if needed
6. **Analytics**: Track login/signup completion rates
7. **Error Tracking**: Implement error logging for debugging

---

## Design References

- **Mobile-Optimized**: Ensure touch-friendly buttons (min 44x44px)
- **Typography**: Clear hierarchy with readable font sizes
- **Colors**: Use Jobseek brand colors consistently
- **Spacing**: Proper padding/margins for visual clarity
- **Loading States**: Clear feedback for async operations
- **Micro-interactions**: Smooth transitions and feedback

---

## Priority Order

1. **High Priority**: Login page with email/password + error handling
2. **High Priority**: Sign up page with role selection + password strength
3. **Medium Priority**: Social login (Google)
4. **Medium Priority**: Email verification flow
5. **Low Priority**: "Remember Me" + additional social providers
6. **Low Priority**: Password reset flow enhancement

---

## Testing Checklist

- [ ] Mobile responsiveness on various devices
- [ ] Form validation works correctly
- [ ] Error messages display appropriately
- [ ] Social login integration works
- [ ] Loading states show during API calls
- [ ] Redirect flows work for all user roles
- [ ] Email verification link works
- [ ] Password strength indicator accurate
- [ ] Keyboard navigation works (accessibility)
- [ ] All links functional (Terms, Privacy, Forgot Password, Sign Up)

---

**Last Updated**: May 24, 2026
**Status**: Ready for Implementation
