window.onload = function(){
var nm = document.querySelector(".nm")

        nm.addEventListener('keyup', function(event) {
            var uname = event.target.value
            console.log(uname)
            // alert(`Hello ${uname}`)
        });
        
        var nao = document.querySelectorAll(".nao")
        var sim = document.querySelectorAll(".sim")
        var background = document.getElementById("modal-background")
        var rej = document.getElementById("modal-reject")
        var accep = document.getElementById("modal-accept")

        for (let i = 0; i < nao.length; i++) {
            nao[i].addEventListener('click', reject)
        }
        function reject(event) {
            background.style.display = "inline-block"
            rej.style.display = "inline-block"
        }

        for (let i = 0; i < sim.length; i++) {
            sim[i].addEventListener('click', accept)
        }
        function accept(event) {
            background.style.display = "inline-block"
            accep.style.display = "inline-block"
        }


        
        
        
        

        
}
