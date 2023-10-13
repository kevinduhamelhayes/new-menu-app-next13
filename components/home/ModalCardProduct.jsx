import Image from "next/image";
import { Button } from "@nextui-org/react";
import { Trash } from "../svgs";

export default function ModalCardProduct({ product, removeProductById }) {
  const { _id, name, price, imageUrl } = product;

  return (
    <div className="w-full border-b-2 border-[#555] min-h-[120px] max-h-[124px] overflow-y-hidden flex flex-row justify-between items-start p-0 mt-3 ">
      <div className="flex flex-col justify-between h-full ">
        <div>
          <h3 className="font-bold">{name}</h3>
          <h5 className="mt-1">${price}</h5>
        </div>
        <Button
          onClick={() => removeProductById(_id)}
          isIconOnly
          aria-label="Like"
          className="mb-3 h-[40px] w-[40px] bg-[#F40000] flex items-center justify-center "
        >
          <Trash color="#fff" />
        </Button>
      </div>
      <Image
        src={imageUrl}
        alt={name}
        width={150}
        height={120}
        className="h-[120px]"
      />
    </div>
  );
}
