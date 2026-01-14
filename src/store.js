import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import jobSlice from './features/job/jobSlice';
import allJobsReducer from './features/allJobs/allJobsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    job: jobSlice,
    allJobs: allJobsReducer,
  },
});
