import Link from 'next/link';
Home.pageTitle = 'Home';

function Home () {
  return (
    <div>
      <h1 className='text-4xl font-calibri font-bold mb-6'>Who Am I?</h1>
      <p className='text-2xl font-calibri font-normal mb-6'>I am a 14y.o. full-stack indie developer who loves NodeJS and NextJS. <br />
      I design, build, and ship products of quality and reliability. <br />
      Currently, I'm a founder and developer at <Link href='https://treehous.app' passHref><span className='text-thGreen cursor-pointer treehous'>Treehous</span></Link>.</p>
      <h3 className='text-2xl font-calibri font-semibold'>What is Treehous?</h3>
      <p className='text-xl font-calibri font-normal mb-6'>Treehous is a social chat/media app where you can post images, text, chat with friends, find new friends, and have fun. <br />
      Treehous is in a closed alpha phase, you can check it out at <Link href='https://treehous.app' passHref><span className='text-thGreen cursor-pointer treehous'>treehous.app</span></Link>.</p>
    </div>
  );
};

export default Home;