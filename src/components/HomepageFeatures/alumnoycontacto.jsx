import React from "react";
import FeatureList from "./FeatureList";
import SupportSection from "./SupportSection";
import styles from "./styles.module.css";

function Alumnosoporte() {
  return (
    <div className="contenedor-intro">
      <div className="contenido">
        <div className="contenido-izquierdo">
          {FeatureList.map((feature, idx) => (
            <div key={idx} className={styles.feature}>
              <div className="text--center">
                <feature.Svg className={styles.featureSvg} role="img" />
              </div>
              <div className="text--center padding-horiz--md">
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <div className={styles.featureDescription}>
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="contenido-derecho">
          <SupportSection />
        </div>
      </div>
    </div>
  );
}

export default Alumnosoporte;