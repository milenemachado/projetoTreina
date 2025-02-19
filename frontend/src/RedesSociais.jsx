import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function RedesSociais() {
  const [redes, setRedes] = useState({
    email: '',
    linkedin: '',
    github: '',
    facebook: '',
    instagram: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRedes({ ...redes, [name]: value });
  };

  return (
    <div className="container">
      <h2>Redes Sociais</h2>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
          <FontAwesomeIcon icon={faEnvelope} className="ms-2" />
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={redes.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="linkedin" className="form-label">
          LinkedIn
          <FontAwesomeIcon icon={faLinkedin} className="ms-2" />
        </label>
        <input
          type="text"
          className="form-control"
          id="linkedin"
          name="linkedin"
          value={redes.linkedin}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="github" className="form-label">
          GitHub
          <FontAwesomeIcon icon={faGithub} className="ms-2" />
        </label>
        <input
          type="text"
          className="form-control"
          id="github"
          name="github"
          value={redes.github}
          onChange={handleChange} 
        />
      </div>
    </div>
  );
}

export default RedesSociais;
