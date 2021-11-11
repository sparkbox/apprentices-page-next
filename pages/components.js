import React from 'react';
import Link from '../components/link/link';
import Apprentice from '../components/apprentice/apprentice';
import SocialLinks from '../components/social-links/social-links';
import ApprenticeQualities from '../components/apprentice-qualities/apprentice-qualities';
import Hero from '../components/hero/hero';
import PreviousApprenticesGroup from '../components/previous-apprentices-group/previous-apprentices-group';

const Components = () => {
  const links = [
    { href: 'personal', text: 'Personal' },
    { href: 'https://www.linkedin.com/', text: 'Linkedin' },
    { href: 'https://www.github.com/', text: 'Github' },
  ];

  const apprenticeClassSevenApprentices = [
    { name: 'Betty Baker' },
    {
      name: 'Heather Taylor',
      status: 'previous',
    },
  ];

  const apprenticeClassEightApprentices = [
    {
      name: 'Yosevu Kilonzo',
      status: 'current',
    },
    {
      name: 'Corinne Ling',
      status: 'previous',
    },
    {
      name: 'Travis Sanon',
      status: 'current',
    },
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
        <Apprentice name="Rise Erpelding" image="/apprentices/Rise.png" links={links} />
      </div>
      <h2>Hero</h2>
      <Hero />
      <h2>Apprentice Qualities</h2>
      <ApprenticeQualities />
      <h2>Previous Apprentices Group</h2>
      <PreviousApprenticesGroup
        version="7.0"
        statuses={apprenticeClassSevenApprentices}
      />
      <PreviousApprenticesGroup
        version="8.0"
        statuses={apprenticeClassEightApprentices}
      />
    </main>
  );
};

export default Components;
