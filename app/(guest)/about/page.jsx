import Image from 'next/image'
import us from '@/public/images/other/us.jpg'

export default function AboutPage() {
  return (
    <main className='p-4'>
      <div className='mb-12 text-2xl font-bold'>Our Story</div>
      <div className='m-24'>
        <Image src={us} width={0} height={0} className='rounded-xl float-right ml-4 mb-2' alt='img' />
        <div className=''>
          <p className=''>After vacationing at OIB for a while, we decided to purchase a lot and build a home of our own with our retired parents. We custom-built our home, so we had the opportunity to make it feel much more like a second home than a rental property. It has all the details of a beach cottage like a great room high ceilings, wainscoting throughout, screened-in porch off the kitchen with a counter for enjoying sandwiches, large porches with a hammock and plenty of rocking chairs and a metal roof. We added features such as granite countertops, stainless steel appliances, beautiful light fixtures, extra-large decks, an elevator and furnished it with designer furnishings to truly feel pampered while on vacation.</p>
          <br />
          <p>We have small children so we wanted to make our home ultra-kid friendly. We provide a number of baby/toddler/kid items as well as beach to make it VERY EASY to pack up and come to the beach!</p>
        </div>
      </div>
    </main>
  )
}
