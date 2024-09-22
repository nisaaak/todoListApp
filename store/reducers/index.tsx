import { combineReducers } from 'redux'

import todoData from './todoData'

const reducer = combineReducers<any>({
    todoData,
})

export type IRootState = ReturnType<typeof reducer>
export default reducer