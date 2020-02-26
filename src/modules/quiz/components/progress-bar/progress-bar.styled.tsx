import styled from "styled-components";

export const ProgressContainer = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  justify-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (min-width: 769px) {
    // margin-bottom: -80px;
  }
  @media screen and (max-width: 768px) {
    // margin-top: 20px;
  }
`;

export const ProgressCounter = styled.div`
  position: absolute;
  width: 100%;
  font-weight: bold;
  color: #2a9aa6;
`;

export const ProgressOutter = styled.div`
  position: relative;
  align-self: center;
  width: 100%;
  max-width: 400px;
  // margin: 10px 4%;
  padding: 1px;
  text-align: center;
  // background-color: #f4f4f4;
  border: 1px solid;
  border-color: rgba(255, 255, 255, 0.3);
  color: #fff;
  border-radius: 7px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin: 20px 0 5px 0;
  }
`;
export const ProgressInner = styled.div`
  // width: 10%;
  min-height: 25px;
  white-space: nowrap;
  overflow: hidden;
  padding: 1px;
  border-radius: 5px;
  background-color: #85ffae;
  transition: width 1s ease-in-out;
  animation: "all 1s";
`;
