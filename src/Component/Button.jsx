/** @format */

function Button(props) {
  return (
    <>
      <button
        className="waves-effect waves-light btn search-btn"
        onClick={() =>
          props.handleChangeSearch(props.state.search, props.state.type)
        }
      >
        Search
      </button>
    </>
  );
}
export { Button };
