const person1 = { name: "ahmad", age: 19 };
const person2 = { name: "muhammad", age: 22 };


function generateRandomColor() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}

function makeGrid() {
    try {
        var rows = parseInt(document.getElementById('rows').value);
        var columns = parseInt(document.getElementById('columns').value);

        if (!(Number.isInteger(rows) && Number.isInteger(columns))) {
            throw "You enter some suspecious character";
        }

        console.log(rows);
        console.log(columns);

        let myObject = document.getElementById('layout');
        myObject.innerHTML = "";
        var myGrid = document.createElement("div");

        myGrid.style.cssText =
            `border:1px dotted purple;
        height: 100vh;
        width: 100vw;
        margin:10px;
    
        display: grid;
    
        grid-template-columns: repeat(${columns},1fr);
        grid-template-rows: repeat(${rows},1fr);
        gap:10px;`
            ;

        for (var row = 0; row <= rows; row++) {
            for (var column = 0; column <= columns; column++) {
                var newDiv = document.createElement("div");
                newDiv.style = "background-color:red";
                myGrid.appendChild(newDiv);
            }
        }

        myObject.appendChild(myGrid);



    } catch (err) {
        alert(err);
    }


}

