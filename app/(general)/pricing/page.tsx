import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Title',
  description: 'SEO Description for the About Page',
};

export default function PricingPage() {
  return (
    <>
      <h1 className='text-7xl'>Pricing</h1>
    </>
  );
}
