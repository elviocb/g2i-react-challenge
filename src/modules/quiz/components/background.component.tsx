import React from "react";
import styled from "styled-components";

const BackgroundImage = styled.div`
  position: absolute;
  background-image: -webkit-radial-gradient(center, ellipse cover, #2b313b 0%, #111720 100%);
  background-repeat: repeat-y;
  background-size: cover;
  height: 100%;
  width: 100%;
  min-width: 100%;
  min-height: 100%;
`;

export default React.memo(BackgroundImage);
