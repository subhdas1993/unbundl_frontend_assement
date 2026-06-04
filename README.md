# Local Setup Guide

Follow the steps below to set up and run the project on your local machine.

## 1. Clone the Repository

```bash
git clone https://github.com/subhdas1993/unbundl_frontend_assement
```

## 2. Navigate to the Project Directory

```bash
cd unbundl_frontend_assement
```

## 3. Install Dependencies

Using npm:

```bash
npm install
```

> Replace the values above with the actual configuration required for the project.

## 4. Start the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## 5. Build for Production(if neccessary)

```bash
npm run build
```

## 6. Preview the Production Build(if neccessary)

```bash
npm run preview
```

## Prerequisites

Make sure the following are installed on your system:

* Node.js (v24 or later recommended)
* npm
* Git

## Troubleshooting

If you encounter dependency-related issues, try removing the existing dependencies and reinstalling them:

```bash
rm -rf node_modules package-lock.json
npm install
```
