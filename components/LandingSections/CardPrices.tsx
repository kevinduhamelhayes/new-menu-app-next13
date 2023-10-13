import React from 'react';
import {
  Card, CardHeader, CardBody, CardFooter, Divider, Link, Button,
} from '@nextui-org/react';

interface PlanDetailsType {
  title: string;
  description: string;
  price: string;
  features: string[];
}

function CardPrices({ planType = 'basic' }) {
  let planDetails: PlanDetailsType;

  switch (planType) {
    case 'intermediate':
      planDetails = {
        title: 'Plan Intermedio',
        description: 'Para propietarios que buscan más',
        price: '30%',
        features: [
          'Administración completa',
          'Servicios de Superhost',
          'Inversión inicial en el inmueble para puesta a punto',
          'Contrato de exclusividad',
          'Rescisión por venta después de 6 meses sin cargos adicionales',
          'Promoción en plataformas premium',
          'Asesoramiento en diseño y decoración',
          'Soporte 24/7',
          'Optimización de precios y ocupación',
          'Reportes mensuales detallados'
        ]
      };
      break;
    case 'full':
      planDetails = {
        title: 'Plan Premium',
        description: 'Negociable para necesidades específicas',
        price: 'Negociable',
        features: [
          'Administración completa',
          'Servicios de Superhost avanzados',
          'Inversiones personalizadas',
          'Estrategias de marketing premium',
          'Soporte VIP Ondemand',
          'Contratos flexibles adaptados',
          'Gestión y respuesta de reseñas',
          'Fotografías profesionales del inmueble',
          'Acceso a herramientas avanzadas',
          'Diseño y decoración premium'
        ]
      };
      break;
    default:
      planDetails = {
        title: 'Plan Básico',
        description: 'Para propietarios que inician',
        price: '20%',
        features: [
          'Administración completa',
          'Servicios de Superhost',
          'Promoción en plataformas principales',
          'Soporte al cliente',
          'Optimización de precios',
          'Reportes mensuales',
          'Fotografías básicas del inmueble',
          'Gestión de reservas y cancelaciones',
          'Comunicación constante con huéspedes',
          'Consejos para mejorar la experiencia del huésped'
        ]
      };
  }

  return (
    <Card className="mt-4 h-auto max-w-[380px] bg-gradient-to-br from-red-500 to-pink-600 text-white shadow-lg">
      <CardHeader className="flex flex-col gap-3">
        <div className="flex flex-col self-start">
          <p className="text-xl font-bold">{planDetails.title}</p>
          <p className="text-sm opacity-80">{planDetails.description}</p>
        </div>
        {planType === 'full' && (
          <div className="absolute right-0 top-0 mr-1 mt-4 rotate-12 bg-yellow-400">
            <p className="p-1 leading-4">Destacado</p>
          </div>
        )}
      </CardHeader>
      <Divider className='text-white' />
      <CardBody>
        <ul className="px-1">
          <li className="text-5xl font-semibold mb-4">{planDetails.price}</li>
          {planDetails.features.map((feature, index) => (
            <li key={index} className="mt-2">{feature}</li>
          ))}
        </ul>
      </CardBody>
      <Divider className='text-white' />
      <CardFooter className="min-h-[80px]">
        <Link>
          <Button color="primary" variant="solid" className="bg-white text-red-600 px-32 text-lg font-medium">
            Contratar
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default CardPrices;

