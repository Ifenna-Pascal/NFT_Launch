import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     {/* <div className='bg-gray-900 h-screen '>
     <div className='absolute roadmap m-24 bg-[#E5A301] w-[40rem] max-w-[45rem] min-w-[30rem]'>
          <div className='relative bg-white z-30 bottom-3 px-8 py-8 right-3'>
              <div className='flex items-center mb-4 justify-between'>
                  <h1 className='text-[#171835] font-semibold text-xl font-manrope font-[700]'>Phase 1</h1>
                  <h1 className='text-[#E5A301] font-semibold text-xl font-manrope font-[700]'>20%</h1>
              </div>
              <p className='leading-8 text-lg font-manrope text-[#171835]'>
              Phase 1 of the roadmap will be involving the building of our community! During this phase, we will be marketing the Rockstar Apes on social media to grow our community following.
               We will be collaborating with other large projects within the NFT space before and after launch!
              </p>
          </div>
       </div>
     </div> */}
    </div>
  )
}
