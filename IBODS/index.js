document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const hambutton = document.getElementById("div-puntos");
    const hammenu = document.getElementById("ham-menu-container");
    const hamcon = document.getElementById("ham-href-con");
    const hamvol = document.getElementById("ham-href-vol");
    const hamobj = document.getElementById("ham-href-obj");
    
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
        if(e.target.id === "hammenu" || e.target.id === "puntos-img")
        {
            hammenu.style.display = "flex";
        }
        else
        {
            hammenu.style.display = "none";
        }
    }
    );
}
);