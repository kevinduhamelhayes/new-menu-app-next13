import React from "react";

const Section = () => {
    return (
        <section className="w-full flex flex-col items-center bg-gray-100 text-black py-20 md:py-32">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Contáctanos</h2>
            
            <div className="flex flex-col md:flex-row gap-8 max-w-4xl">
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-5">Nuestra Oficina</h3>
                    <p className="text-lg md:text-xl">Calle Fusion 456</p>
                    <p className="text-lg md:text-xl">Tech City</p>
                    <p className="text-lg md:text-xl">Cyberland, CP 5000</p>
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-5">Información de Contacto</h3>
                    <p className="text-lg md:text-xl"><span className="font-semibold">Teléfono:</span> +1 234 567 890</p>
                    <p className="text-lg md:text-xl"><span className="font-semibold">Email:</span> support@orderfusion.com</p>
                    <p className="text-lg md:text-xl"><span className="font-semibold">Horarios:</span> Lunes a Viernes de 8:00 a 20:00</p>
                </div>
            </div>
        </section>
    );
}

export default Section;


