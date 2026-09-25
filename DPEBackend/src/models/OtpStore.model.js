import mongoose from 'mongoose';

const otpStoreSchema = new mongoose.Schema(
  {
    identifier: {
      type: String,
      required: true,
      index: true
    },
    otp: {
      type: String,
      required: true
    },
    expiresAt: {
      type: Date,
      required: true,
      index: { expires: '10m' } // Mongoose TTL index: auto-deletes record after 10 mins
    },
    isVerified: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const OtpStore = mongoose.model('OtpStore', otpStoreSchema);
export default OtpStore;
