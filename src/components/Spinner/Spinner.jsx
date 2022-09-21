import './spinner.css';

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="animation">
        <lottie-player
          src="https://assets1.lottiefiles.com/packages/lf20_z9ed2jna.json"
          background="transparent"
          speed="1"
          style={{ width: '300px' }}
          loop
          autoplay
        ></lottie-player>
      </div>
      <h1 className="spinner-title">Cargando...</h1>
    </div>
  );
};

export default Spinner;
