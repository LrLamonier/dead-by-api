import { Schema, model, models } from "mongoose";

interface IKillerPower {
  powerId: number;
  powerName: string;
  powerCode: string;
}

interface IKillerImgs {
  portrait: string;
  store: string;
}

export interface IKiller {
  number: number;
  code: string;
  name: string;
  fullName: string;
  nationality: string;
  gender: string;
  licensed: boolean;
  dlc: string;
  difficulty: string;
  realm: string;
  powerAttackType: string;
  weapon: string;
  moveSpeed: string;
  terrorRadius: string;
  height: string;
  perks_names: string[];
  perks_ids: number[];
  power: IKillerPower;
  overview: string;
  backstory: string;
  imgs: IKillerImgs;
}

const killerSchema = new Schema<IKiller>({
  number: { type: Number, unique: true, required: true },
  code: { type: String, unique: true, required: true },
  name: { type: String, unique: true, required: true },
  fullName: { type: String, unique: true, required: true },
  nationality: { type: String, required: true },
  gender: { type: String, required: true },
  licensed: { type: Boolean, required: true },
  dlc: { type: String, required: true },
  difficulty: { type: String, required: true },
  realm: { type: String, required: true },
  powerAttackType: { type: String, required: true },
  weapon: { type: String, required: true },
  moveSpeed: { type: String, required: true },
  terrorRadius: { type: String, required: true },
  height: { type: String, required: true },
  perks_names: [
    {
      type: String,
      required: true,
    },
  ],
  perks_ids: [
    {
      type: Number,
      required: true,
    },
  ],
  power: {
    powerId: {
      type: Number,
      required: true,
    },
    powerName: {
      type: String,
      required: true,
    },
    powerCode: {
      type: String,
      required: true,
    },
  },
  overview: { type: String, required: true },
  backstory: { type: String, required: true },
  imgs: {
    portrait: {
      type: String,
      required: true,
    },
    store: {
      type: String,
      required: true,
    },
  },
});

export default models.Killer || model<IKiller>("Killer", killerSchema);
