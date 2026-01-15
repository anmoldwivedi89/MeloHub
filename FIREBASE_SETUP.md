# Firebase Setup Guide for Spotify Clone

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project" or "Create a project"
3. Enter project name: `spotify-clone` (or any name you like)
4. Click "Continue"
5. Disable Google Analytics (optional) or enable it
6. Click "Create Project"

## Step 2: Enable Authentication Providers

### Enable Email/Password Authentication
1. In your Firebase project, click on "Authentication" in the left sidebar
2. Click "Get Started"
3. Go to "Sign-in method" tab
4. Click on "Email/Password"
5. Enable the first toggle (Email/Password)
6. Click "Save"

### Enable Google Sign-In
1. In the same "Sign-in method" tab
2. Click on "Google"
3. Enable the toggle
4. Select a support email from the dropdown (your email)
5. Click "Save"

**Note:** Google Sign-In will work automatically once enabled. No additional configuration needed!

## Step 3: Register Your Web App

1. In Firebase Console, click on the Web icon (</>) to add a web app
2. Give your app a nickname: `Spotify Clone Web`
3. Click "Register app"
4. Copy the Firebase configuration object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};
```

## Step 4: Update Your Code

Replace the Firebase configuration in these files:
- `login.html` (line ~250)
- `signup.html` (line ~290)
- `Index.html` (in the new auth script)

Find this section in each file:
```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

Replace it with YOUR actual Firebase config from Step 3.

## Step 5: Test Your App

1. Open `signup.html` in your browser
2. Create a new account with email and password
3. You should be redirected to `Index.html` after successful signup
4. Try logging out and logging in again with `login.html`

## Security Rules (Optional but Recommended)

If you plan to use Firestore or Realtime Database later:

1. Go to Firestore Database or Realtime Database in Firebase Console
2. Click on "Rules" tab
3. Set up basic security rules to protect user data

## Troubleshooting

### Error: "Firebase: Error (auth/configuration-not-found)"
- Make sure you've replaced the Firebase config with your actual values
- Check that you've enabled Email/Password authentication in Firebase Console

### Error: "Firebase: Error (auth/operation-not-allowed)"
- Enable Email/Password authentication in Firebase Console
- Go to Authentication > Sign-in method > Email/Password > Enable

### Users can't sign up
- Check browser console for errors (F12)
- Verify Firebase config is correct
- Make sure you're serving the files via HTTP (not just opening HTML files)
  - Use Live Server extension in VS Code, or
  - Run: `python -m http.server 8000` in the project folder

## Features Included

✅ User Registration (Sign Up)
✅ User Login
✅ **Google Sign-In** (One-click authentication)
✅ **Forgot Password** (Password reset via email)
✅ User Logout
✅ Protected Main Page (requires login)
✅ Password Strength Indicator
✅ Form Validation
✅ Error Handling
✅ Auto-redirect after login/signup
✅ Remember user session
✅ Beautiful Spotify-themed UI

## How to Use

### Sign Up
1. Open `signup.html`
2. Click "Continue with Google" for instant signup, OR
3. Fill in name, email, and password manually
4. Password strength indicator shows password quality
5. Click "Sign Up"

### Login
1. Open `login.html`
2. Click "Continue with Google" for instant login, OR
3. Enter email and password
4. Click "Forgot password?" if you forgot your password
5. Click "Log In"

### Forgot Password
1. Click "Forgot password?" on login page
2. Enter your registered email
3. Check your email for reset link
4. Click the link and set new password
5. Login with new password

## Next Steps

- Add user profile page
- Store user playlists in Firestore
- Add favorite songs feature
- Add social sharing
- Add playlist creation
