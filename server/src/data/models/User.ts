import mongoose from "mongoose";

type UserType = "barber" | "client";

type UserModel = {
  name: string;
  cpf: string;
  phone: string;
  type: UserType;
};

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    cpf: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    type: { type: String, required: true,  enum: ['barber', 'client'], },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<UserModel>("User", userSchema);

export default User;
