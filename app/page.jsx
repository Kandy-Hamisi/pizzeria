import { Navbar } from '@/components'
// import './globals.css'
import { Hero, Dishes, HowToOrder, Feedback } from '@/sections'


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
    </>
  )
}
