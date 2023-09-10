<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Oppgave</title>
</head>

<body>
    <h1>Gjett tallet</h1>
    <p> Jeg har valgt et tall mellom 1 og 100, gjett tallet mitt. </p>
         
	<input type="number" id="gjettefelt"
            class="guessField">
         
	<button id="gjettknapp">Gjett</button>	

	<script type="text/javascript">
 
		let y = Math.floor(Math.random() * 101);

		document.getElementById("gjettknapp").onclick = function () {
	
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
        	}

	</script>

</body>

</html>
