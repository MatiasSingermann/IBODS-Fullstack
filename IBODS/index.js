document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const hambutton = document.getElementById("div-puntos");
    const hammenu = document.getElementById("ham-menu-container");
    
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
}
);