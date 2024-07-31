import UserModel from "../models/userModel";
import Notification from "../models/notification";
import { Expo } from "expo-server-sdk";
export const addnotification = async (req, res) => {
  try {
    const { title, message, body, to, expoPushToken: pushToken } = req.body;
    console.log(Expo.isExpoPushToken(pushToken));
    if (Expo.isExpoPushToken(pushToken)) {
      const expo = new Expo();

      const messageData = {
        to: pushToken,
        sound: "default",
        title,
        body: message,
      };
      try {
        expo.sendPushNotificationsAsync([messageData]).then((tickets) => {
          console.log("Notification sent:", tickets);
        });
      } catch (error) {
        console.log(error);
      }
    }

    await Notification.create({
      user: req.user._id,
      sendTo: to,
      body: body,
      data: req.body.data,
    });

    return res.json({
      success: true,
      message: "notification succes",
    });
  } catch (error) {
    console.log("error inside notify post author is ", error);
    return res.json({ success: false, error });
  }
};
