import styles from './ProjectsStyles.module.css';
import productStore from '../../assets/productStore.jpg';
import heart from '../../assets/heart1.jpg';
import profile from '../../assets/profile.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={productStore}
          link="https://github.com/ajaykumar-codes/products-store.git"
          h3="Product Store"
        />
        <ProjectCard
          src={heart}
          link="https://github.com/ajaykumar-codes/myocardial-infarction-prediction.git"
          h3="Myocardial Prediction"
        />
        <ProjectCard
          src={profile}
          link="/"
          h3="Porfolio Website"
        />
      </div>
    </section>
  );
}

export default Projects;