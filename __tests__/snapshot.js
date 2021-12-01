import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../pages/index';

it('renders homepage unchanged', () => {
  const apprenticeData = {
    currentApprenticeGroup: {
      version: '0.0',
      currentApprentices: [
        {
          name: 'First Last',
          image: '/apprentices/First.png',
          links: [
            { href: 'personal', text: 'Personal' },
            { href: 'https://www.linkedin.com/', text: 'Linkedin' },
            { href: 'https://www.github.com/', text: 'Github' },
          ],
        },
        {
          name: 'First Last',
          image: '/apprentices/First.png',
          links: [
            { href: 'personal', text: 'Personal' },
            { href: 'https://www.linkedin.com/', text: 'Linkedin' },
            { href: 'https://www.github.com/', text: 'Github' },
          ],
        },
      ],
    },
    previousApprenticeGroups: [{
      version: '0.0',
      apprentices: [
        {
          name: 'First Last',
        },
        {
          name: 'First Last',
          status: 'previous',
        },
        {
          name: 'First Last',
          status: 'current',
        },
      ],
    }],
  };
  const tree = renderer.create(<Index apprenticeData={apprenticeData} />).toJSON();
  expect(tree).toMatchSnapshot();
});
