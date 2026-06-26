import Layout from '@components/Layout';
import ConnectGrid from '@components/ConnectGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connect',
  description: 'Connect Page of Vinayaks Personal Website',
};

const Page = () => {
  return (
    <Layout>
      <ConnectGrid />
    </Layout>
  );
};

export default Page;
