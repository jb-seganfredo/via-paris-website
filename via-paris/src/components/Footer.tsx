import { Separator } from "@/components/ui/separator";
import { Dot, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "../public/logo.png";


export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center bg-slate-50 dark:bg-black">
      <div className="flex flex-col py-5 lg:flex-row lg:gap-32">
        <div className="flex flex-col items-center gap-2">
          
            <img src={logo} alt="logo" className="w-36 h-6" />
        
          
          <p className="px-4 text-sm">Salão de beleza</p>
          <span className="flex p-2 gap-4">
            <Instagram />
            <Phone />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>

          </span>
        </div>

        <div className="my-1 flex flex-col items-center justify-center gap-4 text-sm lg:py-0">
          <div className="flex gap-2">
            <a href="#">Home</a>
            <Dot />
            <a href="#">Sobre</a>
            <Dot />
            <a href="#">Serviços</a>
            <Dot />
            <a href="#">Produtos</a>
            <Dot />
            <a href="#">Entre em contato</a>
          </div>
          <div>
            <p className="flex items-center justify-center gap-2 p-2">
              <MapPin /> Av. Tancredo Neves, 3133 - Piso: L1, Loja 1112 <br></br> Caminho das Árvores, Salvador
            </p>
            <p className="flex gap-2 p-2">
              <Mail /> email@email.com
            </p>
          </div>
        </div>
      </div>
      <Separator
        orientation="horizontal"
        className="w-11/12 bg-slate-500 opacity-45"
      />
      <p className="p-2 text-xs text-gray-500">
        © 2025 VIA PARIS. Todos os direitos reservados.
      </p>
    </footer>
  );
}
