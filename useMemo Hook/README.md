# Understanding and Using `useMemo` Hook in React

## 📌 What is `useMemo`?
`useMemo` is a React Hook that helps optimize performance by **memoizing** expensive calculations. It ensures a function **only recomputes when its dependencies change**, avoiding unnecessary re-executions.

---

## 🔥 Importance of `useMemo`
- **Optimizes performance** by avoiding redundant calculations.
- **Reduces rendering lag** in components with heavy computations.
- **Enhances user experience** by improving app responsiveness.

---

## 📚 Common Use Cases
1. **Expensive Calculations** – Avoids repeated execution of CPU-intensive operations.
2. **Filtering & Sorting Large Lists** – Prevents unnecessary re-filtering on each render.
3. **Optimizing Computed Values** – Stores derived data that should only update when necessary.

---

## 🔄 Steps to Use `useMemo`

### **1️⃣ Import `useMemo`**
```javascript
import { useMemo } from 'react';
```

### **2️⃣ Define an Expensive Function Inside `useMemo`**
```javascript
const expensiveCalculation = useMemo(() => {
  console.log("Running expensive calculation...");
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += i;
  }
  return result;
}, []); // Runs only once unless dependencies change
```

### **3️⃣ Use It Inside JSX**
```javascript
<h3>Expensive Computation: {expensiveCalculation}</h3>
```

### **4️⃣ Add Dependencies to Control Recalculation**
```javascript
const expensiveCalculation = useMemo(() => heavyFunction(), [count]);
```
Now, `heavyFunction` will only execute when `count` changes.

---

## 🎯 When to Use `useMemo`
✅ When dealing with **expensive calculations**.
✅ When **filtering or sorting** large lists.
✅ When computing **derived state** based on complex logic.
✅ When working with **slow function calls** inside a component.

⚠️ **Do NOT overuse `useMemo`**! If a calculation is cheap, `useMemo` might add unnecessary complexity.

---

## 🚀 Conclusion
`useMemo` is a powerful tool for improving performance in React applications. It helps optimize rendering by **caching** expensive computations, ensuring they run **only when necessary**. Use it wisely to keep your React app fast and efficient! 💡
