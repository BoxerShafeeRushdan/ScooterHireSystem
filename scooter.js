class Scooter {
    constructor (location,battery,range,condition) {
        this.location = location 
        this.battery = battery
        this.range = range
        this.condition = condition
        

    }

}

class ActiveScooter extends Scooter {
    constructor (location,battery,range,condition) {
        super(location,battery,range,condition)
        this.location = 'Baltimore'
        this.battery = 100
        this.range = 32
        this.condition = 'Good'
        

        if(this.battery < 100) {
            console.log("Sorry, this scooter needs to charge");
        }

        else(this.battery = 100); {
           //setTimeout(() => {console.log("Return scooter to charging location")}, 2000 * 60 * 60)
        }

        if(this.location = 'Baltimore') {
            console.log("This is the correct charging location, have a nice day")
        }

    }
}



module.exports = Scooter 

module.exports = ActiveScooter