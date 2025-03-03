import styles from "./field-layout.module.css";

export const FieldLayout = ({ field, update }) => {
	return (
		<div className={styles.container}>
			{field.map((value, index) => {
				return (
					<button
						className={styles.field}
						key={index}
						onClick={() => update(index)}
					>
						{value}
					</button>
				);
			})}
		</div>
	);
};
