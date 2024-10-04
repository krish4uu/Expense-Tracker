# Personal Expense Tracker

A modern personal expense tracker application built with React and Tailwind CSS. Users can add, edit, and delete expense entries while viewing a summary of their expenses.

## Features

- Add new expense entries
- View a list of all expenses
- Edit existing expenses
- Delete expenses from the list
- Summary section showing total expenses and expenses categorized by type
- Responsive design with a modern dark theme

## Technologies Used

- React
- Tailwind CSS
- JSON Server (for mocking API)

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (v12 or later)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
- [JSON Server](https://github.com/typicode/json-server) (for mocking API)

### Clone the Repository

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/expense-tracker.git
   ```
2. Navigate to the project directory:
   ```bash
   cd expense-tracker
   ```

### Install Dependencies

Install the required packages using npm:

```bash
npm install
```

### Set Up the Mock API

To set up the JSON server:

1. Navigate to the project root directory (where `db.json` is located).
2. Start the JSON server by running:
   ```bash
   json-server --watch db.json --port 5000
   ```
   - This will serve the mock API at `http://localhost:5000` 
   - View response json data: `http://localhost:5000/expenses` (reload once new data available) or open `db.json` file on root directory.

### Run the Application

In a new terminal window, run the following command to start the React application:

```bash
npm start
```

This will open the application in your default web browser at `http://localhost:3000`.

## Usage

- On the homepage, you can see a list of your expenses.
- To add a new expense, click on the "Add Expense" button.
- Fill in the required fields and click "Save".
- To edit an existing expense, click the "Edit" button next to the expense entry.
- To delete an expense, click the "Delete" button next to the respective entry.
