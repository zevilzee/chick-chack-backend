import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export async function sendOTP(phone) {
  const mobileNo = phone;
  const OTP = generateRandomNumber(1000, 9999);
  const params = {
    Message: `Welcome! your mobile verification code is: ${OTP} Mobile Number is: ${mobileNo}`,
    PhoneNumber: mobileNo,
  };

  const snsClient = new SNSClient({
    region: "eu-north-1",
    credentials: {
      accessKeyId: "AKIAQGYBPPHCKW7ZNZ3K",
      secretAccessKey: "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",
    },
  });

  try {
    await snsClient.send(new PublishCommand(params));
    return OTP;
  } catch (err) {
    console.log("Error", err);
    return err;
  }
}
