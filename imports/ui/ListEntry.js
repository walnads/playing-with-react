import React, { Component } from 'react';
import { Entries } from '../api/entries';

const buttonStyle = {
    margin: "10px 15px",
    maxWidth: "120px"
  }

class ListEntry extends Component {

    handleDelete = (entryId) => {
        Entries.remove({_id: entryId});
      }
    
      render() {
        return (
          <div>
            <div className="text-center">
            <h4>View journal entries</h4>
            </div>
            <div>
              {this.props.entries.length ? this.props.entries.map((event) => (
                <div className="list-group" key={event._id} style={{ margin: "20px 100px" }}>
                  <div className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">{event.title}</h5>
                      <small>{event.date}</small>
                    </div>
                    <p className="mb-1">{event.content}</p>
                    <small>Written by: {event.author}</small>
                  
                  <div className="controls row">
                  <button className="btn btn-outline-danger col" style={buttonStyle} onClick={() => this.handleDelete(event._id)} >
                    Delete
                  </button>
                  </div>
                </div>
                </div>
              )) : <div className="no-events">No journal entries created.</div>}
            </div>
          </div>
          );
    }
}

export default ListEntry;