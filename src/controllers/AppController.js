import AppInfo from "../models/AppInfoModel.js";

// Create a new appInfo
export const createAppInfo = async (req, res) => {
    try {
        console.log("Received data:", req.body); // Add this line to debug
        const { workingHours, deliveryHours, terms, phone } = req.body;

        if (!workingHours || !deliveryHours || !terms || !phone) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const newAppInfo = new AppInfo({
            workingHours,
            deliveryHours,
            terms,
            phone,
        });

        await newAppInfo.save();
        res.status(201).json(newAppInfo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};  

// Get appInfo
export const getAppInfo = async (req, res) => {
    try {
        const appInfo = await AppInfo.find();
        res.status(200).json(appInfo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update the appInfo
export const updateAppInfo = async (req, res) => {
    try {
        const updatedAppInfo = await AppInfo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedAppInfo) {
            return res.status(404).json({ error: "AppInfo not found" });
        }
        res.status(200).json(updatedAppInfo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete appInfo
export const deleteAppInfo = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedAppInfo = await AppInfo.findByIdAndDelete(id);
        if (!deletedAppInfo) {
            return res.status(404).json({ error: "AppInfo not found" });
        }
        res.status(200).json({ message: "AppInfo deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
