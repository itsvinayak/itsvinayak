import * as React from 'react';
import Image from 'next/image';
import { MDXContent } from '@content-collections/mdx/react';
import BlogTitle from '@components/BlogTitle';
import { cn } from '@lib/utils';
import { Callout } from '@ui/Callout';
import { MdxCard } from '@components/mdx/MdxCard';

interface MDXComponents {
  [key: string]: React.ComponentType<any>;
}

const components: MDXComponents = {
  h1: ({ className, ...props }: { className: string }) => (
    <h1
      className={cn(
        'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
        className
      )}
      aria-label="Heading 1"
      {...props}
    />
  ),
  h2: ({ className, ...props }: { className: string }) => (
    <h2
      className={cn(
        'mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0',
        className
      )}
      aria-label="Heading 2"
      {...props}
    />
  ),
  h3: ({ className, ...props }: { className: string }) => (
    <h3
      className={cn(
        'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
        className
      )}
      aria-label="Heading 3"
      {...props}
    />
  ),
  h4: ({ className, ...props }: { className: string }) => (
    <h4
      className={cn(
        'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
      aria-label="Heading 4"
      {...props}
    />
  ),
  h5: ({ className, ...props }: { className: string }) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        className
      )}
      aria-label="Heading 5"
      {...props}
    />
  ),
  h6: ({ className, ...props }: { className: string }) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
        className
      )}
      aria-label="Heading 6"
      {...props}
    />
  ),
  a: ({ className, ...props }: { className: string }) => (
    <a
      className={cn('font-medium underline underline-offset-4', className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: { className: string }) => (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: { className: string }) => (
    <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }: { className: string }) => (
    <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: { className: string }) => (
    <li className={cn('mt-2', className)} {...props} />
  ),
  blockquote: ({ className, ...props }: { className: string }) => (
    <blockquote
      className={cn(
        '[&>*]:text-muted-foreground mt-6 border-l-2 pl-6 italic',
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn('rounded-md border', className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className='my-4 md:my-8' {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className='my-6 w-full overflow-y-auto'>
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn('even:bg-muted m-0 border-t p-0', className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: { className: string }) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: { className: string }) => (
    <td
      className={cn(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: { className: string }) => (
    // <!-- add unique id  -->
    <div className='relative'>
      <pre
        className={cn(
          'mb-4 mt-4 overflow-x-auto rounded-lg bg-black px-[0.8rem] py-[0.8rem] font-mono text-sm',
          className
        )}
        {...props}
      />
    </div>
  ),
  code: ({ className, ...props }: { className: string }) => (
    <code
      className={cn(
        'relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm',
        className
      )}
      {...props}
    />
  ),
  Image,
  Callout,
  Card: MdxCard,
};

interface MdxProps {
  code: string;
  title: string;
  imageSrc?: string;
  date: string;
  authors?: string[];
  authorsImage?: string[];
  tags?: string[];
}

export function Mdx({
  code,
  title,
  imageSrc,
  date,
  authors,
  authorsImage,
  tags,
}: MdxProps) {
  if (!authorsImage) {
    authorsImage = process.env.AUTHOR_IMAGE ? [process.env.AUTHOR_IMAGE] : [];
  }
  if (!tags) {
    tags = process.env.LIVE_BLOG_TAGS ? [process.env.LIVE_BLOG_TAGS] : [];
  }
  return (
    <article className='pt-12'>
      <BlogTitle
        title={title}
        date={date}
        authors={authors}
        authorsImage={authorsImage}
        tags={tags}
      />
      <MDXContent code={code} components={components} />
    </article>
  );
}
