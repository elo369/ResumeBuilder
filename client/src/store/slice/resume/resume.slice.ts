import { createSlice } from "@reduxjs/toolkit";
// @ts-ignore
import { getResumeData, resumeThunker } from "./resume.thunk";

type Experience = {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  // currentlyWorking: string;
  jobLocation: string;
  description: string[];
};

type Achievement = {
  title: string;
  explan: string;
};

type Projects = {
  title: string;
  techstack: string;
  projectGithub: string;
  description: string[];
};

interface ResumeState {
  /// interface
  loading: boolean;
  resumeInfoStore: any;
  collectData: {
    personalInfo: object;
    educationData: {
      education: object;
      educationScript: string[];
    };
    achievements: {
      defaultAchieve: object;
      dynamicAchieve: Achievement[];
    };
    experience: {
      mainExperience: object;
      dynamic: Experience[];
    };
    // experience:object;
    projects: {
      mainProject: object;
      mostProjects: Projects[];
    };
    technicalSkills: object;
  };
  template: string;
}

let initialState: ResumeState = {
  loading: false,
  resumeInfoStore: null,
  collectData: {
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      linkedin: "",
      github: "",
    },
    educationData: {
      education: {
        college: "",
        degree: "",
        educationDescription: "",
        endDate: "",
        locationInstitution: "",
        startDate: "",
      },
      educationScript: [],
    },
    achievements: {
      defaultAchieve: {
        title: "",
        explan: "",
      },
      dynamicAchieve: [],
    },
    // experience:{},
    experience: {
      mainExperience: {
        company: "",
        jobTitle: "",
        experienceStartDate: "",
        experienceEndDate: "",
        // currentlyWorking: { type: Boolean },
        jobLocation: "",
        description: [],
      },
      dynamic: [],
    },
    projects: {
      mainProject: {
        projectTitle: "",
        techstack: "",
        projectGithub: "",
        description: [],
      },
      mostProjects: [],
    },
    technicalSkills: {},
  },
  template: "",
};

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updateDataResume: (state, action) => {
      state.collectData = { ...state.collectData, ...action.payload };
    },
    useTemplate: (state, action) => {
      state.template = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resumeThunker.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(resumeThunker.fulfilled, (state, action) => {
      state.loading = false;
      state.resumeInfoStore = action?.payload;
    });
    builder.addCase(resumeThunker.rejected, (state) => {
      state.loading = true;
    });
    builder.addCase(getResumeData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getResumeData.fulfilled, (state, action) => {
      state.loading = false;
      state.collectData = action?.payload;
    });
    builder.addCase(getResumeData.rejected, (state) => {
      state.loading = true;
    });
  },
});

export const { updateDataResume, useTemplate } = resumeSlice.actions;

export default resumeSlice.reducer;
