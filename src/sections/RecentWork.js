import React, { useEffect, useState } from "react";
import Title from "../component/Title";
import styled from "styled-components";
import RectnWorkEach from "../component/RectnWorkEach";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getposts } from "../features/SkillSlice";

const RecentWork = () => {
  const {posts, loading} = useSelector((state) => state.skill)
  const _posts = posts?.projectPost
  const menuItems = [...new Set(posts?.projectPost?.map((Val) => Val.category))];
  const [work, setWork] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getposts())
    if (posts) {
      setWork(_posts)
    }
  }, [dispatch])
  useEffect(() => {
    if (posts) {
      setWork(_posts)
    }
  }, [posts])
  const FilteredData = (val) => {
      const newData = posts?.projectPost?.filter((Val) => {
        return Val.category === val
      })
      setWork(newData)
  }
  return (
    <Main id="work">
      <div>
        <Title title1="Projects" title2="Projects" />
      <div className="bottom">
      </div>
      {
        loading && <h1>Loading...</h1>
      }
        <div className="buttons">
          <Button onClick={() => setWork(_posts)}>ALL</Button>
          {menuItems?.map((val) => (
            <>
              <Button onClick={() => FilteredData(val)}>{val}</Button>
            </>
          ))}
        </div>
        <div className="projects">
          <div className="project">
            {work?.map((onework, i) => (
              <RectnWorkEach onework={onework} key={i} />
            ))}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default RecentWork;

const Main = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  .bottom {
    margin-block: 20px;
  }
  .projects {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .project {
      width: 60%;
      display: grid;
      grid-template-columns: 50% 50%;

      @media (max-width: 700px) {
          grid-template-columns: 100%;
      }
    }
  }
`;
