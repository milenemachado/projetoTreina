import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faLinkedin,
  faGithub,

} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Redes(){
    return(
      <>
      <h3 className="titulo-secao redes">Redes Sociais</h3> <br/>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">
      <div className="col-md-4 espaco-entre">
      <input type="email" className="form-control" id="email" placeholder="Email" />
      <FontAwesomeIcon icon={faEnvelope} className="ms-2" />
      <label htmlFor="email"> Email</label>
          
            </div>
            <div className="col-md-4 espaco-entre">
            <input type="text" className="form-control" id="LinkedIn" placeholder="LinkedIn" />
            <FontAwesomeIcon icon={faLinkedin} className="ms-2" />
            <label htmlFor="LinkedIn"> LinkedIn</label>
            </div>
              <div className="col-md-4 espaco-entre">
              <input type="text" className="form-control" id="Github" placeholder="Github" />
              <FontAwesomeIcon icon={faGithub} className="ms-2" />
              <label htmlFor="Github"> Github</label>
            </div>
            </div>
            <hr/>
      </>
    )
  }

  export default Redes;
