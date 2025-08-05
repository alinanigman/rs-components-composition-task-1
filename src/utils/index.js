import { WINNING_COMBINATIONS } from "@/constants/game";

export const checkWin = (field, player) =>
  WINNING_COMBINATIONS.some((combo) => combo.every((i) => field[i] === player));

export const checkDraw = (field) => field.every((cell) => cell !== "");
