import Link from 'next/link';
Socials.pageTitle = 'Socials';

function Socials () {
  return (
    <div>
      <h1 className='text-4xl font-calibri font-bold mb-6'>Socials</h1>
      <p className='text-2xl font-calibri font-normal'>
        <p className="mb-6 font-semibold">I am mostly responsive over Discord and Twitter DMs.</p>
        Github: <Link href='https://github.com/colenh'><span className='cursor-pointer'>colenh</span></Link> <br />
        Twitter: <Link href='https://twitter.com/colenh_'><span className='cursor-pointer'>@colenh_</span></Link> <br />
        Discord: <Link href='https://discord.com/users/450228764857597954'><span className='cursor-pointer'>cole#7629 (450228764857597954)</span></Link> <br />
        Revolt: @colenh (01FFHZ8G9XBEZXAY5MKKR15A72) <br />
        Matrix (Element): @colenh:matrix.org <br />
        Jabber: colenh@jabber.calyxinstitute.org <br />
        Email: <Link href='mailto:me@coleh.lol'>me@coleh.lol</Link>
      </p>
    </div>
  );
}

export default Socials;