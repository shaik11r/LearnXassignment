import "./App.css";
import Backgroundimage from "./components/Backgroundimage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Sidebar />
      <Backgroundimage/>
    </div>
  );
}

export default App;
