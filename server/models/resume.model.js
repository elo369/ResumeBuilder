import mongoose, { model, Schema } from "mongoose";

let resumeDetail = new Schema({
  personalInfo: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    linkedin: { type: String },
    github: { type: String },
  },
  educationData: {
    education: {
      college: { type: String, required: true },
      degree: { type: String, required: true },
      startDate: { type: Date },
      endDate: { type: Date },
      locationInstitution: { type: String },
      educationDescription: { type: String },
    },
    educationScript: { type: Array },
  },
  experience: {
    mainExperience: {
      company: { type: String },
      jobTitle: { type: String },
      experienceStartDate: { type: Date },
      experienceEndDate: { type: Date },
      // currentlyWorking: { type: Boolean },
      jobLocation: { type: String },
      description: { type: Array },
    },
    dynamic: [
      {
        jobTitle: { type: String },
        company: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
        // currentlyWorking: { type: Boolean },
        jobLocation: { type: String },
        description: { type: Array },
      },
    ],
  },
  projects: {
    mainProject: {
      projectTitle: { type: String },
      techstack: { type: String },
      projectGithub: { type: String },
      description: { type: Array },
    },
    mostProjects: [
      {
        title: { type: String },
        techstack: { type: String },
        projectGithub: { type: String },
        description: { type: Array },
      },
    ],
  },
  technicalSkills: {
    language: { type: String },
    devTools: { type: String },
    techFrameworks: { type: String },
  },
  achievements: {
    defaultAchieve: {
      achievementTitle: { type: String },
      achievementDescription: { type: String },
    },
    dynamicAchieve: [
      {
        title: {type:String},
        explan: {type:String},
      },
    ],
  },
});

let resumeModel = model("Resume", resumeDetail);

export default resumeModel;
