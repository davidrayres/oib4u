import Hero from './home/Hero'
import Description from './home/Description'
import Amenities from './home/Amenities'
import Photos from './home/Photos'
import Floorplan from './home/Floorplan'
import Pool from './home/Pool'
import Map from './home/Map'
import Rates from './home/Rates'

export default function HomePage() {
  return (
    <main>
      <Hero></Hero>
      <section className='flex flex-col w-full gap-6 px-5 py-10'>
        <Description />
        <Amenities />
        <Photos />
        <Floorplan />
        <Pool />
        <Map />
        <Rates />
      </section>
    </main>
  )
}
