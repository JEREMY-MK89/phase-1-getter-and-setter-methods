 


// Add your Circle class here
class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
 ///correctly returning  the radius property of a Circle instance using `circle.radius`"
    get diameter() {
      return this.radius * 2;
    }
   //// radius using the pseudo-property `circle.diameter
   
    set diameter(diameter) {
      this.radius = diameter / 2;
    }
  
    get circumference() {
      return Math.PI * this.diameter;
    }
  

    set circumference(circumference) {
      this.diameter = circumference / Math.PI;
    }
  
 
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    set area(area) {
      this.radius = Math.sqrt(area / Math.PI);
    }
  }
  
 
  const circle1 = new Circle(5)
  console.log(circle1.diameter); 
  console.log(circle1.circumference);    
  console.log(circle1.area);             
  
  circle1.diameter = 14;
  console.log(circle1.radius);           
  console.log(circle1.circumference);    
  console.log(circle1.area);         
  
  circle1.circumference = 100;
  console.log(circle1.radius);           
  console.log(circle1.diameter);         
  console.log(circle1.area);             
  
  circle1.area = 50;
  console.log(circle1.radius);           
  console.log(circle1.diameter);        
  console.log(circle1.circumference);   