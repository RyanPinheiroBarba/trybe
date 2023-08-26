class Tv {
  brand: string;
  size: string;
  resolution: string;
  connections: string[];
  connectedTo: string[];

  constructor(
    brand: string, size: string,
    resolution: string, 
    connections: string[]) {

    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
    this.connectedTo = [];
  };
  
  turnOn() {
    console.log(`Turning on ${this.brand} TV...`);
    console.log(`TV ${this.brand} ${this.size} is on!`);
    console.log(`Resolution: ${this.resolution}`);
    console.log(`Connections: ${this.connections}`);
    console.log(`Connected to: ${this.connectedTo}`);
    console.log('End of the program');
    console.log('-------------------');
  }
};

const samsungTv = new Tv('Samsung', '55"', '4k', ['HDMI', 'USB', 'Bluetooth']);
samsungTv.turnOn();
const lgTv = new Tv('LG', '65"', '4k', ['HDMI', 'USB', 'Bluetooth']);
lgTv.turnOn();
