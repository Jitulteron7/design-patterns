class House {
    constructor() {
      this.bedrooms = 0;
      this.bathrooms = 0;
      this.hasGarden = false;
      this.hasGarage = false;
    }
  
    describe() {
      console.log(
        `House with ${this.bedrooms} bedrooms, ${this.bathrooms} bathrooms, ${
          this.hasGarden ? "with a garden" : "without a garden"
        }, ${this.hasGarage ? "with a garage" : "without a garage"}`
      );
    }
  }

  
  class HouseBuilder {
    constructor() {
      this.house = new House();
    }
  
    setBedrooms(count) {
      this.house.bedrooms = count;
      return this;
    }
  
    setBathrooms(count) {
      this.house.bathrooms = count;
      return this;
    }
  
    setHasGarden(hasGarden) {
      this.house.hasGarden = hasGarden;
      return this;
    }
  
    setHasGarage(hasGarage) {
      this.house.hasGarage = hasGarage;
      return this;
    }
  
    build() {
      return this.house;
    }
  }

  
  // Building a small house
const smallHouse = new HouseBuilder()
.setBedrooms(2)
.setBathrooms(1)
.build();

smallHouse.describe(); // Output: House with 2 bedrooms, 1 bathrooms, without a garden, without a garage

// Building a large house with a garden and a garage
const largeHouse = new HouseBuilder()
.setBedrooms(4)
.setBathrooms(3)
.setHasGarden(true)
.setHasGarage(true)
.build();

largeHouse.describe(); // Output: House with 4 bedrooms, 3 bathrooms, with a garden, with a garage
