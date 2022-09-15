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

    // const btnfondo = document.getElementsByClassName("new-checkbox-container");
    const btnfondo = document.querySelector(".new-checkbox-container");
    // const btntilde = document.getElementsByClassName("tilde-img");
    const btntilde = document.querySelector(".tilde-img");
    // const btncruz = document.getElementsByClassName("cruz-img");
    const btncruz = document.querySelector(".cruz-img");

    // Semaforos
    const btnsemaforos = document.querySelector("#checkbox-semaforos");
    const btntildesemaforos = document.querySelector("#tilde-semaforos");
    const btncruzsemaforos = document.querySelector("#cruz-semaforos");

    // Pozos
    const btnpozos = document.querySelector("#checkbox-pozos");
    const btntildepozos = document.querySelector("#tilde-pozos");
    const btncruzpozos = document.querySelector("#cruz-pozos");

    // Veredas
    const btnveredas = document.querySelector("#checkbox-veredas");
    const btntildeveredas = document.querySelector("#tilde-veredas");
    const btncruzveredas = document.querySelector("#cruz-veredas");

    // Sendas peatonales
    const btnsendaspeatonales = document.querySelector("#checkbox-sendaspeatonales");
    const btntildesendaspeatonales = document.querySelector("#tilde-sendaspeatonales");
    const btncruzsendaspeatonales = document.querySelector("#cruz-sendaspeatonales");

    // Automoviles
    const btnautomoviles = document.querySelector("#checkbox-automoviles");
    const btntildeautomoviles = document.querySelector("#tilde-automoviles");
    const btncruzautomoviles = document.querySelector("#cruz-automoviles");

    // Motos
    const btnmotos = document.querySelector("#checkbox-motos");
    const btntildemotos = document.querySelector("#tilde-motos");
    const btncruzmotos = document.querySelector("#cruz-motos");

    // Bicicletas
    const btnbicicletas = document.querySelector("#checkbox-bicicletas");
    const btntildebicicletas = document.querySelector("#tilde-bicicletas");
    const btncruzbicicletas = document.querySelector("#cruz-bicicletas");

    // Variables
    let numvolumen;

    let estadosemaforos;
    let estadopozos;
    let estadoveredas;
    let estadosendaspeatonales;
    let estadoautomoviles;
    let estadomotos;
    let estadobicicletas;

    let mensajeaenviar = numvolumen + estadosemaforos + estadopozos + estadoveredas + estadosendaspeatonales + estadoautomoviles + estadomotos + estadobicicletas;

    // Menu Hamburguesa

    hambutton.addEventListener("click", (e) => {
        hammenu.classList.toggle("show");
        blackout.classList.toggle("mostrar");
    }
    );

    document.addEventListener("click", (e) => {
        if (e.target !== hambutton) {
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

    valorslider.addEventListener("input", () => {
        valorvolumen.value = valorslider.value;
    }
    );

    valorvolumen.addEventListener("input", () => {
        valorslider.value = valorvolumen.value;

        if (valorvolumen.value > 100) {
            valorvolumen.value = 100;
        }
        if (valorvolumen.value < 0) {
            valorvolumen.value = 0;
        }
    }
    );

    valorvolumen.addEventListener("change", () => {
        valorvolumen.value = (parseInt(valorvolumen.value) + 0).toString();
        
        if (valorvolumen.value === "") {
            valorvolumen.value = 0;
        }
        if(valorvolumen.value != 100) {
            numvolumen = 0 + valorvolumen.value;
        }
        else{
            numvolumen = valorvolumen.value
        }
        if(valorvolumen.value < 10){
            console.log("pasa");
            numvolumen = 0 + (0 + valorvolumen.value);
        }
        console.log("numvolumen = " + numvolumen);
    }
    );


    // Objetos

    const objbuttons = [btnsemaforos, btnpozos, btnveredas, btnsendaspeatonales, btnautomoviles, btnmotos, btnbicicletas];

    objbuttons.map((b) => {
        b.addEventListener("focus", () => {
            if (b.style.borderColor === "rgb(15, 82, 2)"){
                b.style.backgroundColor = "rgb(0, 50, 0)";
            }
            else{
                b.style.backgroundColor = "rgb(50, 0, 0)";
            }
            // b.classList.add("focuseo");            
        });

        b.addEventListener("blur", () => {
            if (b.style.borderColor === "rgb(15, 82, 2)"){
                b.style.backgroundColor = "rgb(14, 194, 14)";
            }
            else{
                b.style.backgroundColor = "rgb(200, 0, 0)";
            }
            // b.classList.remove("focuseo");
        });
    });

    const botones = [hambutton, btnsemaforos, btnpozos, btnveredas, btnsendaspeatonales, btnautomoviles, btnmotos, btnbicicletas];

    botones.map((b) => {
        b.addEventListener("keyup", (e) => {
            if (e.key === 'Enter' || e.keyCode === 13) {
                e.target.click();
            }
        });
    });

    const colorchanger = (boton, til, cru) => {
        if (boton.style.borderColor === "rgb(15, 82, 2)") {
            boton.style.backgroundColor = "rgb(200, 0, 0)";
            boton.style.borderColor = "rgb(100, 0, 0)";
            boton.style.backgroundColor.focus = "rgb(50, 0, 0)";
            til.classList.add("nomost");
            cru.classList.add("most");
        }
        else {
            boton.style.backgroundColor = "rgb(14, 194, 14)";
            boton.style.borderColor = "rgb(15, 82, 2)";
            boton.style.backgroundColor.focus = "rgb(9, 94, 9)";
            til.classList.remove("nomost");
            cru.classList.remove("most");
        }
    };

    const hoverchanger = (boton) => {
        boton.addEventListener("mouseenter", () => {
            if (boton.style.borderColor === "rgb(15, 82, 2)") {
                boton.style.backgroundColor = "rgb(13, 148, 13)";
            }
            else {
                boton.style.backgroundColor = "rgb(150, 0, 0)";
            }
        }
        );
        boton.addEventListener("mouseleave", () => {
            if (boton.style.borderColor === "rgb(15, 82, 2)") {
                boton.style.backgroundColor = "rgb(14, 194, 14)";
            }
            else {
                boton.style.backgroundColor = "rgb(200, 0, 0)";
            }
        }
        );
    };
    

    colorchanger(btnsemaforos, btntildesemaforos, btncruzsemaforos);
    hoverchanger(btnsemaforos);
    btnsemaforos.addEventListener("click", () => {
        console.log(mensajeaenviar);
        colorchanger(btnsemaforos, btntildesemaforos, btncruzsemaforos);
        if (btnsemaforos.style.borderColor === "rgb(15, 82, 2)") {
            console.log("Semaforos ON");
            estadosemaforos = "1";
        }
        else {
            console.log("Semaforos OFF");
            estadosemaforos = "0";
        }
    }
    );

    colorchanger(btnpozos, btntildepozos, btncruzpozos);
    hoverchanger(btnpozos);
    btnpozos.addEventListener("click", () => {
        colorchanger(btnpozos, btntildepozos, btncruzpozos);
        if (btnpozos.style.borderColor === "rgb(15, 82, 2)") {
            console.log("Pozos ON");
            estadopozos = "1";
        }
        else {
            console.log("Pozos OFF");
            estadopozos = "0";
        }
    }
    );

    colorchanger(btnveredas, btntildeveredas, btncruzveredas);
    hoverchanger(btnveredas);
    btnveredas.addEventListener("click", () => {
        colorchanger(btnveredas, btntildeveredas, btncruzveredas);
        if (btnveredas.style.borderColor === "rgb(15, 82, 2)") {
            console.log("Veredas ON");
            estadoveredas = "1";
        }
        else {
            console.log("Veredas OFF");
            estadoveredas = "0";
        }
    }
    );

    colorchanger(btnsendaspeatonales, btntildesendaspeatonales, btncruzsendaspeatonales);
    hoverchanger(btnsendaspeatonales);
    btnsendaspeatonales.addEventListener("click", () => {
        colorchanger(btnsendaspeatonales, btntildesendaspeatonales, btncruzsendaspeatonales);
        if (btnsendaspeatonales.style.borderColor === "rgb(15, 82, 2)") {
            console.log("Sendas peatonales ON");
            estadosendaspeatonales = "1";
        }
        else {
            console.log("Sendas peatonales OFF");
            estadosendaspeatonales = "0";
        }
    }
    );

    colorchanger(btnautomoviles, btntildeautomoviles, btncruzautomoviles);
    hoverchanger(btnautomoviles);
    btnautomoviles.addEventListener("click", () => {
        colorchanger(btnautomoviles, btntildeautomoviles, btncruzautomoviles);
        if (btnautomoviles.style.borderColor === "rgb(15, 82, 2)") {
            console.log("Automoviles ON");
            estadoautomoviles = "1";
        }
        else {
            console.log("Automoviles OFF");
            estadoautomoviles = "0";
        }
    }
    );

    colorchanger(btnmotos, btntildemotos, btncruzmotos);
    hoverchanger(btnmotos);
    btnmotos.addEventListener("click", () => {
        colorchanger(btnmotos, btntildemotos, btncruzmotos);
        if (btnmotos.style.borderColor === "rgb(15, 82, 2)") {
            console.log("Motos ON");
            estadomotos = "1";
        }
        else {
            console.log("Motos OFF");
            estadomotos = "0";
        }
    }
    );

    colorchanger(btnbicicletas, btntildebicicletas, btncruzbicicletas);
    hoverchanger(btnbicicletas);
    btnbicicletas.addEventListener("click", () => {
        colorchanger(btnbicicletas, btntildebicicletas, btncruzbicicletas);
        if (btnbicicletas.style.borderColor === "rgb(15, 82, 2)") {
            console.log("Bicicletas ON");
            estadobicicletas = "1";
        }
        else {
            console.log("Bicicletas OFF");
            estadobicicletas = "0";
        }
    }
    );
}
);