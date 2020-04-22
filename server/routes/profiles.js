const express = require("express");
const router = express.Router();

const Profile = require("../models/Profile")

router.get("/:profileId", async (req, res) => {
    try {
        const id = req.params.profileId;
        const profile = await Profile.findById(id);
        if (profile) {
            res.status(200).json(profile);
        } else {
            res.status(404).json({ message: "No valid entry found" });
        }
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

router.get("/", async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.status(200).json(profiles);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

router.post("/", async (req, res) => {
    const myprofile = new Profile({
        userid: req.body.userid,
        friends: req.body.friends
    });

    try {
        const savedProfile = await myprofile.save();
        res.status(201).json({
            message: "Handling POST request to /api/profiles - Success!",
            createdProfile: savedProfile
        });
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

router.patch("/:profileId", async (req, res) => {
    try {
        const id = req.params.profileId;
        const updatedProfile = await Profile.updateOne(
            { _id: id },
            {
                $set: { friends: req.body.friends }
            }
        );
        res.status(200).json(updatedProfile);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

router.delete("/:profileId", async (req, res) => {
    try {
        const id = req.params.profileId;
        const removedProfile = await Profile.deleteOne({ _id: id });
        res.status(200).json(removedProfile);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});
 

module.exports = router;