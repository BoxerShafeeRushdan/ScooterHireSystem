class User {
    constructor (name, age) {
        this.name = name
        this.age = age
        
    }
}

class ActiveUser extends User {
    
    constructor (name, age) {
        super(name,age)
        this.age = 25
        this.name = 'Bruce Wayne'
        
       
       
       if(this.age < 18) {
           
        console.log("Sorry your too young! Try again once your 18!");
        }

        else(this.age > 18); {
            
            console.log("Welcome to the Scooter App",this.name,"!")
        }}
    }
    



module.exports = User

module.exports = ActiveUser