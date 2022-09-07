document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const hambutton = document.getElementById("puntos-img");
    const hammenu = document.getElementById("ham-menu-container");
    const hamcon = document.getElementById("ham-href-con");
    const hamvol = document.getElementById("ham-href-vol");
    const hamobj = document.getElementById("ham-href-obj");
    const blackout = document.getElementById("fondo-negro");

    const btnmas = document.getElementById("btn-mas");
    const btnmenos = document.getElementById("btn-menos");
    const valorvolumen = document.getElementById("num-volumen");
    const valorslider = document.getElementById("volume-slider");

    const btnfondo = document.getElementById("new-checkbox-container");
    const btntilde = document.getElementsByClassName("tilde-img");
    const btncruz = document.getElementsByClassName("cruz-img");


    // Menu Hamburguesa

    hambutton.addEventListener("click", (e) => {
        hammenu.classList.toggle("show");
        blackout.classList.toggle("mostrar");
    }
    );

    document.addEventListener("click", (e) => {
        if(e.target !== hambutton)
        {
            console.log("1");
            hammenu.classList.remove("show");
            blackout.classList.remove("mostrar");
        }
    });


    // Volumen

    btnmas.addEventListener("click", () => {
        if (valorvolumen.value < 100) {
            let valvol = parseInt(valorvolumen.value) + 1;
            valorvolumen.value = valvol;
            valorslider.value = valorvolumen.value;
        }
        console.log(valorvolumen.value);
    }
    );

    btnmenos.addEventListener("click", () => {
        if (valorvolumen.value > 0) {
            let valvol = parseInt(valorvolumen.value) - 1;
            valorvolumen.value = valvol;
            valorslider.value = valorvolumen.value;
        }
        console.log(valorvolumen.value);
    }
    );

    valorslider.addEventListener("change", () => {
        valorvolumen.value = valorslider.value;
    }
    );

    valorvolumen.addEventListener("change", () => {
        valorslider.value = valorvolumen.value;

        if(valorvolumen.value > 100){
            valorvolumen.value = 100;
        }
        if(valorvolumen.value < 0){
            valorvolumen.value = 0;
        }
        if(valorvolumen.value === ""){
            valorvolumen.value = 50;
        }
    }
    );


    // Objetos

    btntilde.querySelector(".tilde-img").addEventListener("click", () => {
        btnfondo.style.backgroundColor = "rgba(1, 1, 1, 1)";
        console.log("juan");
    }
    );
}
);