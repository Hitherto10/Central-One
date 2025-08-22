import './index.css'
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
      <div className={` w-full h-full m-0`}>
        <Header />
        <Home />
      </div>
  )
}

export default App;
