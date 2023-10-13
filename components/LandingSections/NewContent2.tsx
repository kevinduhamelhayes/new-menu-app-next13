"use client"
import React from 'react';
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";

const NewContent2 = () => {
    return (
        <Card className='flex flex-col lg:flex-row w-full lg:w-[1300px] min-h-[500px] max-h-[1050px] overflow-hidden lg:h-[400px] bg-white mt-20 rounded-xl shadow-2xl shadow-slate-600 mx-auto '>
            <CardBody className='p-6 w-full lg:w-[50%]'>
            <ul>
    <li className='mb-6'>
        <h4 className='text-xl font-semibold'>Menús Digitales Personalizables</h4>
        <p className='text-lg'>Dale a tu negocio una identidad única. Con nuestros menús digitales, no solo ofreces una experiencia moderna, sino también una personalización que refleja la esencia de tu marca.</p>
    </li>
    <li className='mb-6'>
        <h4 className='text-xl font-semibold'>Invita a tus Clientes a Compartir</h4>
        <p className='text-lg'>Las experiencias memorables merecen ser compartidas. Nuestro sistema facilita que tus clientes dejen reseñas en Google, incrementando la visibilidad y confianza en tu negocio.</p>
    </li>
    <li className='mb-6'>
        <h4 className='text-xl font-semibold'>Un Paso Adelante en la Era Digital</h4>
        <p className='text-lg'>Los menús digitales no solo son una tendencia, son el futuro. Aprovecha las ventajas tecnológicas y mantente a la vanguardia en la industria gastronómica.</p>
    </li>
</ul>

            </CardBody>
            <CardFooter className='w-full p-0 max-h-[500px] rounded-l-none object-contain lg:w-[50%] relative'>
                <Image src="/images/amanda-vick-LrTFJXXoCWc-unsplash.jpg" alt='depto1' className=' object-cover rounded-l-none ' />
            </CardFooter>
        </Card>
    )
}

export default NewContent2;


