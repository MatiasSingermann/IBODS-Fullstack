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
        if(hammenu.style.display === "none")
        {
            hammenu.style.display = "flex";
        }
        else
        {
            hammenu.style.display = "none";
        }
    }
    );

    hamcon.addEventListener("click", () => {
        hammenu.style.display = "none";
    }
    );
    hamvol.addEventListener("click", () => {
        hammenu.style.display = "none";
    }
    );
    hamobj.addEventListener("click", () => {
        hammenu.style.display = "none";
    }
    );
    document.addEventListener("click", (e) => {
        if(e.target.id === "puntos-img" && hammenu.style.display === "none")
        {
            hammenu.style.display = "flex";
        }
        else if((e.target.id === "hammenu" && hammenu.style.display === "flex") || (e.target.id === "puntos-img" && hammenu.style.display === "flex"))
        {
            hammenu.style.display = "none";
        }
        console.log("Display: " + hammenu.style.display);
        console.log("Target: " + e.target.id);
    }
    );

    btnmas.addEventListener("click", () => {
        if(valorvolumen.value < 100)
        {
            let valvol = parseInt(valorvolumen.value) + 1;
            valorvolumen.value = valvol;
        }
        console.log(valorvolumen.value);
    }
    );
    btnmenos.addEventListener("click", () => {
        if(valorvolumen.value > 0)
        {
            let valvol = parseInt(valorvolumen.value) - 1;
            valorvolumen.value = valvol;
        }
        console.log(valorvolumen.value);
    }
    );
}
);