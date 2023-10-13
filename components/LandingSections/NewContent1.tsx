import React from 'react';
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";

const NewContent1 = () => {
    return (
        <Card id='Nosotros' className='flex flex-col lg:flex-row w-full lg:w-[1300px] min-h-[485px] lg:h-[400px] p-0 bg-white mt-20 rounded-xl shadow-2xl shadow-slate-600 mx-auto overflow-hidden'>
            <CardFooter className='w-full h-[50%] lg:w-[50%] md:h-full rounded-r-none flex justify-center p-0 m-0'>
            <Image
                src="/images/marielle-ursua-wRrhYoqYIvM-unsplash.jpg"
                alt="OrderFusionApp"
            className=' bg-cover object-contain rounded-lg rounded-l-none  p-0 m-0 md:h-[900px] z-0' />
            </CardFooter>
            <CardBody className='p-6 w-full lg:w-[50%]'>
            <ul>
    <li className='mb-6'>
        <h4 className='text-xl font-semibold'>Adelantándonos al Futuro:</h4>
        <p className='text-lg'>La era digital avanza a pasos agigantados. Con nuestro servicio de QR en la mesa, tu negocio no se quedará atrás. Ofrece una experiencia moderna e innovadora a tus clientes.</p>
    </li>
    <li className='mb-6'>
        <h4 className='text-xl font-semibold'>Menos Espera, Más Satisfacción:</h4>
        <p className='text-lg'>Permite que tus clientes pidan directamente desde su mesa, reduciendo tiempos de espera y mejorando su experiencia en tu establecimiento.</p>
    </li>
    <li className='mb-6'>
        <h4 className='text-xl font-semibold'>Confiabilidad Digital:</h4>
        <p className='text-lg'>Nuestra plataforma es confiable y eficiente, con una tasa de cancelación del 0%. La transición al mundo digital nunca ha sido tan fácil y segura.</p>
    </li>
</ul>

            </CardBody>
        </Card>
    )
}

export default NewContent1;

