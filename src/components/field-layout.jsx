export const FieldLayout = ({ field, update }) => {
	return (
		<div>
			{field.map((value, index) => {
				return (
					<button key={index} onClick={update.bind(null, index)}>
						{value}
					</button>
				);
			})}
		</div>
	);
};
