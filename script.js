
        function Generate() {
            var no1 = Math.floor((Math.random() * 9) + 1);
            var no2 = Math.floor((Math.random() * 9) + 1);
            var no3 = Math.floor((Math.random() * 9) + 1);
            var no4 = Math.floor((Math.random() * 9) + 1);
            var no5 = Math.floor((Math.random() * 9) + 1);
            var no6 = Math.floor((Math.random() * 9) + 1);
            document.getElementById("display1").innerHTML = "F-" + no1;
            document.getElementById("display2").innerHTML = no2;
            document.getElementById("display3").innerHTML = no3;
            document.getElementById("display4").innerHTML = no4;
            document.getElementById("display5").innerHTML = no5;
            document.getElementById("display6").innerHTML = no6;
        }
