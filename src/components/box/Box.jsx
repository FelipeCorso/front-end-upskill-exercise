import styled from "styled-components";



const StyledComponent = styled.span`
	display: block;
	width: ${(props) => props.width}px;
	height: ${(props) => props.height}px;
	background-color: ${(props) => props.color};


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
