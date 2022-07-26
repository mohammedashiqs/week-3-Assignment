var read = require('readline-sync')


class Area{

    circle()
      {
          var radius=read.question("Enter the radius")
          var area=(3.14)*(radius*radius);
          console.log("Area of the Circle: "+area);
      }
  
      square()
      {
          var length=read.question("Enter the length")
          var area=length*length;
          console.log("Area of the Square: "+area);
      }
  
      rectangle()
      {
          var length=read.question("Enter the length")
          var breadth=read.question("Enter the breadth")
          var area=length*breadth;
          console.log("Area of the Rectangle: "+area);
      }
  
      triangle()
      {
          var height=read.question("Enter the height")
          var base =read.question("Enter the base")
          var area=(height*base)/2;
          console.log("Area of the Triangle: "+area);
          
      }
  
  }







class MyClass extends Area{

    constructor(){
        super()
        var choice = read.question("Enter your choice\n\n 1.Circle\n 2.Square\n 3.Rectangle\n 4.Triangle\n") 
		switch(choice)
		{
		case '1':
			this.circle();
			break;
		case '2':
			this.square();
			break;
		case '3':
			this.rectangle();
			break;
		case '4':
			this.triangle();
			break;
		default:
			console.log("Invalid entry");
		}
    }



    circle(){
        super.circle()
    }

    square(){
        super.square()
    }

    rectangle(){
        super.rectangle()
    }

    triangle(){
        super.triangle()
    }

}

var obj = new MyClass()


