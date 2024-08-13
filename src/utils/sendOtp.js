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
    region: process.env.REGION,
    credentials: {
      accessKeyId: process.env.ACCESS_Key,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
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
