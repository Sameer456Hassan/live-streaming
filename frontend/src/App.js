import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./Pages/Home";
import Live from "./Pages/Live";
import { useEffect } from "react";
import Contact from "./Pages/Contact";
import Signin from "./Pages/Signin";
import Signup from "./Components/Signup";
import Forgot_password from "./Pages/Forgot_password";
import Previous_streamings from "./Pages/Previous_streamings";
import Admin from "./Pages/Admin/Admin";
import BasicLayout from "./Layouts/BasicLayout";
import AdminLayout from "./Layouts/AdminLayout";
import Edit_users from "./Pages/Admin/Edit_users.jsx";
import UserList from "./Pages/Admin/UserList";
import Users from "./Pages/Admin/Users";
import UserLayout from "./Layouts/UserLayout";
import UsersDashbord from "./Pages/Users/UsersDashbord";
import LiveStream from "./Pages/Users/LiveStream";
import StreamingList from "./Pages/Users/StreamingList";
import EditUsers from "./Pages/Users/EditUsers";
import StreamShedule from "./Pages/Admin/StreamShedule";

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    // Create a script element
    if (pathname.includes("admin")){
      const script = document.createElement("script");
      const script2 = document.createElement("script");
      const script3 = document.createElement("script");
      script.src = `${window.location.origin}/fullcalendar.js`; // Replace with the actual path to your JavaScript file
      script2.src = `${window.location.origin}/calendar.js`; // Replace with the actual path to your JavaScript file
      script3.src = `${window.location.origin}/admin.js`; // Replace with the actual path to your JavaScript file
      if (pathname === '/admin/stream-shedule' || pathname === '/admin/stream-shedule/'){

        document.body.appendChild(script);
        script.onload= function(){
  
        document.body.appendChild(script2);
      }
    
        // Remove the script element when the component unmounts to prevent memory leaks
        return () => {
          document.body.removeChild(script2);
          document.body.removeChild(script);
     
        };

      }
      // Add the script to the document's head
   
      document.body.appendChild(script3);
  
      // Remove the script element when the component unmounts to prevent memory leaks
      return () => {
        document.body.removeChild(script3);
      };
    }
    else if  (pathname.includes("users")){
      const script = document.createElement("script");
      const script2 = document.createElement("script");
      const script3 = document.createElement("script");
     
      script.src = `${window.location.origin}/fullcalendar.js`; // Replace with the actual path to your JavaScript file
      script2.src = `${window.location.origin}/calendar.js`; // Replace with the actual path to your JavaScript file
      script3.src = `${window.location.origin}/admin.js`; // Replace with the actual path to your JavaScript file
  
      // Add the script to the document's head
   
      if (pathname === '/users' || pathname === '/users/'){

        document.body.appendChild(script);
        script.onload= function(){
  
        document.body.appendChild(script2);
      }
    
        // Remove the script element when the component unmounts to prevent memory leaks
        return () => {
          document.body.removeChild(script2);
          document.body.removeChild(script);
     
        };

      }
      document.body.appendChild(script3);
      return () => {
      
        document.body.removeChild(script3);
      };
      // Add the script to the document's head
      
    }
    
    else{
      
      const script = document.createElement("script");
      script.src = `${window.location.origin}/main.js`; // Replace with the actual path to your JavaScript file
  
      // Add the script to the document's head
      document.body.appendChild(script);
  
      // Remove the script element when the component unmounts to prevent memory leaks
      return () => {
        document.body.removeChild(script);
      };
    }
    
  }, [pathname]);
  useEffect(() => {
    if (pathname.includes("admin")) {
      import("../src/Admin.css");
      import("../src/postmonkey.css");

    } else if (pathname.includes("users")) {
      import("../src/users.css");
      import("../src/postmonkey.css");
    }else{
      import("../src/App.css");
      
    }
  }, []);

  return (
    <>
      <Routes>
        <Route element={<BasicLayout />} path="/">
          <Route element={<Home />} index />

          <Route element={<Live />} path="/Live" />
          <Route element={<Contact />} path="/Contact"/>
          <Route element={<Signin />} path="/Signin" />
          <Route element={<Signup />} path="/Signup" />
          <Route element={<Forgot_password />} path="/Forgot_password" />
          <Route
            element={<Previous_streamings />}
            path="/Previous_streamings"
          />
        </Route>

        {/* <Admins> */}

        <Route element={<AdminLayout/>} path="/admin">
          <Route element={<Admin/>} index />
          <Route element={<Edit_users/>} path="/admin/Edit_users" />
          <Route element={<UserList/>} path="/admin/UserList" />
          <Route element={<StreamShedule/>} path="/admin/stream-shedule" />
          <Route element={<Users/>} path="/admin/Users" />
        </Route>
        <Route element={<UserLayout/>} path="/users">
          <Route element={<UsersDashbord/>} index/>
          <Route element={<LiveStream/>} path="/users/live-stream"/>
          <Route element={<StreamingList/>} path="/users/streaming-list"/>
          <Route element={<EditUsers/>} path="/users/edit-users"/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
