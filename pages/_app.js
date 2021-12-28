import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import tw from 'tailwind-styled-components';
import { FaBook, FaCode, FaHome, FaPhone, FaQuestion } from 'react-icons/fa';
import '../styles/globals.css';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

function App({ Component, pageProps }) {
  const pageTitle = Component.pageTitle === 'Home' ? 'Cole Harris' : `${Component.pageTitle} - Cole` || 'Cole Harris';
  return (
    <>
      <Head>
        <title> {pageTitle} </title>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='title' content='Cole Harris' />
        <meta name='description' content='I am a 14y.o. full-stack indie developer and innovator.' />
        <meta name='keywords' content='dev, developer, for hire, full-stack developer' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='theme-color' content='#00000' />
        <meta property='og:url' content='https://coleh.lol/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Cole Harris' />
        <meta property='og:description' content='I am a 14y.o. full-stack indie developer and innovator.' />
        <meta property='og:image' content='/assets/img/c-bg.png' />
        <link href='/assets/img/fav.png' rel='icon' />
        <link href='/assets/img/fav.png' rel='apple-touch-icon' />
        <script async src="https://arc.io/widget.min.js#sBnXCUTp"></script>
      </Head>
      <div className='flex'>
        <SideBar className='select-none'>
          <TopIcon>
            <Image src='/assets/img/c.png' width='23px' height='28px' />
          </TopIcon>
          <Divider />
          <SideBarIcon text='Home' page='/' icon={<FaHome size='28' />} />
          <SideBarIcon text='Projects' page='/projects' icon={<FaBook size='20' />} />
          <SideBarIcon text='What I Use' page='/uses' icon={<FaCode size='20' />} />
          <SideBarIcon text='Socials' page='/socials' icon={<FaPhone size='20' />} />
          <SideBarIcon text='ETC' page='/etc' icon={<FaQuestion size='20' />} />
        </SideBar>

        <Content>
          <Component {...pageProps} />
          <AnimatedCursor
            innerSize={4}
            outerSize={32}
            color='149, 149, 149'
            outerAlpha={0.2}
            innerScale={1}
            outerScale={1.5}
          />
        </Content>
      </div>
    </>
  );
}

const SideBar = tw.div`
  fixed 
  top-0 
  left-0 
  h-screen 
  w-16 
  flex 
  flex-col
  bg-sidebarGray
  shadow-lg
`;

const Content = tw.div`
  flex 
  flex-col
  ml-24
  mt-6
  h-full 
  w-full 
  overflow-hidden
  mr-5
`;

const IconGroup = tw.div`
  relative 
  flex 
  items-center 
  justify-center 
  h-12 
  w-12 
  mt-2 
  mb-2 
  mx-auto
  bg-sidebarIcon
  text-white 
  hover:text-gray-400
  hover:rounded-xl 
  rounded-3xl
  transition-all 
  duration-300 
  ease-linear
  cursor-pointer 
  shadow-lg
`;

const Divider = tw.hr`
  bg-sidebarIcon
  border 
  border-sidebarIcon
  rounded-full
  mx-2
`;

const Tooltip = tw.span`
  absolute 
  w-auto 
  p-2 
  m-2 
  min-w-max 
  left-14 
  rounded-md 
  shadow-md
  text-white 
  bg-sidebarIcon
  text-xl 
  font-bold 
  transition-all 
  duration-100 
  scale-0 
  origin-left
  group-hover:scale-100
`;

const TopIcon = tw.div`
  relative 
  flex 
  items-center 
  justify-center 
  h-12 
  w-12 
  mt-2 
  mb-2 
  mx-auto
  bg-sidebarIcon
  text-white 
  rounded-3xl
  shadow-lg
`;

const SideBarIcon = ({ icon, text = 'Tooltip', page }) => (
  <Link href={page}>
    <IconGroup className='group'>
      {icon}
      <Tooltip>
        {text}
      </Tooltip>
    </IconGroup>
  </Link>
);

export default App;
