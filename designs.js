// Select color input
// Select size input

var height, width;

//background gradient colors
//referenced https://codepen.io/chrisgresh/pen/aNjovb
function generate() {

  var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];

  function populate(a) {
    for ( var i = 0; i < 6; i++ ) {
      var x = Math.round( Math.random() * 14 );
      var y = hexValues[x];
      a += y;
    }
    return a;
  }

  var newColor1 = populate('#');
  var newColor2 = populate('#');
  var angle = Math.round( Math.random() * 360 );

  var gradient = "radial-gradient(" + newColor1 + ", " + newColor2 + ")";

  document.documentElement.style.background = gradient;

}

document.onload = generate();


$("input[type='submit']").on("click", function (event) { // submit button
    event.preventDefault(); // prevents deletion

    height = $("#inputHeight").val(); // user submitted height
    width = $("#inputWidth").val(); // user submitted width

    $("#pixelCanvas").empty(); // clears canvas
    makeGrid(height, width); // creates canvas
});

// when size is submitted by the user, call makeGrid()
function makeGrid(height, width) {
    for (let i = 0; i < height; i++) { // creates rows
        $("#pixelCanvas").append($("<tr></tr>"));
        for (let j = 0; j < width; j++) { // creates cells
            $("tr").last().append($("<td></td>"));
        }
    }

    $("#pixelCanvas").on("mousedown mouseover", "td", function(e) { // click and drag drawing
        if (e.buttons === 1) { // colors cells
            $(this).css("background-color", $("#colorPicker").val());
        }
    });
}

$("input[type='reset']").on("click", function redo() { //reset button
    $("#pixelCanvas").empty();
});
