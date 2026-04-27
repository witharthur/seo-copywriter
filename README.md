# SEO Copywriter Pro 

A premium, full-stack application for generating high-conversion, SEO-optimized content. This project leverages a React-based frontend with a modern glassmorphism UI and a Node.js/Express backend to deliver structured SEO data for any product or category.

##  Features

- **Modern Glassmorphism UI**: A sleek, dark-mode interface with vibrant gradients and smooth micro-animations.
- **Structured SEO Generation**: Generates titles, meta descriptions, H1 tags, body content, and key feature bullets.
- **Conversion-Focused Copy**: Content is designed to meet Google search ranking best practices and drive user conversion.
- **Real-Time API Integration**: Seamless communication between the React frontend and Express backend.
- **Responsive Design**: Optimized for both desktop and mobile workflows.

##  Tech Stack

### Frontend
- **React**: Component-based UI logic.
- **Vite**: Ultra-fast build tool and development server.
- **Vanilla CSS**: Custom design system with modern CSS features (backdrop-filter, CSS variables, keyframe animations).
- **Inter Font**: Premium typography via Google Fonts.

### Backend
- **Node.js**: JavaScript runtime.
- **Express**: Fast, unopinionated web framework.
- **CORS & Body-Parser**: Middleware for secure and efficient API handling.

##  Project Structure

```text
seo-generator/
├── backend/
│   ├── server.js          # Express server and SEO logic
│   └── package.json       # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── App.jsx        # Main application logic
│   │   ├── App.css        # Component-specific styles
│   │   ├── index.css      # Global design system
│   │   └── main.jsx       # React entry point
│   ├── index.html         # HTML template
│   └── vite.config.js     # Vite configuration
└── README.md              # Project documentation
```

##  Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository** (if applicable) or navigate to the project folder.

2. **Setup Backend**:
   ```bash
   cd backend
   npm install
   ```

3. **Setup Frontend**:
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

You need to run both the backend and the frontend simultaneously.

1. **Start the Backend Server**:
   ```bash
   cd backend
   node server.js
   ```
   The server will start at `http://localhost:3001`.

2. **Start the Frontend Development Server**:
   ```bash
   cd frontend
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

##  Usage

1. Open the application in your browser.
2. Enter the **Product Name**, **Category**, and relevant **Keywords** (separated by commas).
3. Click **Generate SEO Content**.
4. The application will simulate an AI processing state and display the optimized SEO results in the right-hand panel.


