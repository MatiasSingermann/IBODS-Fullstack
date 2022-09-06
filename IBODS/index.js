document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const hambutton = document.getElementById("puntos-img");
    const hammenu = document.getElementById("ham-menu-container");
    const hamcon = document.getElementById("ham-href-con");
    const hamvol = document.getElementById("ham-href-vol");
    const hamobj = document.getElementById("ham-href-obj");

    const btnmas = document.getElementById("btn-mas");
    const btnmenos = document.getElementById("btn-menos");
    const valorvolumen = document.getElementById("num-volumen");
    const valorslider = document.getElementById("volume-slider");


    hambutton.addEventListener("click", (e) => {
        hammenu.classList.toggle("show");
    }
    );

    document.addEventListener("click", (e) => {
        if(e.target !== hambutton)
        {
            console.log("1");
            hammenu.classList.remove("show");
        }
    });


    const autosumador = (e) => {
        if (valorvolumen.value < 100) {
            let valvol = parseInt(valorvolumen.value) + 1;
            valorvolumen.value = valvol;
        }
    }

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
}
);