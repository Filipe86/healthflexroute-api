interface HeathCenter {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  website?: string; // optional
  services: string[]; // list of services offered
}
