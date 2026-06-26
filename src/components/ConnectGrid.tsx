'use client';

import { useMemo } from 'react';
import CardGrid from '@ui/CardGrid';
import { LinkCardProps } from '@components/types/LinkCardProps';
import { SocialLinks } from '@components/data/social';

const shuffle = <T,>(items: T[]): T[] => {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

const ConnectGrid = () => {
  const links = useMemo(() => {
    return shuffle(SocialLinks as LinkCardProps[]).map((link) => ({
      ...link,
      link: link.link || '#',
      classNameBox: 'h-full',
    }));
  }, []);

  return (
    <div className='grid gap-4 px-4 pt-5 sm:auto-rows-fr sm:grid-cols-2 lg:grid-cols-3 lg:px-0'>
      {links.map((link) => (
        <CardGrid
          key={link.title}
          title={link.title}
          description={link.description}
          image={link.image}
          icon={link.icon}
          link={link.link}
          classNameBox={link.classNameBox}
        />
      ))}
    </div>
  );
};

export default ConnectGrid;
