function randomizarNumero() {
    return{
        dado: document.getElementById("randomizaInput"),
        inicia() {
            this.dado.value = 0
            this.clickBntRandom();
            
        },
        clickBntRandom(){
            document.addEventListener("click", e => {
                const el = e.target;

                if(el.classList.contains("randomizar")){
                    this.randomizarNumero();
                }
            })
        },
        randomizarNumero(){
            let number = Math.floor(Math.random() * (20 - 1 + 1)) + 1 
            this.displayRandom(number);
        },
        displayRandom(valor){
            
            this.limparDisplayRandom()
            this.dado.value = valor
            console.log("veio aqui")
        },
        limparDisplayRandom(){
            this.dado.value = " "
            
        }

    }
}
const randomizando = randomizarNumero();
randomizando.inicia()