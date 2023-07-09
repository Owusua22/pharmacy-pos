
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Components/Home/Home";
import POSpage from "./Components/POSpage";



function App() {
  return (

  <Router>

  <Routes>
    <Route path="/" element={<Home />} />
  <Route path="/pos" element={<POSpage/>} />
  

</Routes>
</Router>
  );
}

export default App;
