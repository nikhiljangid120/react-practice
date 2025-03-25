🚀 React Router DOM – Essential Guide
=====================================

📖 What is react-router-dom?
----------------------------

react-router-dom is a library that enables **navigation & routing** in React apps, creating a **Single Page Application (SPA)** experience.

### 🔹 Installation

npm install react-router-dom 

📌 1️⃣ useParams – Dynamic Routing 🔍 Application: Fetching dynamic data from URLs. 💡 Use Case: Profile pages, product details. 🔥 Example: Extracting a User ID from the URL

import { useParams } from "react-router-dom";

const UserProfile = () => { const { id } = useParams(); // Extracts dynamic ID from the URL return

User ID: {id}
-------------

; };

URL Example: /user/123 → Displays User ID: 123

📌 2️⃣ useNavigate – Programmatic Navigation 🔍 Application: Redirect users dynamically. 💡 Use Case: After login, logout, or form submission. 🔥 Example: Redirect on button click

import { useNavigate } from "react-router-dom";

const Home = () => { const navigate = useNavigate(); return navigate("/dashboard")}>Go to Dashboard; };

📌 3️⃣ Nested Routing (children) 🔍 Application: Grouping related pages. 💡 Use Case: Dashboards, user settings. 🔥 Example: Parent-child routes

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const Dashboard = () => <>

Dashboard
---------

; // Child routes render here const Profile = () =>

### Profile

;

const App = () => ( );

URL Example: /dashboard/profile → Shows Dashboard + Profile

📌 4️⃣ Wildcard (\*) Routing – 404 Page 🔍 Application: Handling unknown URLs. 💡 Use Case: Showing a Not Found page. 🔥 Example:

const NotFound = () =>

404 - Page Not Found
--------------------

;

const App = () => ( " element={} /> {/ Catches all undefined routes \*/} );

URL Example: /random → Displays 404 - Page Not Found

🚀 Summary Table =>

_Feature_ Application Use Case
==============================

_useParams_ Get URL params Profile, product pages
=================================================

_useNavigate_ Redirect users Login, logout, forms
=================================================

_Nested Routing_ Group related pages Dashboards, settings
=========================================================

_Wildcard (_)\* Handle unknown URLs 404 Not Found pages
=======================================================