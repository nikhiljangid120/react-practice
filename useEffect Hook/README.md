
---

## **📜 useEffect Hook - README.md**
```md
# 🔄 useEffect Hook - Mastering Side Effects in React ⚡

## 🧐 What is useEffect?
The `useEffect` hook allows **functional components** to handle **side effects** such as:  
✅ Fetching data 📡  
✅ Updating the DOM 🖥️  
✅ Subscribing to events 🎧  
✅ Setting up timers & intervals ⏳  

---

## 🔥 Why useEffect?
✅ Replaces **lifecycle methods** (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`).  
✅ Runs **automatically** after every render (unless dependencies are specified).  
✅ Helps manage **cleanup functions** (like removing event listeners).  

---

## 📌 Steps to Use `useEffect`

### 1️⃣ Import `useEffect`
```jsx
import { useEffect } from 'react';
