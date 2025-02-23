# 🚀 React Router DOM – Essential Guide  

## 📖 What is react-router-dom?  
`react-router-dom` is a library that enables **navigation & routing** in React apps, creating a **Single Page Application (SPA)** experience.  

### 🔹 Installation  
`npm install react-router-dom`

📌 1️⃣ useParams – Dynamic Routing
🔍 Application: Fetching dynamic data from URLs.
💡 Use Case: Profile pages, product details.
🔥 Example: Extracting a User ID from the URL

import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams(); // Extracts dynamic ID from the URL
  return <h2>User ID: {id}</h2>;
};

URL Example: /user/123 → Displays User ID: 123

📌 2️⃣ useNavigate – Programmatic Navigation
🔍 Application: Redirect users dynamically.
💡 Use Case: After login, logout, or form submission.
🔥 Example: Redirect on button click

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>;
};

📌 3️⃣ Nested Routing (children)
🔍 Application: Grouping related pages.
💡 Use Case: Dashboards, user settings.
🔥 Example: Parent-child routes

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const Dashboard = () => <><h2>Dashboard</h2><Outlet /></>; // Child routes render here
const Profile = () => <h3>Profile</h3>;

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

URL Example: /dashboard/profile → Shows Dashboard + Profile


📌 4️⃣ Wildcard (*) Routing – 404 Page
🔍 Application: Handling unknown URLs.
💡 Use Case: Showing a Not Found page.
🔥 Example:

const NotFound = () => <h2>404 - Page Not Found</h2>;

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} /> {/* Catches all undefined routes */}
    </Routes>
  </BrowserRouter>
);

URL Example: /random → Displays 404 - Page Not Found

🚀 Summary Table =>

# *Feature*	Application	Use Case
# *useParams* Get URL params Profile, product pages
# *useNavigate*	Redirect users	Login, logout, forms
# *Nested Routing*	Group related pages	Dashboards, settings
# *Wildcard (*)*	Handle unknown URLs	404 Not Found pages