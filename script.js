const pantalla = document.querySelector(".pantalla");
//el query selector trae un elemento del html por id o clase
const botones = document.querySelectorAll(".boton");
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        //console.log(boton.textContent);
        //guardar el contenido del boton
        const botonOn = boton.textContent
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1) {
                pantalla.textContent = "0"

            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }
        if (boton.id === "limpiar") {
            pantalla.textContent = "0";
            return;
        }
        if (boton.id === "igual") {

            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch (error) {
                pantalla.textContent = "ERROR :("
            }

            return;

        }


        //que agregue el contenido del boton a la pantalla

        if (pantalla.textContent === "0" || pantalla.textContent === "ERROR :(") {
            pantalla.textContent = botonOn
        } else {
            pantalla.textContent += botonOn
        }




    })
});