# Week 5 Goals

Introduction to Databases: Understanding the basics of databases (SQL vs NoSQL).
Setting Up MongoDB: Connecting Node.js to MongoDB.
CRUD Operations with MongoDB: Performing Create, Read, Update, and Delete operations in MongoDB using Mongoose.
Handling Errors and Validation: Implementing validation and handling errors.
Exploring SQL (Optional): Introduction to SQL and how to work with databases like MySQL or PostgreSQL if you prefer SQL.

## Introduction to Databases (SQL vs NoSQL)

### SQL vs NoSQL

1.1 SQL Databases:
Relational: Data is organized into tables (rows and columns).
Examples: MySQL, PostgreSQL, SQLite.
Structured Data: Requires a schema (predefined structure) for the data.
When to Use: When relationships between entities are important, or when complex queries and transactions are needed.
1.2 NoSQL Databases:
Non-relational: Data is stored in collections, usually in JSON-like documents.
Examples: MongoDB, CouchDB.
Flexible Schema: No fixed schema, making it ideal for rapidly evolving data structures.
When to Use: When you need high scalability or are working with large volumes of unstructured data.
Since MongoDB is one of the most popular NoSQL databases and pairs well with Node.js, we will focus on MongoDB in this session.

## Reflection for Week 5: Working with Databases

### Key Takeaways

Topics Covered:

SQL vs NoSQL: Understanding the differences and when to use each.
MongoDB Setup: Connected Node.js to a MongoDB database using Mongoose.
CRUD Operations: Implemented full CRUD functionality for users in MongoDB.
Validation and Error Handling: Added validation rules and error handling in Mongoose.
Optional SQL: Brief introduction to using SQL with Node.js.
Key Learnings:

Mongoose makes it easy to work with MongoDB and define schemas for data.
Validation in Mongoose ensures that data is saved in the correct format.
CRUD operations with a database allow us to persist data in a structured way, beyond just in-memory storage.