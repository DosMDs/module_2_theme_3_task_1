export const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
	return (
		<>
			{isDraw && <div>Ничья</div>}
			{isGameEnded && <div>{`Победа: ${currentPlayer}`}</div>}
			{!isDraw && !isGameEnded && <div>{`Ходит: ${currentPlayer}`}</div>}
		</>
	);
};
