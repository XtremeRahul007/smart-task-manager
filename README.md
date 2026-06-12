# Smart Task Manager

A modern offline-first task management application built with TypeScript, SCSS, IndexedDB, Vite, and Progressive Web App (PWA) technologies.

The project was created as both a productivity tool and a deep frontend engineering exercise focused on scalable architecture, maintainable code organization, browser-native APIs, and framework-independent application design.

---

## Live Demo

https://xtremerahul007.github.io/smart-task-manager/

---

## Features

### Task Management
- Create, edit, inspect, and manage tasks
- Dedicated task creation and editing workflows
- Task detail inspection view
- Empty-state handling
- Modular rendering architecture

### Offline-First Architecture
- IndexedDB-powered persistent storage
- No backend dependency
- Fully functional without an internet connection
- LocalStorage-powered user preferences

### Progressive Web App
- Installable on desktop and mobile devices
- Offline caching via Service Worker
- Native app-like experience
- Fast startup and loading times

### Theme System
- Light and Dark mode support
- Persistent theme preferences
- Dynamic icon and UI theming

### User Experience
- Responsive layout
- Sidebar navigation
- Toast notifications
- Popup and overlay systems
- Search interface
- Click interaction animations
- Loading state management

---

## Technology Stack

### Frontend
- HTML5
- TypeScript
- SCSS
- Vite

### Storage
- IndexedDB
- LocalStorage

### PWA
- vite-plugin-pwa
- Service Workers
- Web App Manifest

### Architecture
- Component-driven design
- View-state separation
- Service-oriented frontend logic
- Modular rendering systems

---

## Architecture Overview

The application follows a layered architecture:

### Components
Reusable UI modules and interaction systems.

### Views
Dedicated rendering logic for each application screen.

### Services
Business logic, controllers, and application workflows.

### State Management
Centralized UI and view state handling.

### Database Layer
IndexedDB abstraction and persistence utilities.

### Utilities
Reusable helper functions and formatting systems.

This separation of concerns allows the application to remain maintainable as new features are introduced.

---

## Development Philosophy

This project intentionally avoids frontend frameworks in order to explore:

- Browser-native APIs
- Scalable TypeScript architecture
- Modular design principles
- Long-term maintainability
- Performance-conscious development

The goal is to understand how modern frontend applications work beneath framework abstractions.

---

## Installation

### Clone the repository

```bash
git clone https://github.com/XtremeRahul007/smart-task-manager.git
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

---

## Project Structure

```txt
public/
src/
├── styles/
├── ts/
index.html
package.json
tsconfig.json
vite.config.ts
```

---

## Future Roadmap

### Task System
- Advanced filtering
- Task categorization
- Smart prioritization
- Search indexing

### User Experience
- Drag-and-drop interactions
- Keyboard shortcuts
- Accessibility improvements
- Enhanced animations

### Platform Features
- Cloud synchronization
- Optional backend integration
- Cross-device syncing
- Push notifications

---

## Learning Goals

This project serves as:

- A real-world productivity application
- A frontend architecture learning project
- A TypeScript engineering exercise
- A Progressive Web App implementation
- A demonstration of scalable browser-based application design

---

## Author

Built as part of a long-term journey toward professional software engineering, full-stack development, and scalable application architecture using modern web technologies.