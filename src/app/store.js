import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/MailSlice';

export default configureStore({
  reducer: {
    mail: mailReducer,
  },
});
