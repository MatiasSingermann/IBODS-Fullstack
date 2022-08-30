document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const hambutton = document.getElementById("div-puntos");
    const hammenu = document.getElementById("ham-menu-container");
    const hamcon = document.getElementById("ham-href-con");
    const hamvol = document.getElementById("ham-href-vol");
    const hamobj = document.getElementById("ham-href-obj");
    const btnmas = document.getElementById("btn-mas");
    const btnmenos = document.getElementById("btn-menos");
    const valorvolumen = document.getElementById("num-volumen");

    hambutton.addEventListener("click", () => {
        if(hammenu.classList.contains("show"))
        {
            hammenu.classList.remove("show");
            return;
        }
        else
        {
            hammenu.classList.add("show");
        }
        // if (hammenu.style.display === "none") {
        //     hammenu.style.display = "flex";
        // }
        // else {
        //     hammenu.style.display = "none";
        // }
    }
    );

    hamcon.addEventListener("click", () => {
        if(hammenu.classList.contains("show"))
        {
            hammenu.classList.remove("show");
        }
        // hammenu.style.display = "none";
    }
    );
    hamvol.addEventListener("click", () => {
        hammenu.classList.remove("show");
    }
    );
    hamobj.addEventListener("click", () => {
        hammenu.classList.remove("show");
    }
    );
    document.addEventListener("click", (e) => {
        console.log("Display: " + hammenu.classList);
        if (e.target.id !== "puntos-img") {
            hammenu.classList.remove("show");
            return;
        }

        hammenu.classList.toggle("show");
        
        console.log("Target: " + e.target.id);
    }
    );

    btnmas.addEventListener("mousedown", () => {
        if (valorvolumen.value < 100) {
            let valvol = parseInt(valorvolumen.value) + 1;
            valorvolumen.value = valvol;
        }
        console.log(valorvolumen.value);
    }
    );
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