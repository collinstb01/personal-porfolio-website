import styled from "styled-components";

export default function Header() {
  return (
    <Main className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </Main>
  );
}

const Main = styled.div`
  margin-top: 60px;

.headerTitles {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Lora", serif;
  color: #444;
}

.headerTitleSm {
  position: absolute;
  top: 18%;
  font-size: 20px;
}

.headerTitleLg {
  position: absolute;
  top: 20%;
  font-size: 100px;
}

.headerImg {
  width: 100%;
  height: 450px;
  margin-top: 80px;
  object-fit: cover;
}

`