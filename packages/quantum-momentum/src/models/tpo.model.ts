import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';
import CollectionName from '@quantum/momentum/src/utils/collectionName';
import { Gender } from '@quantum/momentum/src/utils/enums';

export interface ITpo extends Document {
  email: string;
  firstName: string;
  middleName?: string;
  lastName?: string;
  gender?: Gender;
  password: string;
}

const TpoSchema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String },
  gender: { type: String, enum: Object.values(Gender) },
  password: { type: String, required: true },
});

TpoSchema.pre('save', function (this: ITpo, next) {
  const saltRounds = 8;

  if (this.isNew || this.isModified('password')) {
    const document = this;
    bcrypt.hash(document.password, saltRounds, function (err, hashedPassword) {
      if (err) {
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

const Tpo = mongoose.model<ITpo>(CollectionName.TPO, TpoSchema);

export default Tpo;
