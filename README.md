# Smart Task Manager

A modern, offline-first smart task manager built using pure web technologies with a strong focus on scalable frontend architecture, modular TypeScript design, performance optimization, and maintainability.

This project is designed as both a productivity application and a deep architectural learning project that explores real-world frontend engineering patterns without relying on frameworks.

---

# Vision

The purpose of this project is to build more than a simple task manager.

It aims to create a production-style frontend architecture using:

- Modular TypeScript
- Structured SCSS architecture
- IndexedDB-based offline storage
- Scalable view/state separation
- Component-driven UI systems
- Service-oriented frontend logic

The project emphasizes long-term scalability, maintainability, and clean engineering practices from the beginning.

---

# Core Features

## Task Management
- Create tasks
- Edit existing tasks
- Inspect task details
- Idle/empty task states
- Task rendering system
- Planned filtering and sorting system
- Planned favourite/relevance system

## Offline-First Storage
- IndexedDB as primary database
- LocalStorage for lightweight preferences
- No backend dependency
- Persistent offline task management

## Authentication Layer
- User authentication flow
- Authentication guard system
- Logout handling
- Password visibility toggle
- Database reset support

## Theme System
- Light/Dark theme support
- Dynamic theme manager
- Theme toggle controller
- SVG-based icon theming

## UI/UX System
- Fully responsive layout
- SCSS architecture with separated layers
- Overlay and popup systems
- Sidebar navigation
- Search UI
- Toast notification system
- Profile interaction system
- Click interaction animations
- Loader system

---

# Current Architecture

The project follows a highly modular architecture where each system is separated by responsibility.

## Architectural Layers

### Components
Reusable UI interaction modules:
- Sidebar
- Search bar
- Popup menus
- Confirm popup
- Overlay controller
- Authentication form
- Profile interaction

### Views
Dedicated rendering logic for application screens:
- Create task view
- Edit task view
- Inspect task view
- Task list view
- Idle state view
- View manager system

### Services
Business logic and application controllers:
- Authentication services
- Task controller
- Task processor
- Toast notification service
- Loader service

### State Management
Centralized UI and view state handling:
- UI state management
- View state initialization
- Landing view controller

### Database Layer
Structured IndexedDB abstraction:
- Database initialization
- Database utilities
- Task storage handling

### Utility Layer
Reusable helper systems:
- Date formatting
- Text formatting
- Radio button handling
- Text counter utilities

---

# Project Structure

```txt
├── assets/
│   ├── fonts/
│   │   ├── inter.woff
│   │   └── inter.woff2
│   ├── icons/
│   │   ├── task-manager-light.ico
│   │   └── xtreme.ico
│   └── svgs/
│       ├── back.svg
│       ├── dark-mode.svg
│       ├── edit.svg
│       ├── filter.svg
│       ├── invisible.svg
│       ├── light-mode.svg
│       ├── menu.svg
│       ├── plus.svg
│       ├── recycle.svg
│       ├── reload.svg
│       ├── search.svg
│       └── visible.svg
├── src/
│   ├── styles/
│   │   ├── abstracts/
│   │   │   └── _variables.scss
│   │   ├── base/
│   │   │   ├── _base.scss
│   │   │   └── _reset.scss
│   │   ├── components/
│   │   │   ├── _confirm-popup.scss
│   │   │   ├── _overlay.scss
│   │   │   ├── _profile.scss
│   │   │   ├── _search.scss
│   │   │   ├── _sidebar.scss
│   │   │   ├── _toast.scss
│   │   │   └── _userServiceForm.scss
│   │   ├── layout/
│   │   │   ├── _app-grid.scss
│   │   │   ├── _app-loader.scss
│   │   │   ├── _aside.scss
│   │   │   ├── _footer.scss
│   │   │   ├── _header.scss
│   │   │   └── _task-container.scss
│   │   ├── themes/
│   │   │   ├── _icon.scss
│   │   │   └── _theme.scss
│   │   ├── views/
│   │   │   ├── _create-task.scss
│   │   │   ├── _idle-task.scss
│   │   │   ├── _inspect-task.scss
│   │   │   └── _task-list.scss
│   │   └── main.scss
│   └── ts/
│       ├── animations/
│       │   └── clickAnimation.ts
│       ├── components/
│       │   ├── authForm.ts
│       │   ├── confirmPopup.ts
│       │   ├── filterMenu.ts
│       │   ├── overLay.ts
│       │   ├── popupMenu.ts
│       │   ├── profileIcon.ts
│       │   ├── searchBar.ts
│       │   └── sideBar.ts
│       ├── db/
│       │   ├── dbUtils.ts
│       │   ├── indexedDB.ts
│       │   └── tasks.ts
│       ├── services/
│       │   ├── authGuard.ts
│       │   ├── authService.ts
│       │   ├── loaderService.ts
│       │   ├── taskController.ts
│       │   ├── taskProcessor.ts
│       │   └── toastService.ts
│       ├── state/
│       │   ├── uiState.ts
│       │   └── viewState.ts
│       ├── theme/
│       │   ├── themeManager.ts
│       │   └── themeToggle.ts
│       ├── utils/
│       │   ├── dateHandler.ts
│       │   ├── formatText.ts
│       │   ├── radioBtnHandler.ts
│       │   └── textCounter.ts
│       ├── views/
│       │   ├── createTaskView.ts
│       │   ├── editTaskView.ts
│       │   ├── idleView.ts
│       │   ├── inspectTaskView.ts
│       │   ├── taskFormView.ts
│       │   ├── taskListView.ts
│       │   └── viewManager.ts
│       └── main.ts
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

---

# Application Initialization System

The application uses a staged initialization architecture inside `main.ts`.

Modules are grouped into multiple execution layers:

## Critical Modules
Loaded first before application startup:
- IndexedDB initialization
- Authentication controller

## Semi-Critical Modules
Secondary systems:
- Overlay system
- Theme initialization
- Logout system
- Password visibility
- Database reset system

## Rendering Modules
Responsible for view rendering:
- View menu controller
- Create task rendering
- Idle view rendering

## UI Modules
Non-blocking interaction systems:
- Sidebar
- Popup menus
- Search focus
- Profile interactions
- Click animations

This layered startup architecture improves:
- Stability
- Debugging
- Scalability
- Controlled dependency loading

---

# Tech Stack

## Core Technologies
- HTML5
- TypeScript
- SCSS
- IndexedDB
- LocalStorage

## Styling Architecture
- SCSS Modules
- CSS Variables
- Flexbox
- CSS Grid
- Responsive Design Principles

## Development Philosophy
- No frontend frameworks
- Pure browser APIs
- Architecture-first development
- Modular scalability

---

# Styling Architecture

The SCSS structure is separated into multiple layers:

## Abstracts
Global variables and reusable tokens.

## Base
Reset styles and base styling rules.

## Components
Independent reusable UI components.

## Layout
Application-wide structural layout systems.

## Themes
Theme management and icon styling.

## Views
Page/view-specific styling modules.

This structure keeps styling scalable and maintainable as the application grows.

---

# Performance Goals

- Fast startup initialization
- Minimal runtime overhead
- Efficient IndexedDB handling
- Responsive rendering system
- Modular lazy-style architecture
- Mobile-first optimization

---

# Future Plans

## Task System Expansion
- Smart prioritization
- Favourite task engine
- Advanced filtering
- Search indexing
- Task categorization

## UX Improvements
- Drag and drop
- Keyboard shortcuts
- Improved animations
- Accessibility improvements

## Platform Features
- Progressive Web App (PWA)
- Cloud synchronization
- Optional backend integration
- Cross-device sync

---

# Purpose

This project serves as:

- A real-world productivity application
- A frontend architecture learning project
- A modular TypeScript engineering experiment
- A demonstration of scalable browser-based application design

---

# Author

Built as part of a deep learning journey into professional frontend engineering, scalable architecture design, and full-stack development principles using pure web technologies.