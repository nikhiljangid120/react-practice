# React Hook Form

## Introduction
React Hook Form is a performant, flexible, and easy-to-use library for handling forms in React. It optimizes performance by minimizing re-renders and provides a simple API for form validation, error handling, and state management.

## Installation
To use React Hook Form, install it using npm or yarn:

```sh
npm install react-hook-form
# or
yarn add react-hook-form
```

## Basic Usage
Here's a simple example of how to use React Hook Form:

```jsx
import { useForm } from "react-hook-form";

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: "Name is required" })} />
      {errors.name && <p>{errors.name.message}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## Key Features & Concepts

### 1. `register`
- Used to register input fields.
- Example:
  ```jsx
  <input {...register("email")} />
  ```

### 2. `handleSubmit`
- Handles form submission and prevents default behavior.
- Example:
  ```jsx
  <form onSubmit={handleSubmit(onSubmit)}>...</form>
  ```

### 3. `errors`
- Stores validation error messages for each field.
- Example:
  ```jsx
  {errors.email && <p>{errors.email.message}</p>}
  ```

### 4. `isSubmitting`
- A boolean that indicates if the form is currently submitting.
- Example:
  ```jsx
  <button type="submit" disabled={isSubmitting}>
    {isSubmitting ? "Submitting..." : "Submit"}
  </button>
  ```

### 5. `watch`
- Watches specific input values in real-time.
- Example:
  ```jsx
  const watchName = watch("name");
  ```

### 6. `setValue`
- Dynamically sets a field's value.
- Example:
  ```jsx
  setValue("email", "test@example.com");
  ```

### 7. `reset`
- Resets form fields to default values.
- Example:
  ```jsx
  reset();
  ```

### 8. `trigger`
- Triggers validation manually for specific fields.
- Example:
  ```jsx
  trigger("email");
  ```

### 9. `getValues`
- Retrieves current form values.
- Example:
  ```jsx
  const values = getValues();
  ```

### 10. `setError`
- Manually sets an error message for a field.
- Example:
  ```jsx
  setError("email", { type: "manual", message: "Invalid email" });
  ```

### 11. `clearErrors`
- Clears error messages for specific fields.
- Example:
  ```jsx
  clearErrors("email");
  ```

### 12. `useFormContext`
- Used for managing form state in deeply nested components.
- Example:
  ```jsx
  const { register } = useFormContext();
  ```

### 13. `useFieldArray`
- Handles dynamic form fields like lists or arrays.
- Example:
  ```jsx
  const { fields, append, remove } = useFieldArray({ name: "users" });
  ```

### 14. `control`
- Required when working with components like `<Controller />`.
- Example:
  ```jsx
  <Controller control={control} name="dob" render={({ field }) => <input {...field} />} />
  ```

### 15. `defaultValues`
- Sets initial form values.
- Example:
  ```jsx
  const { register } = useForm({ defaultValues: { name: "John Doe" } });
  ```

### 16. `mode`
- Controls when validation runs (`onSubmit`, `onBlur`, `onChange`, etc.).
- Example:
  ```jsx
  const { register } = useForm({ mode: "onBlur" });
  ```

### 17. `resolver`
- Enables schema-based validation (e.g., using Yup, Zod).
- Example:
  ```jsx
  import { yupResolver } from "@hookform/resolvers/yup";
  import * as yup from "yup";
  
  const schema = yup.object().shape({
    email: yup.string().email().required()
  });
  
  const { register } = useForm({ resolver: yupResolver(schema) });
  ```

## Conclusion
React Hook Form is a powerful tool for managing forms efficiently in React applications. It enhances performance, simplifies validation, and offers a great developer experience. By utilizing its features, you can create robust and user-friendly forms with minimal re-renders.