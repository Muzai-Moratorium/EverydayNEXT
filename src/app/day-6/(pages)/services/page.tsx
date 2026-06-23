import EvilEye from "../../components/evileye/evileye";
import styles from "./page.module.scss";

const ServicesPage = () => {
  return (
    <main className={styles.container}>
      <EvilEye
        eyeColor="#379effff"
        intensity={1.5}
        pupilSize={1}
        irisWidth={0.2}
        glowIntensity={0.35}
        scale={0.8}
        noiseScale={1}
        pupilFollow={1}
        flameSpeed={1}
        backgroundColor="#00000013"
      />
    </main>
  );
};
export default ServicesPage;
