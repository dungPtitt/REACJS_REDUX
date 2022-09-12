import React from "react";
import { connect } from 'react-redux';

class ExampleRedux extends React.Component {
  handleDeletePlace = (place) => {
    this.props.delelePlace(place)
  }
  render() {
    let places = this.props.dataRedux;
    return (
      <div className="place-list">
        {places && places.length > 0 &&
          places.map((item, id) => {
            return (
              <>
                <h3 key={item.id}>{id + 1}. {item.title} <span onClick={() => this.handleDeletePlace(item)}>x</span></h3>
              </>
            )
          })
        }
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    dataRedux: state.places,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    delelePlace: (place) => {
      dispatch({ type: 'DELETE_PLACE', payload: place })
    },
    // createPlace: () => {
    //   dispatch({ type: 'CREARE_PLACE' })
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExampleRedux)