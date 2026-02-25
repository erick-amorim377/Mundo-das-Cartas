function planeswalkerDois() {
    return {
        vidaDois: document.getElementById("vidaDois"),
        manaDois: document.getElementById("manaDois"),
        inicia() {
            this.vidaDois.value = 20;
            this.manaDois.value = 0;

            this.cliqueBnt()
        },
        realizarContaMana(e) {
            let mana = this.manaDois.value;
            

            try {
                conta =  eval(mana + e)
                this.limparDisplayMana()
                this.bntParaDisplayMana(conta)
            } catch (error) {
                console.log(error)
            }
        },
        realizarContaVida(e) {
            let vida = this.vidaDois.value;
            

            try {
                conta =  eval(vida + e)
                this.limparDisplayVida()
                this.bntParaDisplayVida(conta)
            } catch (error) {
                console.log(error)
            }
            
        },
        cliqueBnt()   {
            document.addEventListener("click", e => {
                const el = e.target;
                

                if(el.classList.contains('botaoVidaDois')) {
                    this.realizarContaVida(el.innerText)
                }
                if(el.classList.contains('botaoManaDois')) {
                    this.realizarContaMana(el.innerText)
                    
                }
            })
        },
        bntParaDisplayVida(valor){
            this.vidaDois.value += valor

        },
        bntParaDisplayMana(valor){
            this.manaDois.value += valor
        },

        limparDisplayVida(){
            this.vidaDois.value = " "
        },
        limparDisplayMana(){
            this.manaDois.value = " "
        }

    };
}
const jogadorDois = planeswalkerDois();
jogadorDois.inicia()
