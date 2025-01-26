import logo from '../public/logo.png';
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-300/70 backdrop-blur-sm py-5 px-40">
      <div className="flex items-center justify-between">
        <img src={logo} alt="Via Paris" className="w-30 h-6" />
        <nav>
          <ul
            className="flex gap-10 items-center font-serif"
            style={{ fontWeight: 500 }}
          >
            <li>
              <a
                href="#"
                className="relative cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              >
                Nossos Serviços
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              >
                Nossos Produtos
              </a>
            </li>
            <li>
              <Button className="bg-green-700 px-4 rounded shadow-sm text-white hover:bg-gray-500">
                Agende seu Horário!
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
