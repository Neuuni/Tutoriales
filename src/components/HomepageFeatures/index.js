import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import FeatureList from './FeatureList';
import SupportSection from './SupportSection';
import Alumnosoporte from './alumnoycontacto';

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <div className={styles.featureDescription}>{description}</div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Alumnosoporte />
      </div>
    </section>
  );
}