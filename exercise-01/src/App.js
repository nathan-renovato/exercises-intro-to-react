import './App.css';
import ImageDeveloper from './assets/gabriela.jpg';
import PreviousButton from './assets/icon-prev.svg';
import NextButton from './assets/icon-next.svg';

export default function App() {
  return (
    <div className='container'>
      <div className='developer-information'>
        <p>“Estive interessada em código por um tempo mas não tomava uma atitude, até agora. Não consigo recomendar esse curso o suficiente. Estou no trabalho dos meu sonhos e vejo um futuro brilhante!”</p>
        <div className='developer-name'>
          <h2>Gabriela da Silva</h2>
          <span>Desenvolvedora Fullstack</span>
        </div>
      </div>
      <div className='image-developer'>
        <img src={ImageDeveloper} alt='imagem do desenvolvedor' />
        <div className='developer-carousel-buttons'>
          <button type='button' className='previous-button carousel-buttons'>
            <img src={PreviousButton} alt='botão anterior' />
          </button>
          <button type='button' className='next-button carousel-buttons'>
            <img src={NextButton} alt='botão seguinte' />
          </button>
        </div>
      </div>
    </div>
  );
}
