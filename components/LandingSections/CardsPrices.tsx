import { RiScales3Line } from 'react-icons/ri';
import CardPrices from './CardPrices';
import { Image, Button } from '@nextui-org/react';


export default function CardsPrices() {
  return (
    <div className="relative h-[2300px] md:h-[900px] w-full overflow-hidden z-10">

      <video
        autoPlay
        muted
        loop
        className="absolute md:-top-[500px] z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/videos/videohero6.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      {/* Fondo negro con opacidad */}
      <div className="absolute z-20 w-full h-full bg-black opacity-30"></div>

      {/* Contenido principal */}
      <div className="absolute z-30 w-full h-full flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl pl-8 font-extrabold mb-8 text-center">Gestión Profesional de Tus Propiedades</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CardPrices planType="basic" />
<CardPrices planType="intermediate" />
<CardPrices planType="full" />
        </div>
      </div>
    </div>
  );
}

