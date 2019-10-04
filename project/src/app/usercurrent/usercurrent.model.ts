import { Profilet } from '../models/trainer.model';

export class Curr {
	
	id : string;
  startDate: string;
  fees: number;
  mentorId: number;
  progress: number;
  rating: number;
  mentor: Profilet;
}