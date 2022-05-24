import { ReactNode } from 'react';
import { RichTextContent } from '@graphcms/rich-text-types';

export type AnchorInfo = {
  id: string;
  label: string;
  children: ReactNode;
};

export type Image = {
  url: string;
};

export type Author = {
  picture: Image;
  name: string;
};

export type Content = {
  raw: RichTextContent;
};

export type Post = {
  authors: Author[];
  content: Content;
  coverImage: Image;
  id: string;
  ogImage: Image;
  date: string;
  excerpt: string;
  slug: string;
  title: string;
};
