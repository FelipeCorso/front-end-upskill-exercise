import { useCallback, useState } from "react";
import { Game } from "../model/game";

const game = new Game();

export const useGameState = () => {
    const [hitBoxes, setHitBoxes] = useState(Object.values(game.hitboxes));
    const [report, setReport] = useState(game.report);
    const startGame = useCallback(() => {
        game.reset();
        game.report.reset();
        setHitBoxes(Object.values(game.hitboxes));
    }, [setHitBoxes]);
    const finishGame = useCallback(() => {
        setReport(game.report);
    }, [setReport]);
    return {
        report,
        hitBoxes,
        startGame,
        finishGame
    }
}