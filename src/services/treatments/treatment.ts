interface Treatment {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  price: number; // in USD
  category: 'physical' | 'mental' | 'alternative';
}
