import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';
import CollectionName from '@quantum/momentum/src/utils/collectionName';
import { Gender } from '@quantum/momentum/src/utils/enums';

export interface IStudent extends Document {
  email: string;
  firstName: string;
  middleName?: string;
  lastName?: string;
  gender?: Gender;
  password: string;
}

const StudentSchema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String },
  gender: { type: String, enum: Object.values(Gender) },
  password: { type: String, required: true },
});

StudentSchema.pre('save', function (this: IStudent, next) {
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

const Student = mongoose.model<IStudent>(CollectionName.STUDENT, StudentSchema);

export default Student;

@ Todo I have to create the following fil