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

    const hacerclick = btnmas.addEventListener("mousedown", autosumador);

    while(hacerclick){
        autosumador();
        console.log("messi");
    }

    btnmas.addEventListener("mousedown", autosumador)

    btnmas.setInterval(autosumador, 0);

    // btnmas.addEventListener("mousedown", () => {
    //     if (valorvolumen.value < 100) {
    //         let valvol = parseInt(valorvolumen.value) + 1;
    //         valorvolumen.value = valvol;
    //     }
    //     console.log(valorvolumen.value);
    // }
    // );
    btnmenos.addEventListener("click", () => {
        if (valorvolumen.value > 0) {
            let valvol = parseInt(valorvolumen.value) - 1;
            valorvolumen.value = valvol;
        }
        console.log(valorvolumen.value);
    }
    );
}
);