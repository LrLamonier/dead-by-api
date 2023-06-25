import { Schema, model, models } from "mongoose";

export interface IItem {
  name: string;
  code: string;
  type: string;
  rarity: string;
  description: string;
  icon: string;
}

const itemSchema = new Schema<IItem>({
  name: { type: String, required: true, unique: true },
  code: { type: String, required: true, unique: true },
  type: { type: String, required: false },
  rarity: { type: String, required: false },
  description: { type: String, required: true, unique: true },
  icon: { type: String, required: true, unique: true },
});

export default models.Item || model<IItem>("Item", itemSchema);
