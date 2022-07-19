import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import DoorDashFavorite from "../../component/Loader";

export default function Post({_id, image, title, message, createdAt, loading}) {
  const navigate = useNavigate()
  const route = () => {
    navigate(`/blog/${_id}`)
  }
  if (loading) {
    return <DoorDashFavorite />
  }
  return (
    <Main className="post">
      <img
        className="postImg"
        src={image}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          {/* <span className="postCat">
            <Link to="" className="link" >
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link to="" className="link" >
              Life
            </Link>
          </span> */}
        </div>
        <span className="postTitle" onClick={route}>
           {title}
        </span>
        <hr />
        <span className="postDate">{createdAt.slice(0, 10)}</span>
      </div>
      <p className="postDesc">
       {message}
      </p>
    </Main>
  );
}

const Main = styled.div`
  width: 385px;
  margin: 0px 25px 40px 25px;
  display: flex;
  flex-direction: column;
  font-family: 'Courier New', Courier, monospace;
  @media (max-width: 900px) {
    margin: 10px 10px; 
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  .link {
    text-decoration: none;
  }
.postImg {
  width: 385px;
  height: 280px;
  object-fit: cover;
  border-radius: 7px;

  @media (max-width: 500px) {
    width: 100%;
    align-self: center;
  }
}

.postInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.postCat {
  font-family: "Varela Round", Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 11px;
  color: #be9656;
  line-height: 19px;
  margin-top: 15px;
  margin-right: 10px;
  cursor: pointer;
}

.postTitle {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: 900;
  margin-top: 15px;
  cursor: pointer;
}

.postDate {
  font-family: "Lora", serif;
  font-style: italic;
  font-size: 13px;
  font-weight: 400;
  color: #999999;
  margin-top: 10px;
}

.postDesc {
  font-family: "Varela Round", Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #444444;
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}


`