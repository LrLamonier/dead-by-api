import { Schema, model, models } from "mongoose";

export interface IKillerPerk {
  id: number;
  name: string;
  code: string;
  killerCode: string;
  killerName: string;
  description: string;
  icon: string;
}

const killerPerkSchema = new Schema<IKillerPerk>({
  id: { type: Number, unique: true, required: true },
  name: { type: String, unique: true, required: true },
  code: { type: String, unique: true, required: true },
  killerCode: { type: String, required: true },
  killerName: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
});

export default models.KillerPerk ||
  model<IKillerPerk>("KillerPerk", killerPerkSchema);
