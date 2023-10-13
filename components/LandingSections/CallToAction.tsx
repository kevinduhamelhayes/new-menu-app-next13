import Image from "next/image";
import { Button } from "@nextui-org/react";

export default function CallToAction() {
  return (
    <div className="relative py-12 md:py-24 bg-[#000] text-[#fff] font-bold w-full h-[400px]">
      <Image
        src="/images/pizza.jpg"
        alt="Fondo de redes sociales"
        width={1600}
        height={600}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 p-8">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl text-center md:text-5xl mb-6">
            ¿Listo para olvidarte de los problemas?
          </h2>
          <p className="text-xl text-center md:text-2xl mb-8">
            Deja la gestión en nuestras manos y enfócate en recibir ganancias.
          </p>
          <Button
            as="a"
            color="warning"
            className="text-xl font-semibold px-12 max-w-md py-6 text-[#fff]"
            href="https://wa.me/5493513084848"
            variant="shadow"
            target="_blank"
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
