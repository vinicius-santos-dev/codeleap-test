# CodeLeap Frontend Challenge

This is my solution for the frontend technical test provided by CodeLeap.

## Live demo

You can access the deployed version here:  
https://codeleap-test-mauve.vercel.app

## Features implemented

- [x] Signup modal
- [x] Username persistence via localStorage
- [x] Logout functionality
- [x] Create, update and delete posts using the provided API
- [x] Posts are only editable/deletable by their author
- [x] Responsive layout (mobile, tablet and desktop)
- [x] Form validation (empty input blocking)
- [x] Relative time for post creation (e.g. "about 2 hours ago")

## Username note

As instructed, the username is stored locally in the frontend.  
I used the following example usernames during development:

- "Vinícius Santos"
- "Jane Doe"
- "John Doe"

## Tech stack

- React + Vite + TypeScript
- TailwindCSS for styling
- React Query for API handling
- Context API for username state
- date-fns for time formatting

## Project structure

This project follows a Feature-based architecture:

```
├── src
│   ├── components # Shared UI components
│   ├── features
│   │   ├── auth # Signup modal and user handling
│   │   │   ├── context # Global context (username)
│   │   └── posts # Posts, create, edit and delete
```

## Environment variables

The backend base URL is set via a `.env` file:

```
VITE_API_BASE_URL=https://dev.codeleap.co.uk/careers/
```

## Running locally

```
npm install
npm run dev
```