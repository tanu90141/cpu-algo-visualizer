function moveCover(f, s) {
    var cover = document.getElementById("cover");
    if (f === 0) {
        var left = parseInt(cover.style.left || 0);
        var width = parseInt(cover.style.width || 0);
        left += 100;
        width -= 100;
        cover.style.left = left + 'px';
        cover.style.width = width + 'px';
        cover.style.transition = 'left ' + s + 'ms, width ' + s + 'ms';
    } else {
        var left = parseInt(cover.style.left || 0);
        var width = parseInt(cover.style.width || 0);
        left += 44;
        width -= 44;
        cover.style.left = left + 'px';
        cover.style.width = width + 'px';
        cover.style.transition = 'left ' + s + 'ms, width ' + s + 'ms';
    }
}

function generateColor() {
    var r = Math.random() * 254;
    var g = Math.random() * 254;
    var b = Math.random() * 254;
    return 'rgba(' + r + ',' + g + ',' + b + ',0.6)';
}

function setColor(p) {
    var table = document.getElementById("table");
    var row = table.rows[p];
    var colCell = row.cells[8];
    colCell.style.backgroundColor = generateColor();
}

// prevention
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
   }, false);
  
   document.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.keyCode==123) {
     e.stopPropagation();
     e.preventDefault();
    }
   });
