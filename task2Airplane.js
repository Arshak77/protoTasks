function Airplane(name) {
    this.name = name;
    this.isFlying = false;
    
    this.takeOff = function() {
      this.isFlying = true;
      console.log(`${this.name} is now flying.`);
    }
    
    this.land = function() {
      this.isFlying = false;
      console.log(`${this.name} has landed.`);
    }
  }
  
  const airplane = new Airplane("Boeing 747");
  console.log(airplane.isFlying);
  airplane.takeOff(); 
  console.log(airplane.isFlying); 
  airplane.land(); 
  console.log(airplane.isFlying);