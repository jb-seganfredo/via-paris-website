import logo from '../public/logo.png';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Menu, MessageCircleMore } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-300/70 backdrop-blur-sm xl:py-5 px-10 xl:px-40">
      <div className="flex items-center justify-between">
        <img src={logo} alt="Via Paris" className="w-30 h-6" />
        <nav>
          <ul
            className="hidden gap-10 items-center font-serif xl:flex"
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
              <Button className="bg-black px-4 rounded shadow-sm text-white hover:bg-gray-500">
                Agende seu Horário!
              </Button>
            </li>
          </ul>

          <Sheet>
          <SheetTrigger asChild>
            <a
              href="#"
              className="w-52 rounded-md p-3 transition-all hover:scale-105 hover:opacity-70 xl:hidden"
            >
              <Menu />
            </a>
          </SheetTrigger>
          <SheetContent className='bg-white'>
            <SheetHeader>
              <SheetTitle className="flex items-center justify-center gap-2 text-2xl">
                
                <img src={logo} alt="Via Paris" className="w-30 h-6" />
              </SheetTitle>
              <SheetDescription className="relative h-full w-full">
                <ul className="flex flex-col items-center text-lg font-semibold">
                  <li className="relative cursor-pointer py-5 font-bold tracking-widest text-black">
                    HOME
                  </li>
                  <Separator className='bg-black'/>
                  <li className="relative cursor-pointer py-7">Sobre</li>
                  <Separator className='bg-black'/>
                  <li className="relative cursor-pointer py-7">Nossos Serviços</li>
                  <Separator className='bg-black'/>
                  <li className="relative cursor-pointer py-7">Nossos produtos</li>
                  <Separator className='bg-black'/>
                  <li className="relative cursor-pointer py-7 hover:text-black">
                    Tire suas dúvidas
                  </li>

                  <li className="bottom-0 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gray-900 py-3 font-normal text-white transition-transform duration-300 hover:scale-105 hover:brightness-200 text-3xl">
                    <span>Entre em contato</span>
                    <MessageCircleMore size="20" />
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4"></div>
            <SheetFooter>
              <SheetClose asChild>Close</SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        </nav>


      </div>
    </header>
  );
}
