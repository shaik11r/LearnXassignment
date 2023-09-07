import "./App.css";
import Backgroundimage from "./components/Backgroundimage";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import TabComponent from "./components/TabsComponent";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Sidebar />
      <Backgroundimage />
      <div className="main_first">
        <Profile />
        <TabComponent/>
      </div>
    </div>
  );
}

export default App;
