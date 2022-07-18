import { useSelector } from "react-redux";
import Post from "./Post";
import styled from "styled-components"

export default function Posts() {
  const {blogs, loading} = useSelector((state) => state.blog)

  return (
    <Main className="posts">
      {
        blogs?.blogPosts?.map((data, i) => (
          <Post {...data} loading={loading} key={i}/>
        ))
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