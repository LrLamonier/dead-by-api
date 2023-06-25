import { Schema, model, models } from "mongoose";

export interface IKillerAddon {
  killerId: number;
  killerCode: string;
  powerCode: string;
  name: string;
  addonCode: string;
  rarity: string;
  description: string;
  icon: string;
}

const killerAddonSchema = new Schema<IKillerAddon>({
  killerId: { type: Number, unique: true, required: true },
  killerCode: { type: String, unique: true, required: true },
  powerCode: { type: String, unique: true, required: true },
  name: { type: String, unique: true, required: true },
  addonCode: { type: String, required: true },
  rarity: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, unique: true, required: true },
});

export default models.KillerAddon ||
  model<IKillerAddon>("KillerAddon", killerAddonSchema);
