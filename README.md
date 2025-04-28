# Restaurant Forum
A simple web application for restaurant recommendations and searches.

## Features
### User
* View all restaurants and the top 10 restaurants
* Collect and un-collect restaurants 
* Follow and unfollow other users
* View the newest restaurants and comments
* Edit personal profile details (name / avatar)

### Administrator
* Manage restaurant list
* Manage user permissions
* Manage the restaurant catecories

## Installation
### Prerequisites
- Ensure you have **Node.js (v18.15.0)** and **npm** installed.

### Steps
1. Clone the repository
```
git clone https://github.com/Edwinaeded/restaurant-forum.git
```
2. Navigate to the project directory
```
cd restaurant-forum
```
3. Install dependencies
```
npm install
```
4. Set up environment variables in a `.env` file (see `.env.example` for reference)

5. Create database  
   Ensure your database server (e.g., MySQL) is running, then create a new database.  
   If using Sequelize, you can run:
```
npx sequelize db:create
``` 

6. Run migrations to set up the database schema
```
npx sequelize db:migrate
```
7. (Optional) Seed database
```
npx sequelize db:seed:all
```
8. Start the development server
```
npm run dev
```
9. Access the application at http://localhost:3000