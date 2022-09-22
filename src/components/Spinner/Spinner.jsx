import './spinner.css';

const Spinner = () => {
  return (
    <div className="spinner">
      <lottie-player
        src="https://assets1.lottiefiles.com/packages/lf20_z9ed2jna.json"
        background="transparent"
        speed="1"
        loop
        autoplay
        class="animation"
      />
      <h1 className="spinner-title">Cargando...</h1>
    </div>
  );
};

export default Spinner;
