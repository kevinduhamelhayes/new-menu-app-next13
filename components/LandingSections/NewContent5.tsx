import React from 'react';
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";

const NewContent5 = () => {
    return (
        <Card className='flex flex-col lg:flex-row w-full lg:w-[1300px] min-h-[500px] max-h-[1050px] overflow-hidden lg:h-[400px] bg-white mt-20 rounded-xl shadow-2xl shadow-slate-600 mx-auto '>

            <CardBody className='p-6 w-full lg:w-[50%]'>
                <ul>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>Seguridad en tu eleccion</h4>
                        <p className='text-lg'>Con años de experiencia en el mercado, garantizamos una gestión confiable y eficiente de tus propiedades.</p>
                    </li>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>Renta asegurada en dólares</h4>
                        <p className='text-lg'>Aseguramos tu renta en dólares, brindando estabilidad y previsibilidad a tu inversión.</p>
                    </li>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>Tranquilidad y Confiabilidad</h4>
                        <p className='text-lg'>Nuestro equipo de profesionales se encarga de todo, desde la gestión de reservas hasta el mantenimiento, para que puedas descansar tranquilo.</p>
                    </li>
                </ul>
            </CardBody>
            <CardFooter className='w-full flex items-center justify-center max-h-[500px] lg:w-[50%] relative m-2 border-2'>
                <Image src="/deptos/WhatsApp Image 2023-10-01 at 12.07.49 PM.jpeg" alt='depto1' className=' rounded-lg object-contain w-full h-[750px]' />
            </CardFooter>
        </Card>
    )
}

export default NewContent5;

