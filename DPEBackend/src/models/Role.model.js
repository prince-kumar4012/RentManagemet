import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    displayName: {
      type: String,
      required: true
    },
    permissions: [{ type: String }],
    isSystemDefault: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const Role = mongoose.model('Role', roleSchema);
export default Role;
