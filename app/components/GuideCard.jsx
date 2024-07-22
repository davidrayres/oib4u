import Link from 'next/link'
import Image from 'next/image'
import {FaPhone} from 'react-icons/fa6'
import {FaExternalLinkAlt} from 'react-icons/fa'

export default function GuideCard({business}) {
  return (
    <div className='flex gap-8 shadow-md rounded border-gray border p-8 w-full'>
      <Image src={business.image} alt='' className='object-cover w-1/3' width={0} height={0} sizes='100vw' priority={true} />

      <div className='flex flex-col flex-grow gap-2 justify-center'>
        <p className='font-bold text-2xl'>{business.name}</p>
        <a href={`tel:${business.phone}`} className='flex gap-2 items-center'>
          <FaPhone />
          {`(${business.phone.slice(0, 3)}) ${business.phone.slice(3, 6)}-${business.phone.slice(6, 10)}`}
        </a>
        <hr />
        <p className='text-gray-600'>{business.slogan}</p>
        <p className='text-gray-600'>{business.address}</p>
        <Link href={business.website} className='flex gap-2 items-center text-blue-600'>
          <FaExternalLinkAlt /> More Information
        </Link>
      </div>
    </div>
  )
}
