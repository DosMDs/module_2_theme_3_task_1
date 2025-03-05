import { useState } from "react";
import { InformationLayout, FieldLayout } from "./components";
import { isWin } from "./utils";

const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState("X");
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);

	const update = (index) => {
		if (field[index] !== "" || isGameEnded || isDraw) {
			return;
		}

		const newField = [...field];
		newField[index] = currentPlayer;
		if (isWin(newField)) {
			setIsGameEnded(true);
		} else if (newField.find((el) => el === "") === undefined) {
			setIsDraw(true);
		} else {
			setCurrentPlayer(currentPlayer === "X" ? "0" : "X");
		}
		setField(newField);
	};

	const handleRestart = () => {
		setCurrentPlayer("X");
		setIsGameEnded(false);
		setIsDraw(false);
		setField(["", "", "", "", "", "", "", "", ""]);
	};

	return (
		<>
			<InformationLayout
				{...{ currentPlayer, isGameEnded, isDraw, handleRestart }}
			/>
			<FieldLayout field={field} update={update} />
		</>
	);
};

export default Game;
