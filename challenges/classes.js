// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(atts){
//     this.length = atts.length;
//     this.width = atts.width;
//     this.height = atts.height;
//   };
//
// volume = function(){
//     l = this.length;
//     w = this.width;
//     h = this.height;
//     v = l * w * h;
//     return v;
//   };

//   surfaceArea = function(){
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
//   };

class CuboidMaker {
    constructor(atts){
        this.length = atts.length;
        this.width = atts.width;
        this.height = atts.height;  
    };

    volume(){
        return this.length * this.width * this.height;
    };

    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    };
};

const thisOldCuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
})


// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(thisOldCuboid.volume()); // 100
 console.log(thisOldCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.