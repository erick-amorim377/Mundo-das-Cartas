function proximoTurno() {
    return{
        turno: document.getElementById("turnoInput"),
        inicia(){
            this.turno.value = 0;
            this.clickBntTurno(); 

        },
        clickBntTurno(){
            document.addEventListener("click", e =>{
                const el = e.target;
                if(el.classList.contains('turno')){
                    this.addUmTurno()
                }
            })

        },
        addUmTurno(){
            conta = parseInt(this.turno.value)
            conta += 1
            this.turno.value = conta                     
           
        },
        displayTurno(valor){
            this.turno.value = this.turno.value + valor
        }
    }
}
const addTurno = proximoTurno();
addTurno.inicia();