# Documentation

## 🌐 Overview

The Agrify Landing Page is the initial touchpoint designed to attract farmers, investors, and stakeholders to the platform. The primary goal of the landing page is to clearly communicate the mission and value proposition of Agrify, highlighting how it serves as a bridge between sustainable farming practices and market opportunities.

Through the landing page, users can explore:

### 🌱 What We Do:

Agrify provides innovative solutions for farmers, helping them improve yield through regenerative agriculture, access debt-free financing, and qualify for international export opportunities.

### ⚙️ Features:

- 📊 Carbon Emission Calculator: Allows farmers to calculate their carbon emissions and explore regenerative farming initiatives to offset them.
- 💸 Debt-Free Financing: Offers farmers opportunities to receive funding without accruing debt, fostering long-term sustainable growth.
- 🌍 Market Access: Helps farmers meet international export standards, opening doors to global markets and higher profitability.
- 🎯 Target Audience: The landing page caters to both farmers looking to enhance their agricultural practices and investors interested in supporting sustainable, high-yield farming initiatives.
  <br />

## 🛠️ Technologies

The Agrify Landing Page is built using modern technologies that ensure scalability, performance, and ease of maintenance:

### ⚡ Next.js:

The core framework used for building the application, offering server-side rendering (SSR) for improved performance and SEO. It also facilitates the dynamic routing required by the platform.

### 🎨 Chakra UI:

A modular and customizable component library used to build the user interface with a focus on simplicity, accessibility, and responsive design.
Together, these technologies enable a fast and responsive user experience while maintaining a clean and organized codebase.

### 🔧 TypeScript:

The platform is developed using TypeScript to add static type definitions, helping to catch potential bugs early and improve code readability, maintainability, and developer productivity.

Together, these technologies enable a fast and responsive user experience while maintaining a clean and organized codebase.
<br /><br />

## 🔗 Integration

Agrify Landing Page has a simple integration that serves as a key entry point for new users:

### 📝 Join Waitlist Process:

The only integration currently in place is the `Join Waitlist` functionality. It allows users to express interest in the platform and stay informed about its development and features.
The waitlist submission process is handled using `Axios`, a promise-based HTTP client for making API requests, ensuring efficient and reliable communication between the frontend and the backend.
This integration ensures a smooth user experience while maintaining simplicity in how users engage with the platform.
<br /><br />

## 🔧 Backend API

Agrify's frontend is powered by a robust backend API that handles various data transactions. For detailed information on the available API endpoints, refer to the Backend Postman Documentation [here](https://www.postman.com/agrify-africa/workspace/74781e95-148f-49ef-817f-b07c06fac35e).

This documentation provides insight into how the platform communicates with the backend to perform key operations such as user waitlist submissions, carbon emission calculations, and more.

## 🗂️ Folder Structure

The Agrify Landing Page codebase follows a well-structured and modular approach to ensure maintainability and clarity:<br /><br />
<img width="371" alt="Screenshot 2024-10-07 at 12 29 51" src="https://github.com/user-attachments/assets/783b695e-74b9-48c1-96d1-bcca939c00f2"><br /><br />

- 📁 `src/components/`: Contains all the components used across the application. Each component folder corresponds to the page or route it belongs to. <br /><br />
  For example:<br /><br />
  <img width="369" alt="Screenshot 2024-10-07 at 12 16 00" src="https://github.com/user-attachments/assets/d8c35e12-b279-4c0e-a0a7-d640acd6e977"> <br /><br />
  The `src/components/business/` directory contains components specifically designed for the `src/app/business` route. These components include `CalculatorShot` and `SolutionCard`, which are integral to the platform's business logic.<br /><br />
  `<BusinessComp />` serves as the primary component, responsible for rendering the business page.<br /><br />
  This structured approach ensures flexibility, as certain pages need to import components instead of defining everything in `app/[path]`. This is due to limitations around using both `metadata` and `"use client"` in the same file, as they cannot coexist. To avoid conflicts, components requiring `"use client"` are imported separately.

- 📜 `src/const/`: Contains constants and static data used across the application. This helps maintain consistency and centralize configurable values.

- 🖋️ `src/font/`: Stores custom fonts used within the application, ensuring that typography is consistent throughout.

- 🔨 `src/utils/`: Houses general utility functions that can be reused across different components or pages.<br /><br />
  `src/utils/hooks/`: Contains `React hooks` specific to the logic of various pages. Each hook is tailored to the page it supports.<br /><br /> For instance,<br /><br />
  <img width="370" alt="Screenshot 2024-10-07 at 12 19 20" src="https://github.com/user-attachments/assets/dfee6c00-c1cc-45d9-8016-f1f253df3e81"><br /><br />
  `src/utils/hooks/useBusinessLogic.js` contains logic unique to the `app/business` page, ensuring that page-specific functionality is organized and easily maintainable. <br /><br />
  This folder structure ensures that the application remains scalable, organized, and easy to navigate as it evolves.<br /><br />

<img width="1440" alt="Screenshot 2024-10-07 at 12 52 13" src="https://github.com/user-attachments/assets/c2cfa641-529b-42bb-91b5-1f027e0b4eb4">
