import Works from "../components/Works";
import Contact from "../components/Contact";

export default function Home({ theme }) {
  return (
    <main className={theme}>
      <section id="profile">
        <h1>
          Bonjour, je m'appelle Annie Hérieau.
          <br />
          Bienvenue sur mon portfolio !
        </h1>
        <p>
          Depuis quelques mois, j'apprends le développement web grâce à The
          Hacking Projet. <br />
          J'ai ainsi pu apprendre à utiliser Ruby, Rails, JavaScript et React.
        </p>
      </section>
      <Works />
      <Contact />
    </main>
  );
}
