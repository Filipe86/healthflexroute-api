export class VehicleDto {
  id: string;
  make: string;
  model: string;
  year: number;
  licensePlate: string;
  vin: string; // Vehicle Identification Number
  healthCenterId: string; // ID of the associated health center
}
