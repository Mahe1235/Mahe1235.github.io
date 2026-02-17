---
title: "Mafia: Real-time Multiplayer Web Game"
date: "2024-09-01"
description: "Built with AI-assisted coding using Cursor after a 5-year coding hiatus. A real-time multiplayer web game that demonstrates the power of AI tools in hands-on development."
emoji: "🎭"
tags: ["AI-Assisted Coding", "Multiplayer", "WebSockets"]
category: "Game"
categoryColor: "bg-purple-100 text-purple-700"
---

## Project Overview

A sophisticated web implementation of the classic social deduction game Mafia (also known as Werewolf), built with modern web technologies. Players join virtual rooms to engage in a thrilling game of deception, strategic thinking, and social deduction.

## Key Features

### Core Gameplay

- **Real-time Multiplayer:** Seamless gameplay experience using Pusher WebSockets for instant state updates
- **Dynamic Role System:** Intelligent role distribution algorithm that adapts to player count
- **Day/Night Cycle:** Full implementation of the classic Mafia gameplay loop
- **Role-based Actions:** Special abilities for Mafia, Detective, Doctor, and other roles
- **Voting Mechanism:** Intuitive system for elimination decisions

### User Experience

- **Intuitive Room Management:** Easy room creation with shareable links
- **Host Dashboard:** Comprehensive controls for the game host
- **Role Guides:** Integrated help system explaining each role's abilities
- **Responsive Design:** Fully optimized for both desktop and mobile play
- **Immersive UI:** Atmospheric design with day/night visual transitions

### Technical Highlights

- **Modern Stack:** Built with Next.js 14, React 18, and TypeScript
- **Real-time Architecture:** Bidirectional WebSocket communication using Pusher
- **State Management:** Custom React Context implementation for game state
- **Error Handling:** Robust error boundary system for uninterrupted gameplay
- **Performance Optimization:** Efficient rendering with React memo and useMemo

## Technology Stack

### Frontend

- **Framework:** Next.js 14 with App Router
- **UI Library:** React 18 with TypeScript
- **Styling:** Tailwind CSS with custom theme
- **Components:** ShadCN UI with custom modifications
- **Animation:** Framer Motion for smooth transitions

### Backend

- **API Routes:** Next.js API endpoints
- **Real-time:** Pusher WebSockets
- **Authentication:** Next-Auth (planned)
- **Database:** Prisma ORM with PostgreSQL (planned)

### Development & Deployment

- **Version Control:** Git with GitHub Actions CI/CD
- **Code Quality:** ESLint, Prettier, Husky pre-commit hooks
- **Testing:** Jest and React Testing Library
- **Deployment:** Vercel with Edge Functions

## Implementation Details

### Architecture

The application follows a client-server architecture with stateless API routes handling game logic and WebSockets managing real-time updates. Game state is synchronized across all connected clients with optimistic UI updates for smooth interactions.

### Key Technical Challenges Solved

- **Consistent State Synchronization:** Implemented a robust system to ensure all players have identical game states
- **Graceful Disconnection Handling:** Developed recovery mechanisms for players who briefly lose connection
- **Role Balancing Algorithm:** Created a dynamic system that provides balanced gameplay regardless of player count
- **Secure Room System:** Implemented protection against unauthorized access to game rooms

## Future Enhancements

### Gameplay Expansion

- Advanced roles with unique abilities
- Custom game mode configuration
- Game history and statistics tracking

### Technical Improvements

- Voice chat integration using WebRTC
- Progressive Web App (PWA) capabilities
- Offline play support with local multiplayer

### Community Features

- Global leaderboards and achievements
- Tournament system
- Friend lists and invitations

## Development Journey

This project began as a personal challenge to build a complex real-time application with modern web technologies. The most significant hurdles involved managing state synchronization across multiple clients and creating a balanced role distribution system. Through iterative development and testing with real players, I refined the user experience to create an engaging and intuitive gameplay flow.
