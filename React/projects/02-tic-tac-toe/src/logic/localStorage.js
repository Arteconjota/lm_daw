export const setLocalStorage = function (board, turn) {
    // Guardar partida
    window.localStorage.setItem('board', JSON.stringify(board));
    window.localStorage.setItem('turn', turn);
}

export const resetLocalStorage = function () {
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
}