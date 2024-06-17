function calculator()
        {
            var bill = parseInt(document.getElementById("bill").value);
        var tip = parseInt(document.getElementById("tip").value);
        var persons =parseInt(document.getElementById("persons").value);
        var resultsX = document.getElementById("resultsX");
            var resultsY = document.getElementById("resultsY");
            var resultsZ = document.getElementById("resultsZ");
            var resultsP = document.getElementById("resultsP");
            if(isNaN(bill)&&isNaN(tip)&&isNaN(persons))
                {
                    alert("enter valid bill tip and persons");
                }
            else if(isNaN(bill)&&isNaN(tip))
                {
                    alert("enter valid bill and tip");
                }else if(isNaN(tip)&&isNaN(persons))
                {
                    alert("enter valid tip and no of persons");
                }else if(isNaN(bill)&&isNaN(persons))
                    {
                        alert("enter valid bill and no of persons");
                    }else if(isNaN(bill)){
                        alert("enter valid bill");
                }else if(isNaN(tip)){
                 alert("enter valid tip");
                   }
               else if(isNaN(persons)){
            alert("enter valid persons");
               }
            else 
            {
                var x;
        x=(bill*tip)/100;
        var resultsX;
        resultsX.textContent = ` Total Tip= ${x}Rs/-`;
        var y;
        y=bill+x;
         var resultsY;
        resultsY.textContent = `Total bill= ${y}Rs/-`;
        var z;
        z=x/persons;
        var resultsZ;
        resultsZ.textContent = `Tip per each person= ${z}Rs/-`;
        var p;
        p=(y)/persons;
        var resultsP;
        resultsP.textContent = `Bill per each person= ${p}Rs/-`;
        
            }
        }