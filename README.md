# 🌲 The Wild Oasis

**[Live Demo: Click Here to View The Wild Oasis](YOUR_LIVE_LINK_HERE)**

> **💡 Test Credentials:** (To explore the dashboard without creating an account)
> - **Email:** test@example.com
> - **Password:** 12345678

The Wild Oasis is a modern, full-stack single-page web application designed for internal hotel management and operations. It features a comprehensive statistics dashboard, secure staff authentication, advanced booking and cabin management, and real-time data mutations. Built with React, React Query, Styled Components, and Supabase.

## Key Features

* **Dynamic Dashboard:** Visualizes critical business metrics such as recent sales, check-ins, and cabin occupancy rates over various timeframes (7, 30, or 90 days) using interactive charts.
* **Secure Authentication:** Robust user authentication and authorization system for hotel staff, allowing secure sign-ins, profile updates, and avatar uploads.
* **Advanced Cabin Management:** Full CRUD capabilities for hotel cabins, including adding new cabins, updating details, duplicating existing entries, and uploading cabin images to remote storage.
* **Comprehensive Booking System:** Complete lifecycle management for guest bookings, featuring multi-criteria filtering, sorting, seamless check-in (with optional breakfast add-ons), and instant check-out workflows.
* **Global Settings Control:** Real-time updates for hotel-wide configurations, such as minimum/maximum booking nights, breakfast prices, and maximum guests per cabin.
* **Persistent Dark Mode:** Full UI dark/light mode toggle with state persistence across sessions for enhanced user experience.

## Architecture & Tech Stack

This project implements modern front-end architectures and robust state-management patterns:

* **React (Vite):** Powering a fast, highly-responsive Single-Page Application (SPA) architecture.
* **React Query (TanStack Query):** Handles remote state management, seamless data fetching, automatic caching, prefetching, and optimistic mutations.
* **React Router:** Utilizes advanced declarative routing mechanisms for efficient application navigation.
* **Styled Components:** Implements component-scoped CSS-in-JS design system, facilitating clean, modular styling and native dark mode integration.
* **Supabase:** Serves as the real-time Backend-as-a-Service (BaaS), leveraging a PostgreSQL database, user authentication, and secure bucket storage for media uploads.
* **React Hook Form:** Manages complex form states, inputs, and client-side validation efficiently.
* **Recharts:** Renders responsive and interactive charts for the dashboard analytics.
* **React Hot Toast:** Provides elegant, non-intrusive toast notifications for user interactions.

## Acknowledgements

Developed as the flagship project in **Jonas Schmedtmann's Ultimate React Course**, demonstrating advanced enterprise-grade React patterns, custom hooks, and full-stack integration.