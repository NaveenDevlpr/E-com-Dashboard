************HAVE THE CURRENT VERSION OF NEXT.JS AND NODE FOR RUNNING THIS PROJECT************

This FullStack Application project focuses on visualizing data through charts with data sourced from a MySQL database. The technology stack employed includes Next.js, Tailwind CSS, Prisma, and MySQL, 


Development Workflow:

1. Data Acquisition:
The project initiated with the acquisition of an Excel file containing comprehensive sales details from an e-commerce store.

2. Database Setup:
The Excel data was uploaded to a MySQL database, and the necessary database configurations were established.

3. Frontend:
Utilizing Next.js 14, the frontend was crafted with HTML and Tailwind CSS, ensuring a visually appealing and responsive user interface.

4. API Implementation:
API calls were created using Next.js, establishing a communication bridge between the application and the MySQL database.

5. Prisma Integration:
Prisma ORM was implemented as the intermediary layer, facilitating seamless data retrieval and manipulation between the application and the MySQL database.

6. Data Visualization:
Chart visualizations were implemented using react-chart.js, allowing for dynamic and interactive representation of the sales data.

7. Navigation:
The application features a sidebar for easy navigation across different sections.



Key Technologies and Libraries:

1. Tech Stack:
Next.js: A comprehensive full-stack React framework.
Tailwind CSS: Employed for styling and ensuring responsiveness.
Prisma: Chosen as the ORM to interface between the application and MySQL database.
MySQL: Utilized for storing and managing the sales data.

2. Libraries:
react-chart.js: Integrated for dynamic and interactive chart visualizations.
framer-motion: Implemented for seamless animations and transitions.
Axios: Leveraged for efficient data fetching from the MySQL database.

3. State Management:
React Context API: Implemented for global state management, facilitating data sharing across all components.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.