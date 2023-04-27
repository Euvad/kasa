import './banner.scss';
import { useLocation } from 'react-router-dom';

export default function Banner(props) {
  const path = useLocation();

  if (path.pathname === "/") {
    return (
    <div className="banner-container">
      <img className='banner-img' alt='bgimage' src={props.bgimage}></img>
      <div className="banner-text-container">
        <div className="banner-text">Chez vous, <br></br>partout et ailleurs</div>
      </div>
    </div>
    );
  }
  else if (path.pathname === "/about") {
    return (
    <div className="banner-container-2">
      <img className='banner-img-2' alt='bgimage' src={props.bgimage}></img>
    </div>
     );
  }
}