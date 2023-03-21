import React from "react";

import styled from "styled-components";

const StyledComponent = styled.span`
	display: block;
`;

const Box = ({ color, width = 20, height = 20 }) => {
	return <div>BOX from container</div>;
};

export default Box;
