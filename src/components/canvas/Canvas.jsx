const Canvas = ({ items, callback }) => {
	const rects = items.map(({ color, x, y }) => (
		<rect
			x={x}
			y={y}
			style={{ fill: color }}
			onClick={() => callback(color, x, y)}
			key={`${color}-${x}-${y}`}
		/>
	));

	return (
		<svg width="800" height="600">
			{rects}
		</svg>
	);
};

export default Canvas;
