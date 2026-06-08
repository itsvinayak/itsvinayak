import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';
import { z } from 'zod';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const posts = defineCollection({
  name: 'posts',
  directory: 'content/articles',
  include: '**/*.mdx',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    content: z.string(),
    date: z.string(),
    published: z.boolean().default(true),
    image: z.string().optional(),
    authors: z.array(z.string()).optional(),
    authorsPics: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: 'github-dark',
            onVisitLine(node: any) {
              if (node.children.length === 0) {
                node.children = [{ type: 'text', value: ' ' }];
              }
            },
            onVisitHighlightedLine(node: any) {
              node.properties.className.push('line--highlighted');
            },
            onVisitHighlightedWord(node: any) {
              node.properties.className = ['word--highlighted'];
            },
          },
        ],
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['subheading-anchor'],
              ariaLabel: 'Link to section',
            },
          },
        ],
      ],
    });

    return {
      ...document,
      slug: `/articles/${document._meta.path}`,
      slugAsParams: document._meta.path,
      authorsImage: document.authorsPics,
      body: {
        code: mdx,
      },
    };
  },
});

export default defineConfig({
  content: [posts],
});