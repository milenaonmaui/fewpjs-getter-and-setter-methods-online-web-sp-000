// Add your Circle class here
class Circle {
  constructor(radius){
    this.radius = radius;
  }
  
  get diameter(){
    return this.radius*2
  }
  
  get circumference() {
    return Math.PI*this.radius*2;
  }
  
  get area(){
    return Math.PI*this.radius*this.radius
  }
  
  set diameter(diam){
    this.radius = diam/2
  }
  
  set circumference(circ){
    this.radius = circ/(2*Math.PI)
  }
}