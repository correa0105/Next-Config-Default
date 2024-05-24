import HomePage from '@/containers/HomePage';
import { GetServerSideProps } from 'next';

export type CategoryProps = {
};

export default function Category({}: CategoryProps) {
  return <HomePage />;
}

export const getServerSideProps: GetServerSideProps =
  async (ctx) => {};
