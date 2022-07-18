import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import FAQ from "./pages/faq";
import Contact from "./pages/contact";
import Error from "./pages/error";
// import Nav from "./components/navbar";
// import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='faq' element={<FAQ />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
