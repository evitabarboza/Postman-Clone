# Postman Clone

## Overview

The Postman Clone is a single-page web application built using ReactJS. It includes a modular component-based structure and uses Context API for state management. The current version supports sending GET requests, rendering API responses, and managing request history. The project is intended as a foundational version for building out more advanced request features (e.g., POST, PUT, DELETE).

## Features

* **GET Request Functionality**: Users can enter an API endpoint URL and receive data from that endpoint using the GET method.
* **Modern UI**: Responsive and clean UI built with React components.
* **Context API Integration**: Application state (e.g., request/response data) is managed through the Context API.
* **Reusable Components**: Modular design allows for easy extension and maintenance.
* **Project Scalability**: Structured with folders like `components`, `context`, `service`, and `utils` for easier scaling.

## Technologies Used

* **ReactJS**: Frontend library for building the UI.
* **JavaScript (ES6+)**: Logic and functional programming.
* **Context API**: For managing global state across the app.
* **Fetch API / Axios**: For making GET requests (depending on implementation in `service`).
* **CSS**: For component styling.

## Installation and Setup

### Prerequisites

* NodeJS and npm installed
* Web browser (e.g., Chrome, Firefox)

### Steps

1. **Clone the Repository**:

```bash
git clone https://github.com/evitabarboza/Postman-Clone.git
```

2. **Install Dependencies**:

```bash
cd Postman-Clone
npm install
```

3. **Run the Application**:

```bash
npm start
```

4. **Open in Browser**:

Visit `http://localhost:3000` to use the app.

## Usage

* Enter a valid API URL (e.g., `https://jsonplaceholder.typicode.com/posts`) in the input field.
* Press the "Send" or equivalent button.
* The response will be displayed below in a readable format.
* Only GET requests are currently supported.

## Project Structure

```
Postman-Clone/
│
├── public/                   # Public assets
├── src/
│   ├── assets/               # Images or other static assets
│   ├── components/           # Reusable UI components
│   ├── context/
│   │   └── DataProvider.jsx  # Context API logic for global state
│   ├── service/              # API request utilities
│   ├── utils/                # Helper functions
│   ├── App.js                # Main component
│   ├── index.js              # Entry point
│   ├── App.css               # Styles
│   └── index.css             # Global styles
│
├── README.md                 # This file
├── package-lock.json
├── .gitignore
└── package.json
```

## Contribution

If you have any suggestions or improvements (e.g., support for other HTTP methods), feel free to submit a pull request or open an issue on the GitHub repository.

## License

This project is open-source and available under the MIT License.

## Contact

For any inquiries, please contact me at [evitabarboza195@gmail.com](mailto:evitabarboza195@gmail.com)
