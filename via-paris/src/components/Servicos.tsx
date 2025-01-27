import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import hair from "../public/hair.jpeg";
import man from "../public/man.jpeg";
import nails4 from "../public/nails4.jpg";
import nails5 from "../public/nails5.jpg";
import nails3 from "../public/nails3.jpg";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Servicos() {
  const manicureImages = [nails4, nails5, nails3];

  c

  return (
    <div className="bg-gray-300">
      <div className="container mx-auto py-20">
        <h2 className="text-3xl font-serif text-center mb-10">
          Nossos Serviços
        </h2>

        <div className="flex justify-center items-center flex-col gap-8 px-10 xl:px-20 xl:flex-row xl:gap-10">
          {/* Card 1 */}
          <Card className="bg-gray-100 max-w-96 min-w-96">
            <CardContent className="p-1">
              <img src={hair} alt="Corte Feminino" className="h-96 w-96" />
            </CardContent>
            <CardHeader className="flex items-center pb-5 pt-4">
              <CardTitle>Corte Feminino</CardTitle>
            </CardHeader>
          </Card>

          {/* Card 2 */}
          <Card className="bg-gray-100 max-w-96 min-w-96">
            <CardContent className="p-1">
              <img src={man} alt="Espaço Masculino" className="h-96 w-96" />
            </CardContent>
            <CardHeader className="flex items-center pb-5 pt-4">
              <CardTitle>Espaço Masculino</CardTitle>
            </CardHeader>
          </Card>

          {/* Carrossel */}
          <Card className="bg-gray-100 max-w-96">
            <Carousel
              className="flex-col items-center justify-center p-0"
              plugins={[
                Autoplay({
                  delay: 2500,
                  stopOnInteraction: false, // Continua mesmo após interação
                }),
              ]}
              
            >
              <CarouselContent className="flex items-center justify-center space-x-4">
                {manicureImages.map((image, index) => (
                  <CarouselItem key={index} className="flex-shrink-0 w-96">
                    <Card>
                      <CardContent className="p-1">
                        <img
                          src={image}
                          alt={`Manicure ${index + 1}`}
                          className="object-cover rounded-lg h-96 w-96"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <CardHeader className="flex items-center pb-5 pt-4">
              <CardTitle>Manicure</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
