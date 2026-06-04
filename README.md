# Local Setup Guide

Follow the steps below to set up and run the project on your local machine.

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository.git
```

## 2. Navigate to the Project Directory

```bash
cd your-repository
```

## 3. Install Dependencies

Using npm:

```bash
npm install
```

## 4. Configure Environment Variables

Create a `.env` file in the project root directory and add the required environment variables.

Example:

```env
VITE_API_URL=your_api_url
```

> Replace the values above with the actual configuration required for the project.

## 5. Start the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## 6. Build for Production

```bash
npm run build
```

## 7. Preview the Production Build

```bash
npm run preview
```

## Prerequisites

Make sure the following are installed on your system:

* Node.js (v18 or later recommended)
* npm
* Git

## Troubleshooting

If you encounter dependency-related issues, try removing the existing dependencies and reinstalling them:

```bash
rm -rf node_modules package-lock.json
npm install
```
