import Layout from "./Layout/Layout";
import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path='*' element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
