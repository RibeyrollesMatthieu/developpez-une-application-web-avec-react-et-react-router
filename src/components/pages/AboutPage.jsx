import { Dropdown } from '@/components/Dropdown';
import { Hero } from '@/components/Hero';
import '@/styles/pages/aboutpage.scss';

const faq = [
  {
    id: 1,
    title: 'Fiabilité',
    content:
      'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
  },
  {
    id: 2,
    title: 'Respect',
    content:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    id: 3,
    title: 'Service',
    content:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    id: 4,
    title: 'Sécurité',
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussie bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons égalements des ateliers sur a sécurité domestique pour nos hôtes.",
  },
];

export const AboutPage = () => {
  return (
    <>
      <Hero imageName='aboutpage-hero-image.jpg' />

      <div className='faq'>
        {faq.map((question) => (
          <Dropdown {...question} key={question.id} />
        ))}
      </div>
    </>
  );
};
