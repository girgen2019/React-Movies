/** @format */

function Movie(props) {
  let { Title, Year, imdbID, Type, Poster } = props;
  return <>

<div id={imdbID} className="card">
    <div className="card-image waves-effect waves-block waves-light">
    {
      Poster === "N/A" 
      ? 
      <img className="activator" src={`https://placehold.co/600x850?text=Without+poster`} />
      :
        <img className="activator" src={Poster}/>
    }  
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">
      {Title}</span>
      <p> {Year} <span className="right">{Type}</span></p>
    </div>

  </div>
  </>;
}

export { Movie };
