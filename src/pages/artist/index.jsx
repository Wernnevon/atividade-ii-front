import {useState} from "react";
import {findArtist, getArtist, getArtistRelated} from "../../services/api";

function Artist() {
  const [artists, setArtists] = useState([]);
  const [related, setRelated] = useState([]);

  function handleArtist(name){
    if(name){
      findArtist().get(`artistas/${name}`).then(data=>{
        setArtists(data.data.artists.items);
      });
    }else{
      setArtists([]);
      setRelated([]);
    }
  }

  function setAnArtist(id){
    getArtist().get(`artista/${id}`).then(data=>{
      setArtists([data.data]);
    });
    getArtistRelated().get(`artistasRelacionados/${id}`).then(data=>{
      setRelated(data.data.artists);
    });
  }

  return (
      <div>
        <h4>Informe o nome do artista</h4>
        <input placeholder="Write artist name here" onChange={(event) => handleArtist(event.target.value)} type="text" />
          <br/>
          <br/>
          {artists && <div>
            {artists.map(artists => 
            <div key={artists.id}>
              <label>{artists.name}: </label>
              <a href={artists.external_urls.spotify}>Visite spotify</a> {" - "}
              <button onClick={()=> setAnArtist(artists.id)} type="button">Choose</button>
            </div>)}
          </div>
          }
          <br/>
          <br/>
          <hr/>
          <br />
          <h3>Artistas relacionados</h3>
          {related.length>0 ? related.map(artists => (
            <div key={artists.id}>
              <label>{artists.name}: </label>
              <a href={artists.external_urls.spotify}>Visite spotify</a>
            </div>)
            ) : <label>Press choose button to show related artists </label>}
      </div>
  );
}

export default Artist;