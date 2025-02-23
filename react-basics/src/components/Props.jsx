

// ✅ Card Component using Props
// Props (short for "properties") allow components to receive data from their parent component.
// Here, 'title' is a prop passed from the App component to the Card component.
const Card = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2> {/* The title prop is dynamically inserted here */}
    </div>
  );
};

function Props() {
  return (
    <>
      {/* ✅ Passing different values to the Card component via props */}
      <Card title="Ben 1000" />
      {/* This demonstrates how the same component can be reused with different data */}
    </>
  );
}

export default Props;
