import { Footer, Navbar } from '@/components'
// import './globals.css'
import { Hero, Dishes, HowToOrder, Feedback, Newsletter } from '@/sections'


export default function Home() {
  return (
    <>
      <Navbar />
      <section className='padding'>
        <Hero />
      </section>
      
      <section className='padding'>
        <Dishes />
      </section>

      <section className='padding'>
        <HowToOrder />
      </section>

      <section className='padding'>
        <Feedback />
      </section>

      <section className='padding bg-pink-100'>
        <Newsletter />
      </section>

      <section className='padding bg-black text-white-400'>
        <Footer />
      </section>
    </>
  )
}
