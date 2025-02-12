import marca1 from '../public/marca1.png';
import products2 from '../public/products2.jpg';
import loreal from '../public/loreal.jpg';
import loreal2 from '../public/loreal2.png';

import kerastase from '../public/kerastase.png';
import marcaa from '../public/marcaa.png';
import marca2 from '../public/marca2.png';
import marcak from '../public/marcak.png';

export default function Produtos() {
  return (
    <>
      <div className='px-4 py-10'>
        <div className='xl:pl-40'>
          <h2 className="text-4xl font-semibold text-gray-900 mb-12">
            Nossos Produtos
          </h2>

          <p className='pb-10'>Trabalhamos com as melhores marcas do mercado para melhor atendê-lo.</p>
        </div>

        <div className='flex flex-col justify-center items-center gap-20 xl:gap-36 xl:flex-row'>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols- gap-4">
            <img
              src={marca1}
              alt="Marca 1"
              className="w-48 h-56" 
            />
            <img
              src={products2}
              alt="Marca 2"
              className="w-48 h-56 transform transition-transform duration-300 hover:scale-110"
            />
            <img
              src={loreal}
              alt="Marca 3"
              className="w-48 h-56 transform transition-transform duration-300 hover:scale-110"
            />
            <img
              src={loreal2}
              alt="Marca 4"
              className="w-48 h-56 transform transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols- gap-4">
            <img
              src={kerastase}
              alt="Marca 1"
              className="w-48 h-56" 
            />
            <img
              src={marcaa}
              alt="Marca 2"
              className="w-48 h-56 transform transition-transform duration-300 hover:scale-110"
            />
            <img
              src={marca2}
              alt="Marca 3"
              className="w-48 h-56 transform transition-transform duration-300 hover:scale-110"
            />
            <img
              src={marcak}
              alt="Marca 4"
              className="w-48 h-56 transform transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </>
  );
}
