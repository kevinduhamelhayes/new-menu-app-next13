// "use client" indica a Next.js que este componente usa características que solo están disponibles en el navegador (cliente).
"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";

const Hero: React.FC = () => {
  const [description, setDescription] = useState<string>("");
  const [animationStarted, setAnimationStarted] = useState<boolean>(false);

  // Aquí, TypeScript inferirá que el tipo de `fullDescription` es `string`, pero lo estamos especificando explícitamente.
  const fullDescription: string = 
    "Somos Order Fusion, una plataforma de pedidos online para restaurantes, bares y cafeterías.";

  useEffect(() => {
    if (!animationStarted) {
      setAnimationStarted(true);
      const chars: string[] = [...fullDescription];
      let tempDescription = ""; // Variable temporal para construir la cadena
      chars.forEach((char, index) => {
        setTimeout(() => {
          tempDescription += char;
          setDescription(tempDescription); // Se establece el estado solo una vez por cada carácter
        }, index * 100);
      });
    }
  }, []);

  return (
    <section className="flex p-10 flex-row items-center justify-center w-full h-full bg-white text-[#000] ">
      <div className="flex flex-col-reverse lg:flex-row max-w-[1300px] w-[1300px]">
        <div className="flex flex-col mt-10 mb-10 md:w-[90%] md:h-[60%] ">
          <div className="min-h-24 max-h-52 h-52 md:h-32 xl:h-24">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#10B981] animate-gradient-x">
              {description}
            </h1>
          </div>
          <h2 className="text-2xl mb-6">
            Muestra tus productos en internet de una forma muy sencilla, gestiona tus pedidos y crea ofertas para tus clientes.
          </h2>
          <p className="text-lg hidden md:flex mb-6">
            En la era digital, tener presencia online es esencial. Con Order Fusion, no solo estás dando el salto al mundo digital, sino que estás brindando a tus clientes una experiencia de pedido optimizada y eficiente. Nuestro sistema es fácil de usar, tanto para ti como para tus clientes, garantizando que el proceso de pedido sea fluido y sin complicaciones.
          </p>
          <p className="text-lg mb-6">
            Únete a la revolución digital con Order Fusion y descubre una nueva forma de hacer crecer tu negocio, aumentar tus ventas y satisfacer a tus clientes.
          </p>
          <Button
            as="a"
            color="warning"
            className="text-xl font-semibold bg-yellow-400 rounded-xl text-center shadow-2xl shadow-yellow-200 px-12 max-w-md py-6 text-[#fff]"
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/5493513084848"
            variant="shadow"
          >
            WhatsApp
          </Button>
        </div>
        <div className="md:w-[30%] md:h-[60%] ">
          <Image
            src="/images/mobileDemo.jpg"
            alt="OrderFusionApp"
            width={320}
            height={490}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
