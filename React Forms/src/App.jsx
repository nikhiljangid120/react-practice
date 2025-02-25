import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  // Initializing useForm hook
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  // Function to handle form submission
  async function onSubmit(data) {
    console.log("Form Submitted:", data);
    // Simulating an API call with a delay to demonstrate submit state handling
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First Name Input - No validation */}
        <div>
          <label>First Name:</label>
          <input {...register("firstName")} />
        </div>
        <br />

        {/* Middle Name Input - With Validation */}
        <div>
          <label>Middle Name:</label>
          <input
            className={errors.middleName ? "input-error" : ""} // Adds error class if validation fails
            {...register("middleName", {
              required: "Middle name is required", // Validation for required field
              minLength: { value: 4, message: "Minimum length is 4 characters" },
              maxLength: { value: 6, message: "Maximum length is 6 characters" },
              disabled: false,
            })}
          />
          {/* Display error message if validation fails */}
          {errors.middleName && <p className="error-message">{errors.middleName.message}</p>}
        </div>
        <br />

        {/* Last Name Input - Using Regex for Validation */}
        <div>
          <label>Last Name:</label>
          <input
            {...register("lastName", {
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Only alphabets are allowed in last name",
              },
            })}
          />
          {/* Display error message if validation fails */}
          {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}
        </div>
        <br />

        {/* Submit Button - Disabled while submitting */}
        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting..." : "Submit"}
        />
      </form>
    </>
  );
}

export default App;
