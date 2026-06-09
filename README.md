# PopX React Assignment

A pixel-perfect React.js implementation of the PopX mobile application UI based on the provided Adobe XD design.

## Deploy Link

https://popx-assignment-chi.vercel.app/

## GitHub Repository

Repository: https://github.com/Praveen775D/popx-assignment

---

## Features

* Landing Page
* Login Screen
* Registration Screen
* Account Settings Screen
* React Router Navigation
* Form Validation
* Local Storage Authentication
* Dynamic User Profile Display
* Responsive Mobile-Centered Layout
* Smooth Scrolling Support

---

## Technologies Used

* React.js
* React Router DOM
* JavaScript (ES6+)
* HTML5
* CSS3
* Vite

---

## Project Structure

src/

├── components/

│ └── MobileContainer.jsx

├── pages/

│ ├── Landing.jsx

│ ├── Login.jsx

│ ├── Register.jsx

│ └── Account.jsx

├── styles/

│ ├── login.css

│ ├── register.css

│ ├── account.css

│ └── global.css

├── App.jsx

└── main.jsx

---

## Validation Implemented

### Registration

* Full Name is required
* Phone Number is required
* Phone Number must contain exactly 10 digits
* Email Address is required
* Email format validation
* Password is required
* Password must be at least 8 characters
* Company Name is required

### Login

* Email validation
* Password validation
* Authentication using stored user credentials

---

## Authentication Flow

1. User registers through the Register page.
2. User information is stored in Local Storage.
3. Login validates credentials against stored data.
4. Successful login redirects to the Account page.
5. Account page dynamically displays registered user information.

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd popx-assignment
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Assignment Requirements Covered

* Pixel-perfect mobile UI implementation
* Mobile application centered on webpage
* Seamless navigation between screens
* Clean and maintainable React code
* Hosted application deployment
* Public GitHub repository
* Responsive design support

---

## Author

Praveen

Email: [upraveen776@gmail.com](mailto:upraveen776@gmail.com)

Contact: 7729806574
