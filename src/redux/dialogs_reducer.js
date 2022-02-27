

const ADD_MESSAGE = "social-network/dialogs/ADD_MESSAGE"

let initialState = {
   dialogsData: [
      { message: 'Hey', id: 1 }, { message: 'How are you?', id: 2 }],
   dialogsPages: [
      { fullName: 'Artem', lastMessage: 'How about cash?', id: 1 },
      { fullName: 'Lolka', lastMessage: 'Kekai', id: 2 }
   ]
}


export const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_MESSAGE: {
         const uniqueId = () => Math.floor(Math.random() * Date.now());
         return {
            ...state,
            dialogsData: [...state.dialogsData, { message: action.message.message, id: uniqueId }]
         }
      }
      default: return state
   }

}



export const addMessage = message => ({ type: ADD_MESSAGE, message })