import { useSelector } from "react-redux";
import Post from "./Post";
import styled from "styled-components"
import Footer from "../../component/Footer.js"
 
export default function Posts() {
  const {blogs, loading} = useSelector((state) => state.blog)

  return (
    <Main className="posts">
      {
        blogs?.blogPosts?.map((data, i) => (
          <Post {...data} loading={loading} key={i}/>
        ))
      }
      {
        blogs?.blogPosts?.length > 0 && <p style={{textAlign: "center"}}>No More Blog Post To View</p>
      }
       {
        blogs?.blogPosts?.length > 0 && <Footer />
      }
    </Main>
  );
}

const Main = styled.div`
    flex: 9;
    display: flex;
    flex-wrap: wrap;
    margin: 20px;

@media (max-width: 900px) {
        margin: 0px;
        justify-content: center;
}


`