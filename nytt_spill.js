document.getElementById("gjetteknapp").addEventListener("click", gjettespill);

	function gjettespill() {
            const minimum = 1;
            const maksimum = 100;
            const valgt_tall = Math.round(Math.random() * (maksimum - minimum)) + minimum;

                let gjettet_tall = document.getElementById("gjettefelt").value;
 
           	    if (gjettet_tall == valgt_tall) {
                 alert("Du gjettet " + gjettet_tall + " , det var riktig ");
           	        }

           	    else if (gjettet_tall > valgt_tall) {
             	    alert("Du gjettet " + gjettet_tall + ", det er for høyt");
           	        }
           	    else {
              	    alert("Du gjettet " + gjettet_tall + ", det er for lavt")
          	        }
        	};
