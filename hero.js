

class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
        this.type = type.toLowerCase()
    }

    typeArm(){
        if(this.type === "guerreiro"){
        return "espada";
        }
        else if(this.type === "mago"){
            return "magia";
        }
        else if(this.type === "monge"){
            return "artes marciais";
        }
        else if(this.type === "ninja"){
            return "shurikens";
        }
    }

    typeHero(){
        if(this.type === "guerreiro"){
            return "Guerreiro";
        }
        else if(this.type === "mago"){
            return "Mago";
        }
        else if(this.type === "monge"){
            return "Monge";
        }
        else if(this.type === "ninja"){
            return "Ninja";
        }
    }

    attack(){
        let typeArm = this.typeArm();
        let typeHero = this.typeHero();
        console.log(`O ${this.name} é um ${typeHero} e atacou usando ${typeArm}!`)
    }

    showClass(){
        let typeHero = this.typeHero()
        console.log(`O ${this.name} é um ${typeHero}!`)
    }

    showWeapon(){
        let typeArm = this.typeArm()
        console.log(`O ${this.name} usa ${typeArm}!`)
    }

}   

let hero1 = new hero("Fern", "112", "Guerreiro")
let hero2 = new hero("Merlin", "2000", "maGo")
let hero3 = new hero("Khifis", "26", "moNgE")
let hero4 = new hero("Seiya", "22", "NInja")

hero1.attack()
hero2.attack()
hero3.attack()
hero4.attack()

hero1.showWeapon()
hero2.showWeapon()
hero3.showWeapon()
hero4.showWeapon()

hero1.showClass()
hero2.showClass()
hero3.showClass()
hero4.showClass()