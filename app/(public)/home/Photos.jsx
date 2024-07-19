'use client'

import Image from 'next/image'
import {IoMdPhotos} from 'react-icons/io'

import F2Den1 from '@/assets/images/floor2/den/f2-den-1.jpg'
import F2Kitchen1 from '@/assets/images/floor2/kitchen/f2-kitchen-1.jpg'
import F2MBed1 from '@/assets/images/floor2/main/f2-mbed-1.jpg'
import F2GBed1 from '@/assets/images/floor2/guest/f2-gbed-1.jpg'

import F1Den1 from '@/assets/images/floor1/den/f1-den-1.jpg'
import F1Kitchen1 from '@/assets/images/floor1/kitchen/f1-kitchen-1.jpg'
import F1MBed1 from '@/assets/images/floor1/main/f1-mbed-1.jpg'
import F1GBed1 from '@/assets/images/floor1/guest/f1-gbed-1.jpg'
import F1Bunk1 from '@/assets/images/floor1/bunk/f1-bbed-1.jpg'

import House1 from '@/assets/images/exterior/house-1.jpg'
import Carport1 from '@/assets/images/exterior/carport-1.jpg'
import Clubhouse1 from '@/assets/images/pool/pool-1.png'

import {Gallery, Item} from 'react-photoswipe-gallery'

export default function Photos() {
  return (
    <div className='accordian'>
      <label className='accordian-label peer'>
        PHOTOS
        <input className='accordian-ui' type='checkbox' />
      </label>

      {/* FLOOR 2 */}
      <div className='accordian-content peer-has-[:checked]:flex flex-col gap-4'>
        <section className='shadow-md rounded border-gray border w-full'>
          <div className='font-bold mb-2 rounded-t px-2 bg-slate-200'>Second Floor</div>
          <section className='photos-section'>
            <ul className='photos-container'>
              {/* Floor 2 Den */}
              <li className='photo-box'>
                <figure className='photo-container'>
                  <Image src={F2Den1} width={0} height={0} alt='img' className='photo' />
                  <figcaption className='photo-caption'>
                    <h3>Den</h3>
                    <IoMdPhotos />
                  </figcaption>
                </figure>
              </li>

              {/* Floor 2 Kitchen / Dining */}
              <li className='photo-box'>
                <figure className='photo-container'>
                  <Image src={F2Kitchen1} width={0} height={0} alt='img' className='photo' />
                  <figcaption className='photo-caption'>
                    <h3>Kitchen / Dining</h3>
                    <IoMdPhotos />
                  </figcaption>
                </figure>
              </li>

              {/* Floor 2 Main Bedroom */}
              <li className='photo-box'>
                <figure className='photo-container'>
                  <Image src={F2MBed1} width={0} height={0} alt='img' className='photo' />
                  <figcaption className='photo-caption'>
                    <h3>Main Bedroom</h3>
                    <IoMdPhotos />
                  </figcaption>
                </figure>
              </li>

              {/* Floor 2 Guest Bedroom */}
              <li className='photo-box'>
                <figure className='photo-container'>
                  <Image src={F2GBed1} width={0} height={0} alt='img' className='photo' />
                  <figcaption className='photo-caption'>
                    <h3>Guest Bedroom</h3>
                    <IoMdPhotos />
                  </figcaption>
                </figure>
              </li>
            </ul>
          </section>
        </section>
      </div>

      {/* FLOOR 1 */}
      <div className='accordian-content peer-has-[:checked]:flex flex-col gap-4'>
        <section className='shadow-md rounded border-gray border w-full'>
          <div className='font-bold mb-2 rounded-t px-2 bg-slate-200'>First Floor</div>
          <section className='photos-section'>
            <ul className='photos-container'>
              {/* Floor 2 Den */}
              <li className='photo-box'>
                <figure className='photo-container'>
                  <Image src={F1Den1} width={0} height={0} alt='img' className='photo' />
                  <figcaption className='photo-caption'>
                    <h3>Den</h3>
                    <IoMdPhotos />
                  </figcaption>
                </figure>
              </li>

              {/* Floor 2 Kitchenette */}
              <li className='photo-box'>
                <figure className='photo-container'>
                  <Image src={F1Kitchen1} width={0} height={0} alt='img' className='photo' />
                  <figcaption className='photo-caption'>
                    <h3>Kitchenette</h3>
                    <IoMdPhotos />
                  </figcaption>
                </figure>
              </li>

              {/* Floor 2 Main Bedroom */}
              <li className='photo-box'>
                <figure className='photo-container'>
                  <Image src={F1MBed1} width={0} height={0} alt='img' className='photo' />
                  <figcaption className='photo-caption'>
                    <h3>Main Bedroom</h3>
                    <IoMdPhotos />
                  </figcaption>
                </figure>
              </li>

              {/* Floor 2 Guest Bedroom */}
              <li className='photo-box'>
                <figure className='photo-container'>
                  <Image src={F1GBed1} width={0} height={0} alt='img' className='photo' />
                  <figcaption className='photo-caption'>
                    <h3>Guest Bedroom</h3>
                    <IoMdPhotos />
                  </figcaption>
                </figure>
              </li>

              {/* Floor 2 Bunkroom */}
              <li className='photo-box'>
                <figure className='photo-container'>
                  <Image src={F1Bunk1} width={0} height={0} alt='img' className='photo' />
                  <figcaption className='photo-caption'>
                    <h3>Bunkroom</h3>
                    <IoMdPhotos />
                  </figcaption>
                </figure>
              </li>
            </ul>
          </section>
        </section>
      </div>

      {/* EXTERIOR */}
      <div className='accordian-content peer-has-[:checked]:flex flex-col gap-4'>
        <section className='shadow-md rounded border-gray border w-full'>
          <div className='font-bold mb-2 rounded-t px-2 bg-slate-200'>Exterior</div>
          <section className='photos-section'>
            <ul className='photos-container'>
              {/* Exterior - House */}
              <li className='photo-box'>
                <figure className='photo-container'>
                  <Image src={House1} width={0} height={0} alt='img' className='photo' />
                  <figcaption className='photo-caption'>
                    <h3>House</h3>
                    <IoMdPhotos />
                  </figcaption>
                </figure>
              </li>

              {/* Exterior - Carport */}
              <li className='photo-box'>
                <figure className='photo-container'>
                  <Image src={Carport1} width={0} height={0} alt='img' className='photo' />
                  <figcaption className='photo-caption'>
                    <h3>Carport</h3>
                    <IoMdPhotos />
                  </figcaption>
                </figure>
              </li>

              {/* Clubhouse */}
              <li className='photo-box'>
                <figure className='photo-container'>
                  <Image src={Clubhouse1} width={0} height={0} alt='img' className='photo' />
                  <figcaption className='photo-caption'>
                    <h3>Clubhouse</h3>
                    <IoMdPhotos />
                  </figcaption>
                </figure>
              </li>
            </ul>
          </section>
        </section>
      </div>
    </div>
  )
}
