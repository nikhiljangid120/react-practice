# 🎨 useContext Hook - A Game Changer in React 🚀

## 🧐 What is useContext?
The `useContext` hook in React allows us to **avoid prop drilling** and share state **efficiently** across deeply nested components.

---

## 🔥 Why useContext?
✅ Eliminates **prop drilling** (passing props through multiple components).  
✅ **Improves readability** and keeps the code clean.  
✅ **Optimized performance** as only the necessary components re-render.  

---

## 📌 Steps to Use `useContext`

### 1️⃣ Create a Context
First, create a new context using `createContext()`.
```jsx
import { createContext } from 'react';

// Creating a User Context
const UserContext = createContext();

export default UserContext;
