<html>

<button>Click Me!</button>

<script>

<button onClick="myFunction()

	let y = Math.floor(Math.random() * 101);
	
            let x = document.getElementById("gjettefelt").value;
 
            if (x == y) {
                alert("Du gjettet " + x + " , det var riktig ");
            }

            else if (x > y) {
                alert("Du gjettet " + x + ", det er for høyt");
            }
            else {
                alert("Du gjettet " + x + ", det er for lavt")
            }
        }">Click Me!</button>    

let myButton = document.getElementById("Click Me!");
myButton.onclick = function() { 
    alert("Button clicked!"); 
};
</script>
</html>
