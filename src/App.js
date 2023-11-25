import './App.css';
import Header from "./components/header";
import Sums from "./components/sums";

const name = '강시우' // test code
function App() {
  return (
    <div id="Main">
      <Header name={name}/>
      <div id={"sums"}>
        <Sums type="border" developing="true" />
        <Sums type="event" developing="true" />
        <Sums type="messenger" developing="true" />
      </div>
    </div>
  );
}

export default App;
