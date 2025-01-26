import sobre from '../public/sobre.png';

export default function Sobre() {
  return (
    <div className="w-full flex gap-16 p-10 justify-center items-center">
      <div>
        <img src={sobre} alt="Sobre" style={{ maxHeight: 900}} />
      </div>

      <div className='max-w-md flex flex-col gap-5 justify-stretch'>
        <h2 className='text-xl' style={{ fontWeight: 600 }}>Nossa História</h2>

        <p>
          A Via Paris é uma empresa familiar que atua no mercado de moda desde
          1999. Com o objetivo de oferecer produtos de qualidade e preços
          acessíveis, a Via Paris se tornou referência no mercado de moda
          feminina.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolor magni praesentium eveniet odit, fugiat cupiditate. Illum error sed unde commodi, consectetur quaerat aliquid doloremque ullam. Eaque eligendi at ducimus.</p>

        <p className='mt-10 text-md'>"Dedicados à beleza, transformando sorrisos e elevando a <span>autoestima</span>"</p>
      </div>
    </div>
  );
}
