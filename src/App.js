import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import Footer from "./component/Footer";
import Loading from "./component/Loading";
import Main from "./component/Main";
import Navbar from "./component/Navbar";
import { globalTypes } from "./redux/actions/globalTypes";

function App() {
  const dispatch = useDispatch()
  const { auth } = useSelector(state => state);
  useEffect(() => {
    if (localStorage.getItem("login")) {
      axios
        .get('http://mynodeapis.herokuapp.com/user/refresh_token')
        .then(res => {
          console.log(res);
          dispatch({ type: globalTypes.AUTH, payload: res.data });
        })
        .catch(err => console.log(err.response))
    }
    else {

    }

  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Loading/>
        <Routes>
          {auth.accessToken ?
            (<Route path="/" element={<Main />} />) :
            (<>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Login />} />
            </>)}

        </Routes>
        <Footer />
      </BrowserRouter>

    </>);
}

export default App;