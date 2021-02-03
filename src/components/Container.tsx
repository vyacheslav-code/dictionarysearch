import React from "react";
import styled from "@emotion/styled";
import { jsx } from "@emotion/react";

const StyledContainer = styled.div`
  margin: auto;
  padding: 16px;
  border: 1px solid #4064ac;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  width: fit-content;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Container: React.FC = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
