let initState = {
  places: [
    { id: 0, title: "Ha Noi", des: "Co nhieu danh lam thang canh" },
    { id: 1, title: "TP HCM", des: "Mot trong nhung thanh pho phat trien so 1" },
    { id: 2, title: "Da Lac", des: "Khi hau mat me quanh nam" },
  ],
  users: []
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DELETE_PLACE':
      console.log('check delete', action.payload)
      let places = state.places
      places = places.filter(item => {
        return item.id !== action.payload.id;
      })
      state = { ...state, places }
      return state
    default:
      return state
  }
}

export default rootReducer