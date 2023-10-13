/** @format */

function Filter(props) {

  return (
    <div className="with-gap radio-filter">
      <p>
        <label>
          <input
            className="with-gap"
            name="radio"
            type="radio"
            data-type="all"
            onChange={props.handleChangeFilter}
            checked={props.paramType === "all"}
          />
          <span>All </span>
        </label>
      </p>
      <p>
        <label>
          <input
            className="with-gap"
            name="radio"
            type="radio"
            data-type="movie"
            onChange={props.handleChangeFilter}
            checked={props.paramType === "movie"}
          />
          <span>Movies only</span>
        </label>
      </p>
      <p>
        <label>
          <input
            className="with-gap"
            name="radio"
            type="radio"
            data-type="series"
            onChange={props.handleChangeFilter}
            checked={props.paramType === "series"}
          />
          <span>Series only</span>
        </label>
      </p>
    </div>
  );
}

export { Filter };
