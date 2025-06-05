import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO Description for the About Page',
};

export default function AboutPage() {
  return (
    <>
      <h1 className='text-7xl'>About Us</h1>
    </>
  );
}
