import { Profilet } from '../models/trainer.model';

export class Payment {
  id : string;
  txnType: string;
  amount: number;
  remarks: string;
  mentorName: string;
  techName: string;
  totalAmountToMentor: number;
  userId: string;
  trainingId: string;
 
}

export class Curr {
	
	id : string;
  startDate: string;
  fees: number;
  mentorId: number;
  progress: number;
  rating: number;
  
  commissionPercent:number;
  razorpayPaymentId:String;
  skillId:String;
  startTime:String;
  status:number;
  userId:String;
  techId:String;
  mentor: Profilet;
}
