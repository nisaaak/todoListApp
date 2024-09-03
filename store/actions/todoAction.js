export function saveTodo(data) {
    return {
        type: '@APP/TODO/SAVE_TODO',
        payload: data
    }
}

export function clearTodo(data) {
    return {
        type: '@APP/TODO/CLEAR_TODO',
    }
}