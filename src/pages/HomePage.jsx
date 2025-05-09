import logo from '../assets/logo.png';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-container">
      <img src={logo} alt="Where it's @ logo" className="home-logo" />
      <h1 className="home-title">Where It's @</h1>
      <p className="home-subtitle">Ticketing made easy</p>
    </div>
  );
}
