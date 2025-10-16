import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Importar las imágenes PNG
import mountainImg from '@site/static/img/undraw_docusaurus_mountain.png';
import treeImg from '@site/static/img/undraw_docusaurus_tree.png';
import reactImg from '@site/static/img/undraw_docusaurus_react.png';

const FeatureList = [
  {
    title: 'Equipo de Soporte',
    Image: mountainImg,
    description: (
      <>
        Somos el vínculo directo entre nuestros clientes y la tecnología que los impulsa. Nuestra misión es asegurar que cada cliente se sienta acompañado y escuchado. Actuamos con empatía, criterio técnico y foco en la resolución, ofreciendo respuestas claras, rápidas y útiles. Cada contacto es una oportunidad para fortalecer la confianza en Helpia. Nuestro trabajo sostiene la calidad del servicio y refleja nuestros valores: cercanía, profesionalismo y compromiso con la mejora continua.
      </>
    ),
  },
  {
    title: 'Nuestros Valores',
    Image: treeImg,
    description: (
      <>
        En Helpia creemos en la cercanía, porque la tecnología se entiende mejor cuando se explica con empatía. Valoramos el profesionalismo, que se refleja en respuestas claras, precisas y responsables. Promovemos la colaboración, trabajando en equipo para encontrar la mejor solución. Y apostamos a la mejora continua, aprendiendo de cada experiencia.
Nuestro tono de atención combina calidez humana y claridad técnica: somos amables, resolutivos y siempre buscamos transmitir confianza.
      </>
    ),
  },
  {
    title: 'Contactar a Soporte',
    Image: reactImg,
    description: (
      <>
        Nuestros clientes nos podrán contactar mediante nuestro correo soporte@helpia.com o con ayuda de Aria, nuestra IA, a la que podrán acceder mediante whatsapp al +598 96 103 228, solicitando hablar con el equipo de soporte. Atenderemos a nuestros clientes de lunes a viernes de 9 a 18 hs, y atenderemos urgencias fuera del horario laboral. 
      </>
    ),
  },
];

function Feature({Image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Image} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
