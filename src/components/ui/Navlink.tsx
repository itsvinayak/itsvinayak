import Link from 'next/link';
import { cn } from '@lib/utils';

const Navlink = ({ links, classNameProps, onLinkClick }: any) => {
  return (
    <ul
      className={cn(
        'rounded font-medium',
        classNameProps
      )}
    >
      {links.map((link: any) => (
        <li key={link.name} className='list-none'>
          <Link
            href={link.href}
            onClick={onLinkClick}
            className={cn(
              'relative inline-flex w-full items-center justify-start rounded-lg px-4 py-2 text-sm font-semibold tracking-wide text-zinc-800 transition-all hover:bg-zinc-100 hover:text-black dark:text-zinc-100 dark:hover:bg-zinc-800 md:w-fit md:text-base',
              link.itemClass
            )}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navlink;
