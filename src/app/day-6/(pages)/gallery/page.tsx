import Image from "next/image";
import imagePng from "../../public/image.png";
import styles from "./page.module.scss";

const GalleryPage = () => {
  return (
    <main className={styles.container}>
      <h1>Gallery Page</h1>
      <Image width={200} height={300} src={imagePng} alt="cat Image" />
    </main>
  );
};

export default GalleryPage;
