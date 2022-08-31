import React from "react";
import PropTypes from "prop-types";
import Note from "./Note";

function Notes(props) {
  return (
    <div className="d-flex flex-wrap pt-4">
      {props.notes.map((note) => (
        <Note key={note.id} note={note} remove={props.remove} />
      ))}
    </div>
  );
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  remove: PropTypes.func.isRequired,
};

export default Notes;
