import styled, { css } from "styled-components";

const TYPE_MAP = {
	EASY: {
		color: "green",
	},
	MEDIUM: {
		color: "blue",
	},
	HARD: {
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
