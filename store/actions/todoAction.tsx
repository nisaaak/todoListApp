import { IForm } from "interfaces/IForm"

export function saveTodo(data: IForm[]) {
    return {
        type: '@APP/TODO/SAVE_TODO',
        payload: data
    }
}

export function clearTodo() {
    return {
        type: '@APP/TODO/CLEAR_TODO',
    }
}