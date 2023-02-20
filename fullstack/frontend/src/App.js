import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Header  from  "./components/Header"
import Footer from "./components/Footer";

function App() {
    return (    
    <>
    
    <BrowserRouter>          
      <div className="container">     
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="add" element={<AddUser />} />
          <Route path="edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    
    </BrowserRouter>
    </>
  );
}
 
export default App;