import Link from 'next/link';
Home.pageTitle = 'Home';

function Home () {
  return (
    <div>
      <h1 className='text-4xl font-calibri font-bold mb-6'>Who Am I?</h1>
      <p className='text-2xl font-calibri font-normal mb-6'>I am a 14y.o. full-stack indie developer who loves NodeJS and NextJS. <br />
      I design, build, and ship products of quality and reliability. </p>
    </div>
  );
};

export default Home;
