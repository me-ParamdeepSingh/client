import { Route, Routes } from "react-router-dom";
import { AdminLogin, AdminSignup, Home, Test,Dashboard,Products } from './pages'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Dashboard/>}/>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/test" element={<Test />} />
        <Route path="/admin/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
