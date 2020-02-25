import styled from "styled-components";
import image from "../../../assets/images/bg.jpg";

const BackgroundImage = styled.div`
  background-image: url(${image}),
    -moz-radial-gradient(center, ellipse cover, #2b313b 0%, #111720 100%);
  background-image: url(${image}),
    -webkit-radial-gradient(center, ellipse cover, #2b313b 0%, #111720 100%);
  background-image: url(${image}), radial-gradient(ellipse at center, #34445e 0%, #111720 100%);
  background-blend-mode: luminosity;
  background-repeat: repeat-y;
  background-size: cover;
  min-width: 100%;
  min-height: 100%;
`;

export default BackgroundImage;
