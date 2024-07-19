import Image from 'next/image'
import hero from '@/assets/images/hero.png'

export default function Hero() {
  return (
    <section className='relative'>
      <Image src={hero} width='0' height='0' sizes='100vw' className='w-full h-auto' alt='beach' />
      <div className='absolute flex flex-col text-center text-white transform translate-x-[-50%] left-1/2 top-2 w-full'>
        <h1 className='text-4xl font-extrabold sm:text-5xl md:text-6xl'>86 W Second</h1>
        <h2 className='mt-4 mb-2 text-2xl font-bold'>Your Ocean Isle Beach Experience</h2>
        <p>5 BEDS | 5 BATHS | 12 GUESTS</p>
      </div>
    </section>
  )
}
