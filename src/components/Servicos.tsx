import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import hair from "../public/hair.jpeg";
import man2 from "../public/man2.jpg";
import nails5 from "../public/nails5.jpg";

export default function Servicos() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <h2 className="text-4xl font-semibold  text-gray-900 mb-12">
          Nossos Serviços
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
            <CardContent className="p-0">
              <img src={hair} alt="Corte Feminino" className="w-full h-72 object-cover" />
            </CardContent>
            <CardHeader className="p-4 bg-gray-800 text-white">
              <CardTitle>Corte Feminino</CardTitle>
            </CardHeader>
          </Card>

          
          <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
            <CardContent className="p-0">
              <img src={man2} alt="Espaço Masculino" className="w-full h-72 object-cover" />
            </CardContent>
            <CardHeader className="p-4 bg-gray-800 text-white">
              <CardTitle>Espaço Masculino</CardTitle>
            </CardHeader>
          </Card>

         
          <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
            <CardContent className="p-0">
              <img src={nails5} alt="Manicure" className="w-full h-72 object-cover" />
            </CardContent>
            <CardHeader className="p-4 bg-gray-800 text-white">
              <CardTitle>Manicure</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
