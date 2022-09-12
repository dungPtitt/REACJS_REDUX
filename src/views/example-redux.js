import React from "react";
import { connect } from 'react-redux';

class ExampleRedux extends React.Component {
  handleDeletePlace = (place) => {
    console.log('delete from react', place)
    this.props.delelePlace(place)
  }
  handleCreatePlace = () => {
    this.props.createPlace();
  }
  render() {
    let places = this.props.dataRedux;
    return (
      <>
        <div className="place-list">
          {places && places.length > 0 &&
            places.map((item, id) => {
              return <div key={item.id}>{id + 1}. {item.title} <span onClick={() => this.handleDeletePlace(item)}>x</span></div>
            })
          }
          <button onClick={() => this.handleCreatePlace()}>Add new Place</button>
        </div>
      </>

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
    createPlace: () => {
      dispatch({ type: 'CREATE_PLACE' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExampleRedux)