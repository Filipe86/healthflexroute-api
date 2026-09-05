interface RouteDto {
  id: string;
  name: string;
  description: string;
  distance: number; // in kilometers
  duration: number; // in minutes
  difficulty: 'easy' | 'moderate' | 'hard';
}