window.onload = function() {
    var text = "Dreamers, Thinkers and Doers.";
    var i =0;
    var speed =150;
    var delay = 300;
    var eraseDelay = 300;
    var demo = document.getElementById('animate');

    function typewriter() {
        if(i < text.length) {
            document.getElementById("animate").innerHTML += text.charAt(i);
            i++;
            setTimeout(typewriter, speed);
        }else {
            setTimeout(eraseText, delay);
        }
    }
    
    function eraseText() {
        function eraseText() {
            var textLength = document.getElementById("animate").innerHTML.length;
            if(textLength > 0) {
                document.getElementById("animate").innerHTML = document.getElementById("animate").innerHTML.slice(0, textLength -1);
                setTimeout(eraseText, speed);
            }else {
                i=0;
                setTimeout(typewriter, eraseDelay);
            }

        }

    }
    typewriter();
};