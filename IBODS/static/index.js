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

    // Cordones de calle
    const btncordonesdecalle = document.querySelector("#checkbox-cordonesdecalle");
    const btntildecordonesdecalle = document.querySelector("#tilde-cordonesdecalle");
    const btncruzcordonesdecalle = document.querySelector("#cruz-cordonesdecalle");

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
    let numvolumen = "050";

    let estadosemaforos = "1";
    let estadopozos = "1";
    let estadocordonesdecalle = "1";
    let estadosendaspeatonales = "1";
    let estadoautomoviles = "1";
    let estadomotos = "1";
    let estadobicicletas = "1";

    let mensajeaenviar = "0501111111";

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
        if(valorvolumen.value != 100) {
            numvolumen = (0 + valorvolumen.value).toString();
        }
        else{
            numvolumen = (valorvolumen.value).toString();
        }
        if(valorvolumen.value < 10){
            numvolumen = (0 + (0 + valorvolumen.value)).toString();
        }
        mensajeaenviar = numvolumen + estadosemaforos + estadopozos + estadocordonesdecalle + estadosendaspeatonales + estadoautomoviles + estadomotos + estadobicicletas;
        console.log(typeof(mensajeaenviar) + " - " + mensajeaenviar);
    }
    );

    btnmenos.addEventListener("click", () => {
        if (valorvolumen.value > 0) {
            let valvol = parseInt(valorvolumen.value) - 1;
            valorvolumen.value = valvol;
            valorslider.value = valorvolumen.value;
        }
        if(valorvolumen.value != 100) {
            numvolumen = (0 + valorvolumen.value).toString();
        }
        else{
            numvolumen = (valorvolumen.value).toString();
        }
        if(valorvolumen.value < 10){
            numvolumen = (0 + (0 + valorvolumen.value)).toString();
        }
        mensajeaenviar = numvolumen + estadosemaforos + estadopozos + estadocordonesdecalle + estadosendaspeatonales + estadoautomoviles + estadomotos + estadobicicletas;
        console.log(typeof(mensajeaenviar) + " - " + mensajeaenviar);
    }
    );

    valorslider.addEventListener("input", () => {
        valorvolumen.value = valorslider.value;
        if(valorvolumen.value != 100) {
            numvolumen = (0 + valorvolumen.value).toString();
        }
        else{
            numvolumen = (valorvolumen.value).toString();
        }
        if(valorvolumen.value < 10){
            numvolumen = (0 + (0 + valorvolumen.value)).toString();
        }
        mensajeaenviar = numvolumen + estadosemaforos + estadopozos + estadocordonesdecalle + estadosendaspeatonales + estadoautomoviles + estadomotos + estadobicicletas;
        console.log(typeof(mensajeaenviar) + " - " + mensajeaenviar);
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

        numvolumen = (valorvolumen.value).toString();

        mensajeaenviar = numvolumen + estadosemaforos + estadopozos + estadocordonesdecalle + estadosendaspeatonales + estadoautomoviles + estadomotos + estadobicicletas;
    }
    );

    valorvolumen.addEventListener("change", () => {
        valorvolumen.value = (parseInt(valorvolumen.value) + 0).toString();
        
        if (valorvolumen.value === "") {
            valorvolumen.value = 50;
        }
        if(valorvolumen.value != 100) {
            numvolumen = (0 + valorvolumen.value).toString();
        }
        else{
            numvolumen = (valorvolumen.value).toString();
        }
        if(valorvolumen.value < 10){
            numvolumen = (0 + (0 + valorvolumen.value)).toString();
        }
        mensajeaenviar = numvolumen + estadosemaforos + estadopozos + estadocordonesdecalle + estadosendaspeatonales + estadoautomoviles + estadomotos + estadobicicletas;
        console.log(typeof(mensajeaenviar) + " - " + mensajeaenviar);
    }
    );


    // Objetos

    const objbuttons = [btnsemaforos, btnpozos, btncordonesdecalle, btnsendaspeatonales, btnautomoviles, btnmotos, btnbicicletas];

    objbuttons.map((b) => {
        b.addEventListener("focus", () => {
            if (b.style.borderColor === "rgb(15, 82, 2)"){
                b.style.backgroundColor = "rgb(0, 50, 0)";
            }
            else{
                b.style.backgroundColor = "rgb(50, 0, 0)";
            }         
        });

        b.addEventListener("blur", () => {
            if (b.style.borderColor === "rgb(15, 82, 2)"){
                b.style.backgroundColor = "rgb(14, 194, 14)";
            }
            else{
                b.style.backgroundColor = "rgb(200, 0, 0)";
            }
        });
    });

    const botones = [hambutton, btnsemaforos, btnpozos, btncordonesdecalle, btnsendaspeatonales, btnautomoviles, btnmotos, btnbicicletas];

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
        colorchanger(btnsemaforos, btntildesemaforos, btncruzsemaforos);
        if (btnsemaforos.style.borderColor === "rgb(15, 82, 2)") {
            console.log("Semaforos ON");
            estadosemaforos = "1";
        }
        else {
            console.log("Semaforos OFF");
            estadosemaforos = "0";
        }
        mensajeaenviar = numvolumen + estadosemaforos + estadopozos + estadocordonesdecalle + estadosendaspeatonales + estadoautomoviles + estadomotos + estadobicicletas;
        console.log(typeof(mensajeaenviar) + " - " + mensajeaenviar);
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
        mensajeaenviar = numvolumen + estadosemaforos + estadopozos + estadocordonesdecalle + estadosendaspeatonales + estadoautomoviles + estadomotos + estadobicicletas;
        console.log(typeof(mensajeaenviar) + " - " + mensajeaenviar);
    }
    );

    colorchanger(btncordonesdecalle, btntildecordonesdecalle, btncruzcordonesdecalle);
    hoverchanger(btncordonesdecalle);
    btncordonesdecalle.addEventListener("click", () => {
        colorchanger(btncordonesdecalle, btntildecordonesdecalle, btncruzcordonesdecalle);
        if (btncordonesdecalle.style.borderColor === "rgb(15, 82, 2)") {
            console.log("Cordones de calle ON");
            estadocordonesdecalle = "1";
        }
        else {
            console.log("Cordones de calle OFF");
            estadocordonesdecalle = "0";
        }
        mensajeaenviar = numvolumen + estadosemaforos + estadopozos + estadocordonesdecalle + estadosendaspeatonales + estadoautomoviles + estadomotos + estadobicicletas;
        console.log(typeof(mensajeaenviar) + " - " + mensajeaenviar);
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
        mensajeaenviar = numvolumen + estadosemaforos + estadopozos + estadocordonesdecalle + estadosendaspeatonales + estadoautomoviles + estadomotos + estadobicicletas;
        console.log(typeof(mensajeaenviar) + " - " + mensajeaenviar);
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
        mensajeaenviar = numvolumen + estadosemaforos + estadopozos + estadocordonesdecalle + estadosendaspeatonales + estadoautomoviles + estadomotos + estadobicicletas;
        console.log(typeof(mensajeaenviar) + " - " + mensajeaenviar);
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
        mensajeaenviar = numvolumen + estadosemaforos + estadopozos + estadocordonesdecalle + estadosendaspeatonales + estadoautomoviles + estadomotos + estadobicicletas;
        console.log(typeof(mensajeaenviar) + " - " + mensajeaenviar);
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
        mensajeaenviar = numvolumen + estadosemaforos + estadopozos + estadocordonesdecalle + estadosendaspeatonales + estadoautomoviles + estadomotos + estadobicicletas;
        console.log(typeof(mensajeaenviar) + " - " + mensajeaenviar);
    }
    );
}
);