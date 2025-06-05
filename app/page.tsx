import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col items-center p-24'>
      <span className='text-5xl'>Hola Mundo</span>

      <Link href='/about' className='text-blue-500 hover:underline mt-4'>
        Go to About Page
      </Link>
    </main>
  );
}
