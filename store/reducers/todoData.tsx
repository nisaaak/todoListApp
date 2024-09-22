import { IForm } from "interfaces/IForm"

const initial: { todo: IForm[] } = {
    todo: [],
}

type Action = {
    type: string;
    payload: any;
}

const data = (
    state = initial,
    action: Action
) => {
    switch (action.type) {
        case '@APP/TODO/SAVE_TODO':
            // return Object.assign({}, state, {
            //     todo: action.payload,
            // });
            return {
                ...state,
                todo: action.payload?.map((e: any) => e)
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