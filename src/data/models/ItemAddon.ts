import { Schema, model, models } from "mongoose";

export interface IItemAddon {
  name: string;
  code: string;
  itemType: string;
  rarity: string;
  description: string;
  icon: string;
}

const itemAddonSchema = new Schema<IItemAddon>({
  name: { type: String, required: true, unique: true },
  code: { type: String, required: true, unique: true },
  itemType: { type: String, required: true },
  rarity: { type: String, required: true },
  description: { type: String, required: true, unique: true },
  icon: { type: String, required: true, unique: true },
});

export default models.ItemAddon ||
  model<IItemAddon>("ItemAddon", itemAddonSchema);
