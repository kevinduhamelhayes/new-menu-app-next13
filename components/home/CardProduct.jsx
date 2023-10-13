import Image from "next/image";
import { Card, CardBody, Button } from "@nextui-org/react";
import { Add } from "../svgs";
import Link from "next/link";

export default function CardProduct({ addProduct, product }) {
  const { _id, name, price, imageUrl } = product;
  return (
    <Card className="w-[94%] mx-auto h-[120px] rounded-[10px]  bg-[#000] mt-10 overflow-y-hidden ">
      <CardBody className="w-full h-full flex flex-row justify-between p-0  ">
        <div className="text-[#fff] flex flex-col justify-between h-full py-2 pl-5 ">
          <div className="">
            <h4 className="text-md md:text-xl font-bold ">{name}</h4>
            <span className="mt-2 font-semibold text-sm md:text-md">
              ${price}
            </span>
          </div>
          <Button
            onClick={() => addProduct(product)}
            isIconOnly
            aria-label="Like"
            className="h-[40px] w-[40px] bg-primary-yellow "
          >
            <Add color="#000" />
          </Button>
        </div>
        <Link href={`/products/${_id}`} className="h-full">
          <Image
            src={imageUrl}
            alt={name}
            width={150}
            height={120}
            className="rounded-r-[10px] h-[120px]"
          />
        </Link>
      </CardBody>
    </Card>
  );
}
