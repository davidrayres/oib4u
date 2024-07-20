'use client'
import Image from 'next/image'
import {Gallery, Item} from 'react-photoswipe-gallery'

const MyGallery = () => (
  <Gallery>
    <Item original='/images/floor2/main/f2-mbed-1.jpg' width='1000' height='600'>
      {({ref, open}) => <Image ref={ref} onClick={open} src='/images/floor2/main/f2-mbed-1.jpg' width={0} height={0} sizes='100vw' priority={true} alt='' className='photo object-cover h-[200px] w-1/2 rounded-xl' />}
    </Item>
    <Item original='/images/floor2/main/f2-mbed-4.jpg' width='1000' height='600'>
      {({ref, open}) => <Image ref={ref} onClick={open} src='/images/floor2/main/f2-mbed-4.jpg' width={0} height={0} sizes='100vw' priority={true} alt='' className='photo object-cover h-[200px] w-1/2 rounded-xl' />}
    </Item>
  </Gallery>
)

export default MyGallery
