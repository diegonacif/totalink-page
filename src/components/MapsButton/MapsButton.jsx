import googleMapsIcon from '../../assets/google-maps-icon.svg';

export const MapsButton = () => {
  const mapUrlMobile = 'https://maps.app.goo.gl/KdhLqhHojb4arw7A6';


  return (
    <div className="maps-button-container">
      <a href={mapUrlMobile}>
        <img src={googleMapsIcon} alt="Total Ink on Google Maps" />
      </a>
    </div>
  );
};