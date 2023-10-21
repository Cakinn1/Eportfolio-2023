import Landing from "./components/Landing";
import Nav from "./components/Nav";
import './index.css';

function App() {
  return (
    <div className="overflow-x-hidden   overflow-y-scroll scroll-smooth relative">
      <Nav />
     
      <Landing />
      <div className="h-[300vh]">
        
      </div>
    </div>
  );
}

export default App;
