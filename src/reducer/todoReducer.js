const initialData = {
    list: []
}
const todoReducer = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id,
                        data
                    }
                ]
            };
        case "DElETE_TODO":
            const newList = state.list.filter((element) => element.id !== action.id)
            return {
                ...state,
                list: newList
            };
        case "DELETE_ALL":
            return {
                ...state,
                list: []
            };
        default: return state;
    }
}

export default todoReducer;