import Link from 'next/link';
ETC.pageTitle = 'ETC';

function ETC () {
  return (
    <div>
      <h1 className='text-4xl font-calibri font-bold mb-6'>ETC</h1>
      <ul className='text-2xl font-calibri font-normal mb-6 list-disc list-inside'>
        <li>The source code for this website is available @ <Link href='https://github.com/colenh/website' passHref><span className='cursor-pointer'>colenh/website</span></Link>.</li>
        <li>I live in West Virginia, USA. I plan to move to <Link href='https://www.canada.ca/en.html' passHref><span className='text-canada cursor-pointer canada'>Canada</span></Link> when possible.</li>
        <li>I love FOSS (Free and Open-source software).</li>
        <li>I use cow.yoga as a catch-all email address for a few services, for some self-hosting projects, and as a WHOIS email for most of my domains.</li>
      </ul>
    </div>
  );
}

export default ETC;