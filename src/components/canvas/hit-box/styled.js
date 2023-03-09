import styled, { css } from "styled-components";

const TYPE_MAP = {
	l1: {
		color: "green",
	},
	l2: {
		color: "blue",
	},
	l3: {
		color: "red",
	},
};

export const Container = styled.div`
	${({ type, left, top }) => css`
		background: ${TYPE_MAP[type].color};
		left: ${left}px;
		top: ${top}px;
	`}
	position: absolute;
	width: 50px;
	height: 50px;
`;
