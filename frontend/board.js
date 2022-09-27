'use strict';

const cols = 15
const rows = 15
const canvas_x = 900
const canvas_y = 900

let rect_width = canvas_x / cols // dynamic cell/rect size
let rect_height = canvas_y / rows // dynamic cell/rect size

function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return
}

function Space(active, homerow, label, color) {
    this.active = active;
    this.homerow = homerow;
    this.label = label;
    if (color) {
        this.color = color;
    }
    else {
        this.color = "#FFF";
    }
}

Space.prototype.sh

function setup() {
    createCanvas(canvas_x, canvas_y);
    grid = make2DArray(cols, rows);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j] = new Space();
        }
    }
}

function draw() {
    background(220);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].show();
        }
    }
}

