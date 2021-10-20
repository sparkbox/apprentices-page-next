import Apprentice from "@/components/Apprentice/Apprentice";
import SocialLinks from "@/components/SocialLinks/SocialLinks";

const Components = () => {
  const links = [
    { href: "https://www.linkedin.com/", text: "Linkedin" },
    { href: "https://www.github.com/", text: "Github" },
  ];

  return ( 
    <main>
      <h1>Components</h1>
      <h2>Social Links</h2>
      <SocialLinks links={links} />
      <h2>Apprentice</h2>
      <Apprentice name="First Last" image="/apprentices/image.png" links={ links } />
    </main>
  );
}

export default Components;