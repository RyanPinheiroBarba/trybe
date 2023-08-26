class Tv {
  private _brand: string;
  private _size: string;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo: String[];

  constructor(
    brand: string, size: string,
    resolution: string, 
    connections: string[]) {

    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
    this._connectedTo = [];
  };

  get connectedTo() {
    return this._connectedTo;
  };

  set connectedTo(device: String[]) {
    const ifPossibleConnect = this._connections.some((connection) => {
      return device.includes(connection);
    });
    if (ifPossibleConnect) {
      this._connectedTo = device;
      console.log(`Connected to ${device}`);
      console.log('End of the program');
      console.log('-------------------');
    } else {
      console.log('Sorry, connection unavailable');
      console.log('End of the program');
      console.log('-------------------');
    }
  };
  
  turnOn() {
    console.log(`Turning on ${this._brand} TV...`);
    console.log(`TV ${this._brand} ${this._size} is on!`);
    console.log(`Resolution: ${this._resolution}`);
    console.log(`Connections: ${this._connections}`);
  }
};

const samsungTv = new Tv('Samsung', '55"', '4k', ['HDMI', 'USB', 'Bluetooth']);
samsungTv.turnOn();
samsungTv.connectedTo = ['HDMI'];
samsungTv.connectedTo = ['USB-C'];

