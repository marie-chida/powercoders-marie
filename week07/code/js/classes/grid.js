import {Cell} from "./cell";

export class Grid {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.matrix = this.createMatrix();
    }

    createMatrix() {
        const arr = [];
        for (let i = 0; i < this.rows; i++) {
            arr.push([]);
            arr[i].push(new Array(this.cols));
            for (let j = 0; j < this.cols; j++) {
                arr[i][j] = new Cell();
            }
        }
        return arr;
    }

    countNeighborsForPosition(row, col) {
        let aliveNeighbors = 0;

        // upper left
        if(this.getCellForPosition(row-1, col-1).currentState.isAlive) aliveNeighbors++;
        // above
        if(this.getCellForPosition(row-1, col).currentState.isAlive) aliveNeighbors++;
        // upper right
        if(this.getCellForPosition(row-1, col+1).currentState.isAlive) aliveNeighbors++;

        // left
        if(this.getCellForPosition(row, col-1).currentState.isAlive) aliveNeighbors++;
        // right
        if(this.getCellForPosition(row, col+1).currentState.isAlive) aliveNeighbors++;

        // lower left
        if(this.getCellForPosition(row+1, col-1).currentState.isAlive) aliveNeighbors++;
        // below
        if(this.getCellForPosition(row+1, col).currentState.isAlive) aliveNeighbors++;
        // lower right
        if(this.getCellForPosition(row+1, col+1).currentState.isAlive) aliveNeighbors++;

    }

    getCellForPosition(row, col) {
        if (row < 0 || col < 0 || row >= this.rows || col >= this.cols) {
            return new Cell();
        }

        return this.matrix[row][col];
    }
}