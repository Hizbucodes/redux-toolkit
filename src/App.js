import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import IncrementButton from "./components/IncrementButton";
import DecrementButton from "./components/DecrementButton";
import ResetButton from "./components/ResetButton";
import InputCount from "./components/InputCount";
import Form from "./components/Form";
import PostsList from "./components/PostsList";

function App() {
  return (
    <div>
      <h1>REDUX</h1>
      {/* <Counter />
      <IncrementButton />
      <DecrementButton />
      <ResetButton />
      <InputCount /> */}
      <Form />
      <PostsList />
    </div>
  );
}

export default App;
