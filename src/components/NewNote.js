import React, { useRef } from "react";
import PropTypes from "prop-types";

function NewNote(props) {
  const noteRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    props.createNote({ id: 0, content: noteRef.current.value });
    noteRef.current.value = "";
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
      style={{ width: "350px", height: "150px" }}
    >
      <div className="row align-items-end">
        <div className="col-auto">
          <div className="form-group mb-2">
            <label htmlFor="textArea" className="sr-only">
              New Note
            </label>
            <textarea
              className="form-control"
              id="textArea"
              rows="3"
              ref={noteRef}
              required
            ></textarea>
          </div>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-2">
            <span class="material-icons">send</span>
          </button>
        </div>
      </div>
    </form>
  );
}

NewNote.propTypes = {
  createNote: PropTypes.func.isRequired,
};

export default NewNote;
