class Order 
{
  constructor() {
    this.customerID = 0;
    this.roomNumber = 0;
    this.noOfOccupants = 0;
    this.beverageIds = [];
    this.platterIds = []
    this.deliveryStart = ""
    this.deliveryEnd = "";
  }
    customerID: number;
    roomNumber: number;
    noOfOccupants: number;
    beverageIds: number[];
    platterIds: number[];
    deliveryStart: string;
    deliveryEnd: string;
};
