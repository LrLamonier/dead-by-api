import { Schema, models, model } from "mongoose";

export interface IKillerPower {
  powerId: number;
  powerName: string;
  powerCode: string;
  killerCode: string;
  description: string;
  powerImg: string[];
}

const killerPowerSchema = new Schema<IKillerPower>({
  powerId: { type: Number, unique: true, required: true },
  powerName: { type: String, unique: true, required: true },
  powerCode: { type: String, unique: true, required: true },
  killerCode: { type: String, unique: true, required: true },
  description: { type: String, required: true },
  powerImg: [
    {
      type: String,
      required: true,
    },
  ],
});

export default models.KillerPower ||
  model<IKillerPower>("KillerPower", killerPowerSchema);
