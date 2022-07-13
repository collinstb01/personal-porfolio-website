import { useLocation } from "react-router";
import Header from "./Header";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import "./homepage.css";
import Navbar from "../../component/Navbar";
import { useEffect } from "react";
import { getblogs } from "../../features/BlogSlice";
import { useDispatch } from "react-redux";

export default function Homepage() {
  const dispatch = useDispatch()
  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    dispatch(getblogs())
  }, [])
  
  return (
    <>
      <Navbar />
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
