import styled from "styled-components";
import img from "../../i/code.jpg"
export default function Header() {
  return (
    <Main className="header" style={{backgroundImage: `url(${img})`}}>
      <div className="headerTitles">
        <span className="headerTitleSm">Welcome To My</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
    </Main>
  );
}

const Main = styled.div`
    margin-bottom: 20px;
    background-size: cover;
    height: 250px;
    width: 100%;
    display: flex;
.headerTitles {
  display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-family: "Lora",serif;
    color: whitesmoke;
    text-shadow: 1px 1px 1px black;
}

.headerTitleSm {
  /* position: absolute; */
  /* top: 18%; */
  font-size: 20px;
}

.headerTitleLg {
  /* position: absolute; */
  /* top: 20%; */
  font-size: 100px;
}

.headerImg {
  width: 100%;
  height: auto;
  margin-top: 20px;
  /* object-fit: cover; */
}

`