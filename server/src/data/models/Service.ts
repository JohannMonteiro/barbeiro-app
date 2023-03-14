import mongoose from "mongoose";

type ServiceType = "hair" | "beard" | "hairAndBeard";

type ServiceModel = {
  type: ServiceType;
  date: string;
  hoursIds: number[];
  barberId: string;
  clientId: string;
};

const serviceSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    type: {
      type: String,
      required: true,
      enum: ["hair", "beard", "hairAndBeard"],
    },
    date: { type: String, required: true },
    hoursIds: { type: [Number], required: true },
    barberId: {
      type: String,
      ref: "User",
      required: true,
    },
    clientId: {
      type: String,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model<ServiceModel>("Service", serviceSchema);

export default Service;
