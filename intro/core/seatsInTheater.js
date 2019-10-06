function seatsInTheater(nCols, nRows, col, row) {
    let cols = nCols - col;
    let rows = nRows - row
    return (cols * rows) + rows

}
