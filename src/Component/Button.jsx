/** @format */

function Button(props) {
  return (
    <>
      <button
        className="waves-effect waves-light btn search-btn btn-small"
        onClick={() =>
          props.handleChangeSearch(props.paramSearch, props.paramType)
        }
      >
        Search
      </button>
    </>
  );
}
export { Button };
