let initState = {
  places: [
    { id: 0, title: "Ha Noi", des: "Co nhieu danh lam thang canh" },
    { id: 1, title: "TP HCM", des: "Mot trong nhung thanh pho phat trien so 1" },
    { id: 2, title: "Da Lac", des: "Khi hau mat me quanh nam" },
  ],
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DELETE_PLACE':
      console.log('check delete from reducer', action.payload)
      let places = state.places;
      places = places.filter(item => {
        return item.id !== action.payload.id;
      })
      state = { ...state, places: places }
      return state
    case 'CREATE_PLACE':
      let id = Math.floor(Math.random() * 100);
      let place = { id: id, title: `place ${id}`, des: ' ' }
      return { ...state, places: [...state.places, place] }
    default:
      return state
  }
}

export default rootReducer