import { combineReducers } from 'redux'

import todoData from './todoData'

const reducer = combineReducers<any>({
    todoData,
})

export default reducer