"use client"
import Image from "next/image"
import { Button } from "@nextui-org/react"

const Navbar = () => {
  return (
    <nav className=" w-full h-[80px] bg-[#000] flex justify-between items-center px-10 z-0  ">
    <div className="flex items-center">
      <Image
        src="/images/icons/brand/logo.png"
        alt="Logo Order Fusion"
        width={46}
        height={43}
      />
      <span className="ml-2 text-[#fff] font-bold text-[25px] ">
        OrderFusion
      </span>
    </div>
   
      <Button
      as="a"
      color="warning"
      className="text-xl font-semibold px-12 py-6 text-[#fff]"
      target="_blank"
      rel="noopener noreferrer"
      href="https://wa.me/5493513084848"
      variant="shadow"
  >
      Pedir Demo
  </Button>
  </nav>
  )
}

export default Navbar
