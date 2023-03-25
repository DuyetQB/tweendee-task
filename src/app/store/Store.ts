import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import UserDetail from './UserDetail';

export const store = configureStore({
  reducer: {
    UserDetail: UserDetail,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
