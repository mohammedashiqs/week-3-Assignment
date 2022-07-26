function Car(name,milage,max_speed){
        this.name = name;
        this.milage = milage;
        this.max_speed = max_speed;
    }


    const mycar = new Car("BMW",25,"400km/hr")

    console.log(mycar.name)
    console.log(mycar.milage)
    console.log(mycar.max_speed)

    