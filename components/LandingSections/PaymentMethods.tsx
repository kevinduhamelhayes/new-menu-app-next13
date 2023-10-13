"use client"
import {Image} from "@nextui-org/react";

export default function PaymentMethods() {
  return (
    <div className="py-12 mt-10 mb-10 bg-white text-black w-full mx-10">
      <div className='pb-8'>
        <h2 className="text-4xl font-bold text-center">Gestionamos tus metodos de pago</h2>
      </div>
      <div className="flex flex-col items-center md:flex-row justify-evenly">
        <div className="flex flex-col items-center mb-0 md:mb-0">
          <Image 
            src="/svgs/visa-5.svg"
            alt="Visa"
            width={140}
            height={120}
            className=" hover:scale-110 transition-transform duration-300  " />
          <p className="text-lg font-semibold hidden">Visa</p>
        </div>
        <div className="flex flex-col items-center">
        <Image src="/svgs/mastercard.svg" alt="Mastercard" width={140} height={120} className="hover:scale-110 transition-transform duration-300 pb-4" />
  <p className="text-lg font-semibold hidden">Mastercard</p>
</div>
      </div>
    </div>
  );
}
