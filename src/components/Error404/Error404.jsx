
import './error404.css';

const Error404 = () => {
  return (
    <div>
      <div className="error">
       <img className='img_error' src="/src/assets/images/404.png" alt="error" />
       <p className='parraf parraf_1'>
       Parece que te has perdido en tu aventura gatuna.
       </p>
        <p className='parraf parraf_2'>No te preocupes, siempre podrás regresar a casa, o buscar un nuevo arenero...
       </p>
      </div>
    </div>
  );
};

export { Error404 };
