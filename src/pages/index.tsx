import { PostResponse } from '../domain/posts/tyte-exemples';
import { GetStaticProps } from 'next';
import HomePage from '@/containers/HomePage';

export type HomeProps = {};

export default function Home({}: HomeProps) {
  return <HomePage />;
}

export const getStaticProps: GetStaticProps = async () => {};
