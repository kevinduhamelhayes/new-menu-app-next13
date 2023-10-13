import React, { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@nextui-org/react"

const Hero = () => {
  const [description, setDescription] = useState("")
  const [animationStarted, setAnimationStarted] = useState(false)
  const fullDescription =
    "Somos Order Fusion, una plataforma de pedidos online para restaurantes, bares y cafeterías."

  useEffect(() => {
    if (!animationStarted) {
      setAnimationStarted(true)
      const chars = [...fullDescription]
      let tempDescription = "" // Temp variable to build the string
      chars.forEach((char, index) => {
        setTimeout(() => {
          tempDescription += char
          setDescription(tempDescription) // Set the state only once for each character
        }, index * 100)
      })
    }
  }, [])
  return (
    <section className="flex p-10 flex-row items-center justify-center w-full h-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-[#000] ">
      <div className="flex flex-col-reverse lg:flex-row max-w-[1300px] w-[1300px]">
        <div className="flex flex-col mt-10 mb-10 md:w-[90%] md:h-[60%] ">
          <div className="min-h-24 max-h-52 h-52 md:h-32 xl:h-24">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#10B981] animate-gradient-x">
              {description}
            </h1>
          </div>
          <h2 className="text-2xl mb-6">
            Muestra tus productos en internet de una forma muy sencilla,
            gestiona tus pedidos y crea ofertas para tus clientes.
          </h2>
          <p className="text-lg hidden md:flex mb-6">
            En la era digital, tener presencia online es esencial. Con Order
            Fusion, no solo estás dando el salto al mundo digital, sino que
            estás brindando a tus clientes una experiencia de pedido optimizada
            y eficiente. Nuestro sistema es fácil de usar, tanto para ti como
            para tus clientes, garantizando que el proceso de pedido sea fluido
            y sin complicaciones.
          </p>

          <p className="text-lg mb-6">
            Únete a la revolución digital con Order Fusion y descubre una nueva
            forma de hacer crecer tu negocio, aumentar tus ventas y satisfacer a
            tus clientes.
          </p>

          <Button
            as="a"
            color="warning"
            className="text-xl font-semibold px-12 max-w-md py-6 text-[#fff]"
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
  )
}

export default Hero
