import React from 'react';
import Image from 'next/image';
import { Accordion, AccordionItem, Card } from "@nextui-org/react";

const NewContent = () => {
    return (
        <Card className='flex flex-col w-[1300px] max-w-full min-h-[75%] max-h-100vh overflow-y-auto bg-white mt-20'>
            <div className='flex flex-row w-full'>
                <div className='w-full md:w-[50%] p-6'>
                <ul>
    <li className='mb-6'>
        <h3 className='text-2xl font-semibold'>Tranquilidad y Seguridad</h3>
        <p className='text-lg'>Gestionamos tu inmueble de inicio a fin, asegurando la calidad y la integridad de tu propiedad. Tú descansas, mientras nosotros trabajamos.</p>
    </li>
    <li className='mb-6'>
        <h3 className='text-2xl font-semibold'>Inversión Inteligente</h3>
        <p className='text-lg'>Transformamos inmuebles en desuso en activos rentables. Optimizamos los precios y la ocupación para maximizar tus retornos.</p>
    </li>
    <li className='mb-6'>
        <h3 className='text-2xl font-semibold'>Soporte Continuo</h3>
        <p className='text-lg'>Nuestro equipo está disponible las 24 horas, los 7 días de la semana. Ante cualquier eventualidad, estamos a un llamado de distancia.</p>
    </li>
    <li className='mb-6'>
        <h3 className='text-2xl font-semibold'>Excelencia Comprobada</h3>
        <p className='text-lg'>Nuestras estadísticas de Superhost y reseñas de usuarios respaldan la calidad y dedicación de nuestro servicio.</p>
    </li>
</ul>

                    <button className='px-6 py-2 mt-4 bg-red-400 text-white font-semibold rounded-xl hover:bg-red-600 mb-4'>Conoce Más</button>
                    <Accordion className='w-full bg-no-repeat' style={{backgroundImage: "url(/svgs/airbnb-1.svg)",
                   backgroundSize: 'contain',  // o 'contain' para asegurarte de que se vea todo el SVG
                   backgroundRepeat: 'no-repeat',  // para que el SVG no se repita
                   backgroundPosition: 'center',  // para que el SVG se centre
                   }}>
                
                    <AccordionItem key="1" aria-label="Conveniencia" title={<span className='text-xl font-bold'>Conveniencia</span>}>
                        <div className='text-lg'>Ofrecemos un servicio integral que incluye desde la limpieza hasta la gestión de precios, para que no tengas que lidiar con los aspectos operativos del alquiler temporario.</div>
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Profesionalismo" title={<span className='text-xl font-bold'>Profesionalismo</span>}>
                        <div className='text-lg'>Contamos con un equipo de profesionales experimentados en la gestión de propiedades, garantizando un servicio de alta calidad.</div>
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="Transparencia" title={<span className='text-xl font-bold'>Transparencia</span>}>
                        <div className='text-lg'>Mantenemos una comunicación clara y transparente. Recibirás informes regulares sobre el rendimiento de tu propiedad.</div>
                    </AccordionItem>
                    <AccordionItem key="4" aria-label="Flexibilidad" title={<span className='text-xl font-bold'>Flexibilidad</span>}>
                        <div className='text-lg'>Nos adaptamos a tus necesidades y preferencias, ofreciendo un servicio personalizado.</div>
                    </AccordionItem>
                    <AccordionItem key="5" aria-label="Rentabilidad" title={<span className='text-xl font-bold'>Rentabilidad</span>}>
                        <div className='text-lg'>Maximizamos la ocupación y los ingresos de tu propiedad a través de estrategias de pricing dinámico.</div>
                    </AccordionItem>
                </Accordion>
                </div>

                <figure className='w-[50%] mb-10 hidden md:flex flex-row justify-end items-end'>
                    <Image src="/deptos/pexels-jean-van-der-meulen-1454805.jpg" alt='depto1' width={700} height={600} className=' rounded-lg flex flex-row items-end justify-end' />
                </figure>
            </div>
        </Card>
    )
}

export default NewContent;
