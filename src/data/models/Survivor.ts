import { Schema, model, models } from "mongoose";

interface ISurvivorImgs {
  portrait: string;
  store: string;
}

export interface ISurvivor {
  number: number;
  name: string;
  code: string;
  licensed: boolean;
  difficulty: string;
  role: string;
  nationality: string;
  dlc: string;
  perks_names: string[];
  perks_ids: number[];
  overview: string;
  backstory: string;
  imgs: ISurvivorImgs;
}

const survivorSchema = new Schema<ISurvivor>({
  number: { type: Number, unique: true, required: true },
  name: { type: String, unique: true, required: true },
  code: { type: String, unique: true, required: true },
  licensed: { type: Boolean, required: true },
  difficulty: { type: String, required: true },
  role: { type: String, required: true },
  nationality: { type: String, required: true },
  dlc: { type: String, required: true },
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

export default models.Survivor || model<ISurvivor>("Survivor", survivorSchema);
