import SocialLinks from "@/components/SocialLinks/SocialLinks";

const Components = () => {
  const links = [
    { href: 'https://www.google.com/', text: 'google' }, 
    { href: 'https://www.facebook.com', label: 'facebook' }
  ];

  return ( 
    <main>
      <h1>Components</h1>
      <h2>Social Links</h2>
      <SocialLinks links={links} />
    </main>
  );
}

export default Components;