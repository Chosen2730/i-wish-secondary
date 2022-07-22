import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import FAQ from "./pages/faq";
import Contact from "./pages/contact";
import Error from "./pages/error";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='faq' element={<FAQ />} />
        <Route path='terms' element={<Terms />} />
        <Route path='privacy' element={<Privacy />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
