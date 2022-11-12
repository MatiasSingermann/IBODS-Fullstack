import myJson from "./data.json" assert {type:"json"};
// import myJson from "./messi.json" assert {type:"json"};

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

    // Personas
    const btnpersonas = document.querySelector("#checkbox-personas");
    const btntildepersonas = document.querySelector("#tilde-personas");
    const btncruzpersonas = document.querySelector("#cruz-personas");

    // Escalones
    const btnescalones = document.querySelector("#checkbox-escalones");
    const btntildeescalones = document.querySelector("#tilde-escalones");
    const btncruzescalones = document.querySelector("#cruz-escalones");

    // Variables
    let numvolumen = "050";

    //let estadosemaforos = "semaforos";
    let estadocruzar = "cruzar";
    let estadoparar = "parar";
    let estadopozos = "pozos";
    let estadocordonesdecalle = "cordon";
    let estadosendaspeatonales = "cruces";
    let estadoautomoviles = "autos";
    let estadomotos = "moto";
    let estadobicicletas = "bicicleta";
    let estadopersonas = "personas";
    let estadoescalones = "escalones";

    // let mensajeaenviar = "050111111111";
    let mensajeaenviar = [valorvolumen.value, estadocruzar, estadoparar, estadopozos, estadocordonesdecalle, estadosendaspeatonales, estadoautomoviles, estadomotos, estadobicicletas, estadopersonas, estadoescalones];

    // Fetch
    const mandarmensaje = () => {
        let msg = {
            'volumen': mensajeaenviar[0],
            'cruzar': mensajeaenviar[1],
            'parar': mensajeaenviar[2],
            'pozos': mensajeaenviar[3],
            'cordonesdecalle': mensajeaenviar[4],
            'sendaspeatonales': mensajeaenviar[5],
            'automoviles': mensajeaenviar[6],
            'motos': mensajeaenviar[7],
            'bicicletas': mensajeaenviar[8],
            'personas': mensajeaenviar[9],
            'escalones': mensajeaenviar[10],
            //'objetos': mensajeaenviar.split(3, 9),
        }
        // const request = new XMLHttpRequest();
        // request.open('POST', `/${JSON.stringify(msg)}`)
        // request.onload = () => {
        //     const flaskmessage = request.responseText;
        //     console.log(flaskmessage);
        // }
        // request.send();
        fetch('http://10.20.1.1:8000', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(msg)
        })
            //.then(response => response.json())
            //.then(data => console.log(data));
            //:D
    };

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
        if (valorvolumen.value != 100) {
            numvolumen = (0 + valorvolumen.value).toString();
        }
        else {
            numvolumen = (valorvolumen.value).toString();
        }
        if (valorvolumen.value < 10) {
            numvolumen = (0 + (0 + valorvolumen.value)).toString();
        }
                mensajeaenviar = [valorvolumen.value, estadocruzar, estadoparar, estadopozos, estadocordonesdecalle, estadosendaspeatonales, estadoautomoviles, estadomotos, estadobicicletas, estadopersonas, estadoescalones];
        console.log(typeof (mensajeaenviar) + " - " + mensajeaenviar);
        mandarmensaje();
    }
    );

    btnmenos.addEventListener("click", () => {
        if (valorvolumen.value > 0) {
            let valvol = parseInt(valorvolumen.value) - 1;
            valorvolumen.value = valvol;
            valorslider.value = valorvolumen.value;
        }
        if (valorvolumen.value != 100) {
            numvolumen = (0 + valorvolumen.value).toString();
        }
        else {
            numvolumen = (valorvolumen.value).toString();
        }
        if (valorvolumen.value < 10) {
            numvolumen = (0 + (0 + valorvolumen.value)).toString();
        }
                mensajeaenviar = [valorvolumen.value, estadocruzar, estadoparar, estadopozos, estadocordonesdecalle, estadosendaspeatonales, estadoautomoviles, estadomotos, estadobicicletas, estadopersonas, estadoescalones];
        console.log(typeof (mensajeaenviar) + " - " + mensajeaenviar);
        mandarmensaje();
    }
    );

    valorslider.addEventListener("input", () => {
        valorvolumen.value = valorslider.value;
        if (valorvolumen.value != 100) {
            numvolumen = (0 + valorvolumen.value).toString();
        }
        else {
            numvolumen = (valorvolumen.value).toString();
        }
        if (valorvolumen.value < 10) {
            numvolumen = (0 + (0 + valorvolumen.value)).toString();
        }
                mensajeaenviar = [valorvolumen.value, estadocruzar, estadoparar, estadopozos, estadocordonesdecalle, estadosendaspeatonales, estadoautomoviles, estadomotos, estadobicicletas, estadopersonas, estadoescalones];
        console.log(typeof (mensajeaenviar) + " - " + mensajeaenviar);
        mandarmensaje();
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

                mensajeaenviar = [valorvolumen.value, estadocruzar, estadoparar, estadopozos, estadocordonesdecalle, estadosendaspeatonales, estadoautomoviles, estadomotos, estadobicicletas, estadopersonas, estadoescalones];
        mandarmensaje();
    }
    );

    valorvolumen.addEventListener("change", () => {
        valorvolumen.value = (parseInt(valorvolumen.value) + 0).toString();

        if (valorvolumen.value === "") {
            valorvolumen.value = 50;
        }
        if (valorvolumen.value != 100) {
            numvolumen = (0 + valorvolumen.value).toString();
        }
        else {
            numvolumen = (valorvolumen.value).toString();
        }
        if (valorvolumen.value < 10) {
            numvolumen = (0 + (0 + valorvolumen.value)).toString();
        }
                mensajeaenviar = [valorvolumen.value, estadocruzar, estadoparar, estadopozos, estadocordonesdecalle, estadosendaspeatonales, estadoautomoviles, estadomotos, estadobicicletas, estadopersonas, estadoescalones];
        console.log(typeof (mensajeaenviar) + " - " + mensajeaenviar);
        mandarmensaje();
    }
    );


    // Objetos

    const objbuttons = [btnsemaforos, btnpozos, btncordonesdecalle, btnsendaspeatonales, btnautomoviles, btnmotos, btnbicicletas, btnpersonas, btnescalones];

    objbuttons.map((b) => {
        b.addEventListener("focus", () => {
            if (b.style.borderColor === "rgb(15, 82, 2)") {
                b.style.backgroundColor = "rgb(0, 50, 0)";
            }
            else {
                b.style.backgroundColor = "rgb(50, 0, 0)";
            }
        });

        b.addEventListener("blur", () => {
            if (b.style.borderColor === "rgb(15, 82, 2)") {
                b.style.backgroundColor = "rgb(14, 194, 14)";
            }
            else {
                b.style.backgroundColor = "rgb(200, 0, 0)";
            }
        });
    });

    const botones = [hambutton, btnsemaforos, btnpozos, btncordonesdecalle, btnsendaspeatonales, btnautomoviles, btnmotos, btnbicicletas, btnpersonas, btnescalones];

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
            // boton.style.backgroundColor.focus = "rgb(50, 0, 0)";
            til.classList.add("nomost");
            cru.classList.add("most");
        }
        else {
            boton.style.backgroundColor = "rgb(14, 194, 14)";
            boton.style.borderColor = "rgb(15, 82, 2)";
            // boton.style.backgroundColor.focus = "rgb(9, 94, 9)";
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
            estadocruzar = "cruzar";
            estadoparar = "parar";
        }
        else {
            console.log("Semaforos OFF");
            estadocruzar = "No";
            estadoparar = "No";
        }
                mensajeaenviar = [valorvolumen.value, estadocruzar, estadoparar, estadopozos, estadocordonesdecalle, estadosendaspeatonales, estadoautomoviles, estadomotos, estadobicicletas, estadopersonas, estadoescalones];
        console.log(typeof (mensajeaenviar) + " - " + mensajeaenviar);
        mandarmensaje();
    }
    );

    colorchanger(btnpozos, btntildepozos, btncruzpozos);
    hoverchanger(btnpozos);
    btnpozos.addEventListener("click", () => {
        colorchanger(btnpozos, btntildepozos, btncruzpozos);
        if (btnpozos.style.borderColor === "rgb(15, 82, 2)") {
            console.log("Pozos ON");
            estadopozos = "pozos";
        }
        else {
            console.log("Pozos OFF");
            estadopozos = "No";
        }
                mensajeaenviar = [valorvolumen.value, estadocruzar, estadoparar, estadopozos, estadocordonesdecalle, estadosendaspeatonales, estadoautomoviles, estadomotos, estadobicicletas, estadopersonas, estadoescalones];
        console.log(typeof (mensajeaenviar) + " - " + mensajeaenviar);
        mandarmensaje();
    }
    );

    colorchanger(btncordonesdecalle, btntildecordonesdecalle, btncruzcordonesdecalle);
    hoverchanger(btncordonesdecalle);
    btncordonesdecalle.addEventListener("click", () => {
        colorchanger(btncordonesdecalle, btntildecordonesdecalle, btncruzcordonesdecalle);
        if (btncordonesdecalle.style.borderColor === "rgb(15, 82, 2)") {
            console.log("Cordones de calle ON");
            estadocordonesdecalle = "cordon";
        }
        else {
            console.log("Cordones de calle OFF");
            estadocordonesdecalle = "No";
        }
                mensajeaenviar = [valorvolumen.value, estadocruzar, estadoparar, estadopozos, estadocordonesdecalle, estadosendaspeatonales, estadoautomoviles, estadomotos, estadobicicletas, estadopersonas, estadoescalones];
        console.log(typeof (mensajeaenviar) + " - " + mensajeaenviar);
        mandarmensaje();
    }
    );

    colorchanger(btnsendaspeatonales, btntildesendaspeatonales, btncruzsendaspeatonales);
    hoverchanger(btnsendaspeatonales);
    btnsendaspeatonales.addEventListener("click", () => {
        colorchanger(btnsendaspeatonales, btntildesendaspeatonales, btncruzsendaspeatonales);
        if (btnsendaspeatonales.style.borderColor === "rgb(15, 82, 2)") {
            console.log("Sendas peatonales ON");
            estadosendaspeatonales = "cruces";
        }
        else {
            console.log("Sendas peatonales OFF");
            estadosendaspeatonales = "No";
        }
                mensajeaenviar = [valorvolumen.value, estadocruzar, estadoparar, estadopozos, estadocordonesdecalle, estadosendaspeatonales, estadoautomoviles, estadomotos, estadobicicletas, estadopersonas, estadoescalones];
        console.log(typeof (mensajeaenviar) + " - " + mensajeaenviar);
        mandarmensaje();
    }
    );

    colorchanger(btnautomoviles, btntildeautomoviles, btncruzautomoviles);
    hoverchanger(btnautomoviles);
    btnautomoviles.addEventListener("click", () => {
        colorchanger(btnautomoviles, btntildeautomoviles, btncruzautomoviles);
        if (btnautomoviles.style.borderColor === "rgb(15, 82, 2)") {
            console.log("Automoviles ON");
            estadoautomoviles = "autos";
        }
        else {
            console.log("Automoviles OFF");
            estadoautomoviles = "No";
        }
                mensajeaenviar = [valorvolumen.value, estadocruzar, estadoparar, estadopozos, estadocordonesdecalle, estadosendaspeatonales, estadoautomoviles, estadomotos, estadobicicletas, estadopersonas, estadoescalones];
        console.log(typeof (mensajeaenviar) + " - " + mensajeaenviar);
        mandarmensaje();
    }
    );

    colorchanger(btnmotos, btntildemotos, btncruzmotos);
    hoverchanger(btnmotos);
    btnmotos.addEventListener("click", () => {
        colorchanger(btnmotos, btntildemotos, btncruzmotos);
        if (btnmotos.style.borderColor === "rgb(15, 82, 2)") {
            console.log("Motos ON");
            estadomotos = "moto";
        }
        else {
            console.log("Motos OFF");
            estadomotos = "No";
        }
                mensajeaenviar = [valorvolumen.value, estadocruzar, estadoparar, estadopozos, estadocordonesdecalle, estadosendaspeatonales, estadoautomoviles, estadomotos, estadobicicletas, estadopersonas, estadoescalones];
        console.log(typeof (mensajeaenviar) + " - " + mensajeaenviar);
        mandarmensaje();
    }
    );

    colorchanger(btnbicicletas, btntildebicicletas, btncruzbicicletas);
    hoverchanger(btnbicicletas);
    btnbicicletas.addEventListener("click", () => {
        colorchanger(btnbicicletas, btntildebicicletas, btncruzbicicletas);
        if (btnbicicletas.style.borderColor === "rgb(15, 82, 2)") {
            console.log("Bicicletas ON");
            estadobicicletas = "bicicleta";
        }
        else {
            console.log("Bicicletas OFF");
            estadobicicletas = "No";
        }
                mensajeaenviar = [valorvolumen.value, estadocruzar, estadoparar, estadopozos, estadocordonesdecalle, estadosendaspeatonales, estadoautomoviles, estadomotos, estadobicicletas, estadopersonas, estadoescalones];
        console.log(typeof (mensajeaenviar) + " - " + mensajeaenviar);
        mandarmensaje();
    }
    );

    colorchanger(btnpersonas, btntildepersonas, btncruzpersonas);
    hoverchanger(btnpersonas);
    btnpersonas.addEventListener("click", () => {
        colorchanger(btnpersonas, btntildepersonas, btncruzpersonas);
        if (btnpersonas.style.borderColor === "rgb(15, 82, 2)") {
            console.log("Personas ON");
            estadopersonas = "personas";
        }
        else {
            console.log("Personas OFF");
            estadopersonas = "No";
        }
                mensajeaenviar = [valorvolumen.value, estadocruzar, estadoparar, estadopozos, estadocordonesdecalle, estadosendaspeatonales, estadoautomoviles, estadomotos, estadobicicletas, estadopersonas, estadoescalones];
        console.log(typeof (mensajeaenviar) + " - " + mensajeaenviar);
        mandarmensaje();
    }
    );

    colorchanger(btnescalones, btntildeescalones, btncruzescalones);
    hoverchanger(btnescalones);
    btnescalones.addEventListener("click", () => {
        colorchanger(btnescalones, btntildeescalones, btncruzescalones);
        if (btnescalones.style.borderColor === "rgb(15, 82, 2)") {
            console.log("Escalones ON");
            estadoescalones = "escalones";
        }
        else {
            console.log("Escalones OFF");
            estadoescalones = "No";
        }
                mensajeaenviar = [valorvolumen.value, estadocruzar, estadoparar, estadopozos, estadocordonesdecalle, estadosendaspeatonales, estadoautomoviles, estadomotos, estadobicicletas, estadopersonas, estadoescalones];
        console.log(typeof (mensajeaenviar) + " - " + mensajeaenviar);
        mandarmensaje();
    }
    );

    // Datos anteriores

    valorvolumen.value = myJson.vol;
    valorslider.value = myJson.vol;
    console.log("hola");
    console.log(myJson.vol);
    numvolumen = myJson.vol.toString;

    if(!myJson.mensaje.includes("cruzar"))
    {
        colorchanger(btnsemaforos, btntildesemaforos, btncruzsemaforos);
        hoverchanger(btnsemaforos);
        estadocruzar = "No";
        estadoparar = "No";
    }

    if(!myJson.mensaje.includes("pozos"))
    {
        colorchanger(btnpozos, btntildepozos, btncruzpozos);
        hoverchanger(btnpozos);
        estadopozos = "No";
    }

    if(!myJson.mensaje.includes("cordon"))
    {
        colorchanger(btncordonesdecalle, btntildecordonesdecalle, btncruzcordonesdecalle);
        hoverchanger(btncordonesdecalle);
        estadocordonesdecalle = "No";
    }

    if(!myJson.mensaje.includes("cruces"))
    {
        colorchanger(btnsendaspeatonales, btntildesendaspeatonales, btncruzsendaspeatonales);
        hoverchanger(btnsendaspeatonales);
        estadosendaspeatonales = "No";
    }

    if(!myJson.mensaje.includes("autos"))
    {
        colorchanger(btnautomoviles, btntildeautomoviles, btncruzautomoviles);
        hoverchanger(btnautomoviles);
        estadoautomoviles = "No";
    }

    if(!myJson.mensaje.includes("moto"))
    {
        colorchanger(btnmotos, btntildemotos, btncruzmotos);
        hoverchanger(btnmotos);
        estadomotos = "No";
    }

    if(!myJson.mensaje.includes("bicicleta"))
    {
        colorchanger(btnbicicletas, btntildebicicletas, btncruzbicicletas);
        hoverchanger(btnbicicletas);
        estadobicicletas = "No";
    }

    if(!myJson.mensaje.includes("personas"))
    {
        colorchanger(btnpersonas, btntildepersonas, btncruzpersonas);
        hoverchanger(btnpersonas);
        estadopersonas = "No";
    }

    if(!myJson.mensaje.includes("escalones"))
    {
        colorchanger(btnescalones, btntildeescalones, btncruzescalones);
        hoverchanger(btnescalones);
        estadoescalones = "No";
    }
    mensajeaenviar = [valorvolumen.value, estadocruzar, estadoparar, estadopozos, estadocordonesdecalle, estadosendaspeatonales, estadoautomoviles, estadomotos, estadobicicletas, estadopersonas, estadoescalones];
    mandarmensaje();
}
);