import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'SEO Description for the About Page',
};

export default function ContactPage() {
  return (
    <>
      <h1 className='text-7xl'>Contact</h1>
    </>
  );
}
