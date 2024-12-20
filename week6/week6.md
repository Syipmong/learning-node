# Week 6 Goals

Understanding JWT (JSON Web Token): What it is and why it’s used.
Implementing User Authentication: Setting up JWT-based authentication in Node.js.
User Authorization: Securing routes and restricting access based on roles.
Best Practices: Keeping your tokens and authentication flow secure.

## Understanding JWT (JSON Web Token)

### 1.1 What is JWT?

JWT (JSON Web Token) is a compact, URL-safe means of representing claims to be transferred between two parties. It consists of three parts:
Header: Contains metadata like the type of token and the hashing algorithm used.
Payload: Contains claims, which are statements about an entity (typically the user) and additional data.
Signature: Used to verify the token’s authenticity.
Example of a JWT:

```token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpvaG5Eb2UifQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

### 1.2 Why Use JWT?

Stateless Authentication: No need to store session information on the server.
Security: The server can verify the token's authenticity with the secret key, and it can’t be tampered with unless the secret is known.
Scalability: Suitable for microservices and APIs where you need to authenticate users across multiple systems.

## Implementing User Authentication with JWT in Node.js

### 2.1 Installing Necessary Packages

Install the following packages:

jsonwebtoken: For creating and verifying JWTs.
bcrypt: For hashing passwords securely.

```bash
npm install jsonwebtoken bcrypt
```

### 2.2 User Registration with Password Hashing

Let’s start by updating our User model to include a password field and implement password hashing during registration

### 2.3 User Login and Token Generation

## User Authorization

### 3.1 Creating a Middleware for Authentication

We create a middleware function that verifies the JWT before allowing access to protected routes.

# Reflection for Week 6: User Authentication with JWT and Authorization

## Topics Covered

JWT Authentication: Implemented JWT-based authentication for user login and registration.
Password Hashing: Used bcrypt to securely hash user passwords.
Protected Routes: Implemented middleware to protect routes and restrict access to authenticated users.
Authorization: Ensured only authorized users can access certain endpoints by verifying the JWT.
Key Learnings:

JWTs provide a stateless way to authenticate users in modern web applications.
Middleware in Express.js makes it easy to secure routes and add authorization logic.
Password security with hashing is essential for protecting user data.