        function amountChange(){
            document.getElementById("txtAmount").value=document.getElementById("rangeAmount").value;
        }
        function yearsChange(){
            document.getElementById("txtYears").value=document.getElementById("rangeYears").value;
        }
        function rateChange(){
            document.getElementById("txtRate").value=document.getElementById("rangeRate").value;
        }

        function calculateClick(){
            if(document.getElementById("txtAmount").value==""){
                alert("Please enter the loan amount");
                return;
            }
            if(document.getElementById("txtYears").value==""){
                alert("Please enter the loan tenure");
                return;
            }
            
            if(document.getElementById("txtRate").value==""){
                alert("Please enter the rate of interest");
                return;
                
            }
            

            var p=parseInt(document.getElementById("txtAmount").value);
            var r=parseFloat(document.getElementById("txtRate").value)/12/100;
            var n=parseInt(document.getElementById("txtYears").value);

            var result= p*r*(Math.pow(1+r,n))/Math.pow(1+r,n)-1;

            document.getElementById("result").innerHTML="Your Monthly EMI will be <b>"+Math.round(result).toLocaleString('en-in',{style:"currency",currency:"INR"})+ "</b> per month."

        }
