import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import hair from "../public/hair.jpeg";
import man from "../public/man.jpeg";
import nails from "../public/nails.png";

export default function Servicos() {
  return (
    <div className="bg-gray-300">
      <div className="container mx-auto py-20">
        <h2 className="text-3xl font-serif text-center mb-10">
          Nossos Serviços
        </h2>

<div className="grid grid-cols-3 gap-10 px-20">
        <Card className="bg-gray-100">
        <CardContent className="pt-2 px-2 pb-5">
            <img src={hair} alt="hair" className="min-h-80" />
          </CardContent>
          <CardHeader className="flex items-center pb-4 pt-0">
            <CardTitle>Corte Feminino</CardTitle>
          </CardHeader>
        </Card>

        <Card className="bg-gray-100">
        <CardContent className="pt-2 px-2 pb-5">
            <img src={man} alt="hair" className="min-h-80" />
          </CardContent>
          <CardHeader className="flex items-center pb-4 pt-0">
            <CardTitle>Espaço Masculino</CardTitle>
          </CardHeader>
        </Card>

        <Card className="bg-gray-100">
        <CardContent className="pt-2 px-2 pb-5">
            <img src={nails} alt="nails" className="min-h-80" />
          </CardContent>
          <CardHeader className="flex items-center pb-4 pt-0">
            <CardTitle>Manicure</CardTitle>
          </CardHeader>
        </Card>
        
    
        </div>
      </div>
    </div>
  );
}
