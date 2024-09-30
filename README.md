# Meeting Room Booking System

A web-based application that allows users to book meeting rooms seamlessly. This system includes role-based access for admins and users, allowing administrators to manage rooms, slots, and bookings.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- User sign-up, login, and role-based authentication (user/admin)
- Admin can manage rooms, slots, and bookings
- Real-time room availability checking
- Slot creation with specific time ranges and durations
- Booking process with room details, available slots, and confirmation
- Optimistic updates and real-time feedback
- User profile management
- Soft-delete feature for room management
- Toast notifications for actions (e.g., successful registration)
- Payment integration for demo purposes

## Technologies Used

- **Frontend**: React, Redux Toolkit, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js, TypeScript, Mongoose (MongoDB)
- **Database**: MongoDB
- **API Management**: REST API with role-based authorization using JWT
- **Other Libraries**: Zod (for validation), react-toastify (for notifications), JWT, bcrypt

## Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (locally or on the cloud)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/meeting-room-booking-system.git
   cd meeting-room-booking-system
