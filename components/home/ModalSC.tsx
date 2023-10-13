"use client"

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Card, 
  CardBody
} from "@nextui-org/react";
import ModalCardProduct from "./ModalCardProduct"
import { useSession } from '@/context/sessionContext';
import SetItem from "@/utils/setItem"

export default function ModalSC({ isOpen, onOpenChange, products }) {
  const { sessionData, setSessionData } = useSession();
  const { productsSelected, price, status } = sessionData;
  // console.log('sessionData: ', sessionData);
  const updateSession = (newSessionData) => {
    setSessionData({ ...sessionData, ...newSessionData });
  };

  function removeProductById(productId) {
    const newArr = productsSelected.filter((product) => product._id !== productId);
    updateSession({productsSelected: newArr})
  }

  function sumPrices(products) {
    const total = products.reduce((accumulator, product) => {
      return accumulator + product.price;
    }, 0);
    updateSession({price: total})
  }

  function sendOrder() {
    // calculate final pricing
    sumPrices(productsSelected)
    
    // setStatusOrder to pending
    updateSession({status: 'pending'})
    
    // create element:order in localStorage
    // SetItem('order', sessionData)
    
    // create order in database
    //...
  }

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="max-h-[700px]">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col">Pedidos</ModalHeader>
              <ModalBody >
                <div className="w-full flex flex-col h-[500px] overflow-y-auto">
                {productsSelected.map(product => (
                  <ModalCardProduct key={product.id} product={product} removeProductById={removeProductById} />
                ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Cerrar
                </Button>
                <Button color="primary-yellow" onPress={sendOrder} className="font-bold bg-primary-yellow" >
                  Pedir
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
