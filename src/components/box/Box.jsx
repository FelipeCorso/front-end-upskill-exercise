import styled from "styled-components";

const StyledComponent = styled.div`
  display: block;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ color }) => color};
`;

const Box = ({ color, width = 20, height = 20 }) => {
  return <StyledComponent color={color} width={width} height={height} />;
};

export default Box;
