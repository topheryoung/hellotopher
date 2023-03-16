import React from "react";
import styled from "styled-components";

const Matrix = styled.button`
  padding: 5px;
  background: transparent;
  border: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Row = styled.div`
  height: 4px;
  display: flex;
  padding: 4px 0;
  flex-direction: row;
  margin: 0;
  position: relative;
`;

const Circle = styled.div`
  height: 4px;
  width: 4px;
  margin: 0 2px;
  background-color: ${({ theme }) => theme.svg.hamburger};
  border-radius: 50%;
  display: inline-block;
  transition: all 100ms ease-in;
`;

const Hamburger = () => {
  return (
    <Matrix>
      <Row>
        <Circle />
        <Circle className="dot" />
        <Circle />
      </Row>
      <Row>
        <Circle className="dot" />
        <Circle />
        <Circle className="dot" />
      </Row>
      <Row>
        <Circle />
        <Circle className="dot" />
        <Circle />
      </Row>
    </Matrix>
  );
};

export default Hamburger;
