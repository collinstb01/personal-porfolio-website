import React, { useEffect, useState } from "react";
import Title from "../component/Title";
import styled from "styled-components";
import Data from "../component/RecentWorksData";
import RectnWorkEach from "../component/RectnWorkEach";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getposts } from "../features/SkillSlice";

const RecentWork = () => {
  const {posts} = useSelector((state) => state.skill)
  console.log(posts)
  // const menuItems = [...new Set(post?.map((Val) => Val?.data?.attributes?.category))];
  const [work, setWork] = useState(posts);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getposts())
  }, [])
  // const FilteredData = (val) => {
  //   const newItem = _project.filter((dataa) => {
  //     return dataa.category == val;
  //   });
  //   setWork(newItem);
  // };
  return (
    <Main id="work">
      <div>
        <Title title1="Recent Works" title2="Recent Works" />
      </div>
      <div className="bottom">
        <div className="buttons">
          <Button onClick={() => setWork(posts)}>ALL</Button>
          {/* {menuItems.map((val) => (
            <>
              <Button onClick={() => FilteredData(val)}>{val}</Button>
            </>
          ))} */}
        </div>
        <div className="projects">
          <div className="project">
            {posts?.projectPost?.map((onework, i) => (
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
