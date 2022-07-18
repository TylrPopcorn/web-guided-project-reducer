// {state, action} => newState

const reducer = (state, action) => {
    const funcs = {
        setTitle: function () {
            return ({ ...state, title: action.payload })
        },

        setEditing: function () {
            return ({ ...state, editing: action.payload })
        },

        set_newTitleText: function () {
            return ({ ...state, newTitleText: action.payload })
        },
    }

    if (funcs[action.type] != null) {
        const data = funcs[action.type]()
        return data;
    }

    return state;
}

export default reducer;