  
import React from "react";
import styled from "styled-components";

const Title = styled.h1`
    font-size:30px;
    color:white;
    background:red;
`

const Header = (props) => {
  return (
    <div>
      <Title>ヘッダーcomponent(練習中)</Title>
    </div>
  );
};
export default Header;