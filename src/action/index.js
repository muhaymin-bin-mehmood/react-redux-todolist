export const addTodo = (data) => {
    return {
        type: "ADD_TODO",
        payload : {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: "DElETE_TODO",
        id
    }
}

export const deleteAll = () => {
    return {
        type: "DELETE_ALL"
    }
}