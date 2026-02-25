function planeswalkerUm() {
    return {
        vidaUm: document.getElementById("vidaUm"),
        manaUm: document.getElementById("manaUm"),
        inicia() {
            this.vidaUm.value = 20;
            this.manaUm.value = 0;

            this.clickBnt()
        },
        realizarContaMana(e) {
            let mana = this.manaUm.value;
            

            try {
                conta = eval(mana + e)
                this.limparDisplayMana()
                this.bntParaDisplayMana(conta)
            } catch (error) {
                console.log(error)
            }
        },
        realizarContaVida(e) {
            let vida = this.vidaUm.value;
            

            try {
                conta =  eval(vida + e)
                this.limparDisplayVida()
                this.bntParaDisplayVida(conta)
            } catch (error) {
                console.log(error)
            }
            
        },
        clickBnt()   {
            document.addEventListener("click", e => {
                const el = e.target;
                

                if(el.classList.contains('botaoVidaUm')) {
                    this.realizarContaVida(el.innerText)
                }
                if(el.classList.contains('botaoManaUm')) {
                    this.realizarContaMana(el.innerText)
                    
                }
            })
        },
        bntParaDisplayVida(valor){
            console.log(this.vidaUm.value);
            console.log(valor);
            this.vidaUm.value += valor
            console.log(this.vidaUm.value);

        },
        bntParaDisplayMana(valor){
            this.manaUm.value += valor
        },

        limparDisplayVida(){
            this.vidaUm.value = " "
        },
        limparDisplayMana(){
            this.manaUm.value = " "
        }

    };
}
const jogadorUm = planeswalkerUm();
jogadorUm.inicia()
