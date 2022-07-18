import styled from "styled-components";
import img from "../../i/code.jpg"
export default function Header() {
  return (
    <Main className="header" style={{backgroundImage: "url('../../i/code.jpg')"}}>
      <div className="headerTitles">
        <span className="headerTitleSm">Welcome To My</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src={img}
        alt=""
      />
    </Main>
  );
}

const Main = styled.div`
  margin-block: 20px;

.headerTitles {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Lora", serif;
  color: #444;
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