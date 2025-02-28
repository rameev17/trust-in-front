import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Counter = ({ target, label, isMillion, onClick }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 3000;
    const increment = Math.ceil(target / (duration / 30));

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(start);
    }, 30);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <CounterContainer onClick={() => onClick && onClick()}>
      <CounterNumber>
        {isMillion ? `+ ${count} млн` : count.toLocaleString()}
      </CounterNumber>
      <CounterLabel>{label}</CounterLabel>
    </CounterContainer>
  );
};

const CounterContainer = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 20px;
  padding: 20px;
  color: white;
  width: 250px;
  border-radius: 10px;
`;

const CounterNumber = styled.p`
  font-size: 48px;
  font-family: "Ubuntu-700";
  margin: 0;
  transition: all 0.3s ease-in-out;
`;

const CounterLabel = styled.span`
  font-size: 18px;
  font-weight: 400;
  font-family: "Ubuntu-400";

  margin-top: 10px;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  border-top: 3px solid #fbbc58;
  padding-top: 10px;
  width: 100%;
`;

export default Counter;
