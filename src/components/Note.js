import React from "react";
import PropTypes from "prop-types";

function Note(props) {
  return (
    <div className="card me-3 mb-3" style={{ width: "250px", height: "150px" }}>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn-close"
          aria-label="Удалить"
          onClick={() => props.remove(props.note.id)}
        ></button>
      </div>
      <div className="card-body ">
        <p className="card-text">{props.note.content}</p>
      </div>
    </div>
  );
}

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }),
  remove: PropTypes.func.isRequired,
};

export default Note;
