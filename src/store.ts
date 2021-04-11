import { configureStore } from '@reduxjs/toolkit'

import { RootState } from './model/model'

const reducer = {}

export const getTestStore = (preloadedState: Partial<RootState>) =>
	configureStore({
		reducer,
		preloadedState,
	})

export default configureStore({
	reducer,
})
