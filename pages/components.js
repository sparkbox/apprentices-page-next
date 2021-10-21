import Apprentice from "@/components/Apprentice/Apprentice";
import SocialLinks from "@/components/SocialLinks/SocialLinks";

const Components = () => {
  const links = [
    { href: "personal", text: "Personal"},
    { href: "https://www.linkedin.com/", text: "Linkedin" },
    { href: "https://www.github.com/", text: "Github" },
  ];

  return ( 
    <main>
      <h1>Components</h1>
      <h2>Social Links</h2>
      <SocialLinks links={links} />
      <h2>Apprentice</h2>
      <div style={{width: '320px'}}>
        <Apprentice name="Rise Erpelding" image="/apprentices/image.png" links={ links } />
      </div>
    </main>
  );
}

export default Components;