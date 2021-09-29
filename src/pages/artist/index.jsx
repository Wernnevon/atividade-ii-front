import {useEffect} from "related";
import {findArtist} from "../../services/api";

function Artist() {
  useEffect(()=>{
    let res = async() => await findArtist("Xand Avião");
    console.log(res);
  },[])

  return (
      <div>
          <h3>Artist name</h3>
          <p>contents</p>
      </div>
  );
}

export default Artist;