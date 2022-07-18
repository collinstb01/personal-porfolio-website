import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../../i/jden.jpg"
import {useSelector} from "react-redux"

export default function Sidebar() {
  // const {blog} = useSelector((state) => state.blog)
  return (
    <Main>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={img}
          alt=""
        />
        <p>
        I am a Software Developer and an expert in Web Development with 
        Experience in developing mobile and web friendly applications, 
        i am obsessed with solving complex problems by building applications with emphasis, accessibility and usability.
        </p>
      </div>
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
        </ul>
      </div> */}
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div> */}
    </Main>
  );
}

const Main = styled.div`
  flex: 3;
  height: fit-content;
  margin: 20px;
  padding-bottom: 30px;
  background-color: #fdfbfb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    display: none
  }
.sidebarItem {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sidebarTitle {
  margin: 10px;
  padding: 5px;
  width: 80%;
  border-top: solid 1px #a7a4a4;
  border-bottom: solid 1px #a7a4a4;
  text-align: center;
  font-family: "Varela Round", sans-serif;
  font-size: 12px;
  line-height: 19px;
  color: #222222;
  font-weight: 600;
}

.sidebarItem > img {
  margin-top: 15px;
  width: 250px;
  height: 250px;
  object-fit: contain;
}

.sidebarItem > p {
  padding: 30px;
}

.sidebarList {
  list-style-type: none;
  margin-bottom: 30px;
}

.sidebarListItem {
  display: inline-block;
  width: 50%;
  margin-top: 15px;
  cursor: pointer;
}

.sidebarSocial {
  margin-top: 15px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebarIcon {
  font-size: 16px;
  margin-left: 10px;
}


`