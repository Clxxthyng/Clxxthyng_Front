import './App.css';
import Header from "./components/header";
import Sums from "./components/sums";

const name = '강시우' // test code
function App() {
  return (
    <div id="Main">
      <Header name={name}/>
      <div id={"sums"}>
        <Sums type="border" />
        <Sums type="event" />
        <Sums type="messenger" />
      </div>
    </div>
  );
}

export default App;
