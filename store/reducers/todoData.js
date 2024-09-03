const initial = () => {
    return {
        todo: [],
        todoItem: {}
    }
}

const data = (
    state = initial(),
    action
) => {
    switch (action.type) {
        case '@APP/TODO/SAVE_TODO':
            return {
                ...state,
                todo: action.payload?.map(e => e)
            }
        case '@APP/TODO/CLEAR_TODO':
            return {
                ...state,
                todo: []
            }
    }
    return state
}

export default data