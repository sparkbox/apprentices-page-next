import React from 'react';
import Link from '../components/link/link';
import Apprentice from '../components/apprentice/apprentice';
import SocialLinks from '../components/social-links/social-links';
import ApprenticeQualities from '@/components/apprentice-qualities/apprentice-qualities';

const Components = () => {
  const links = [
    { href: 'personal', text: 'Personal' },
    { href: 'https://www.linkedin.com/', text: 'Linkedin' },
    { href: 'https://www.github.com/', text: 'Github' },
  ];

  return (
    <main>
      <h1>Components</h1>
      <h2>Link</h2>
      <Link href="github.com">Github</Link>
      <h2>Social Links</h2>
      <SocialLinks links={links} />
      <h2>Apprentice</h2>
      <div style={{ width: '320px' }}>
        <Apprentice name="Rise Erpelding" image="/apprentices/image.png" links={links} />
      </div>
      <h2>Apprentice Qualities</h2>
      <ApprenticeQualities />
    </main>
  );
};

export default Components;
