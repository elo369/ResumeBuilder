import resumeModel from "../models/resume.model.js";

export const createResume = async (req, res) => {
  try {
        const { personalInfo, educationData, experience, projects, technicalSkills, achievements } = req.body;

        console.log(req.body)
     if (!personalInfo || !educationData || !experience || !projects || !technicalSkills || !achievements) {
      return res.status(400).json({ message: "Missing required sections" });
    }

    let createData = new resumeModel({
      personalInfo, 
      educationData, 
      experience, 
      projects, 
      technicalSkills, 
      achievements
    });

    await createData.save();

    return res.status(201).json({
      message: "resume created successfully",
      status: 201,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error", error: error.message });
  }
};

export const getResume = async (req, res) => {
  try {
    let getResume = await resumeModel.find();

    return res.status(201).json({
      data: getResume,
      status: 201,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error", error: error.message });
  }
};

export const getIdResume = async (req, res) => {
  try {
    let { id } = req.params;

    let resume = await resumeModel.findById(id);

    if (!removeEventListeneresume) {
      return res.status(401).json({ message: "resume not found" });
    }

    return res.status(201).json({
      data: resume,
      status: 201,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error", error: error.message });
  }
};

export const updateResume = async (req, res) => {
  try {
    let { id } = req.params;

    let updateResume = await resumeModel.findOneAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updateResume) {
      return res
        .status(404)
        .json({ message: "Resume not found or not updated" });
    }

    return res.status(201).json({
      data: updateResume,
      message: "Resume updated successfully",
      status: 201,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error", error: error.message });
  }
};


