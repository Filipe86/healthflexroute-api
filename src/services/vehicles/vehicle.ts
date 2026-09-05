interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  vin: string; // Vehicle Identification Number
  licensePlate: string;
  ownerId: string; // Reference to the owner's user ID
}
