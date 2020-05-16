/* eslint-disable */
export const sudokuSolver = (data) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (data[row][col] === 0) {
        for (let k = 1; k <= 9; k++) {
          if (isValid(data, row, col, k)) {
            data[row][col] = k;
            if (sudokuSolver(data)) {
              return data;
            }
            data[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
};

function isValid(board, row, col, k) {
  for (let i = 0; i < 9; i++) {
    const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const n = 3 * Math.floor(col / 3) + i % 3;
    if (board[row][i] === k || board[i][col] === k || board[m][n] === k) {
      return false;
    }
  }
  return true;
}
