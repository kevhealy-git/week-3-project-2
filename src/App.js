import "./App.css";
import { Button, Card } from "week-3-design-systems";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dashboard</h1>
        <Card
          alt="An image showing some mountains"
          image="https://images.unsplash.com/photo-1674423094915-2546893e2636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          description="This card comes from week-3-design-systems package."
        />
        <Button label="This button comes from week-3-design-systems" />
      </header>
    </div>
  );
}

export default App;
