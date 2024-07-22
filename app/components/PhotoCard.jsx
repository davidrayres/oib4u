'use client'
import Image from 'next/image'
import {IoMdPhotos} from 'react-icons/io'
import {Gallery, Item} from 'react-photoswipe-gallery'

// import fs from 'fs'
// import path from 'path'

export default function PhotoCard({photo}) {
  // const directoryPath = path.join(process.cwd(), '@/public/images/floo2/den')
  // const fileNames = fs.readdirSync(directoryPath)
  // const fileCount = fileNames.length
  // console.log(fileNames)

  return (
    <>
      <Gallery>
        <div className='photo-container'>
          <Item original={`/images/${photo.category}/${photo.room}/${photo.room}1.jpg`} width='1000' height='600'>
            {({ref, open}) => <Image ref={ref} onClick={open} src={`/images/${photo.category}/${photo.room}/${photo.room}1.jpg`} width={310} height={0} alt='img' />}
          </Item>
          {/* hidden pictures */}
          <Item original={`/images/${photo.category}/${photo.room}/${photo.room}2.jpg`} width='1000' height='600'>
            {({ref, open}) => <Image ref={ref} onClick={open} src={`/images/${photo.category}/${photo.room}/${photo.room}2.jpg`} width={310} height={0} alt='img' className='hidden' />}
          </Item>
          <Item original={`/images/${photo.category}/${photo.room}/${photo.room}3.jpg`} width='1000' height='600'>
            {({ref, open}) => <Image ref={ref} onClick={open} src={`/images/${photo.category}/${photo.room}/${photo.room}3.jpg`} width={310} height={0} alt='img' className='hidden' />}
          </Item>
          <Item original={`/images/${photo.category}/${photo.room}/${photo.room}4.jpg`} width='1000' height='600'>
            {({ref, open}) => <Image ref={ref} onClick={open} src={`/images/${photo.category}/${photo.room}/${photo.room}4.jpg`} width={310} height={0} alt='img' className='hidden' />}
          </Item>
          <Item original={`/images/${photo.category}/${photo.room}/${photo.room}5.jpg`} width='1000' height='600'>
            {({ref, open}) => <Image ref={ref} onClick={open} src={`/images/${photo.category}/${photo.room}/${photo.room}5.jpg`} width={310} height={0} alt='img' className='hidden' />}
          </Item>
          <Item original={`/images/${photo.category}/${photo.room}/${photo.room}6.jpg`} width='1000' height='600'>
            {({ref, open}) => <Image ref={ref} onClick={open} src={`/images/${photo.category}/${photo.room}/${photo.room}6.jpg`} width={310} height={0} alt='img' className='hidden' />}
          </Item>
          <Item original={`/images/${photo.category}/${photo.room}/${photo.room}7.jpg`} width='1000' height='600'>
            {({ref, open}) => <Image ref={ref} onClick={open} src={`/images/${photo.category}/${photo.room}/${photo.room}7.jpg`} width={310} height={0} alt='img' className='hidden' />}
          </Item>
          <Item original={`/images/${photo.category}/${photo.room}/${photo.room}8.jpg`} width='1000' height='600'>
            {({ref, open}) => <Image ref={ref} onClick={open} src={`/images/${photo.category}/${photo.room}/${photo.room}8.jpg`} width={310} height={0} alt='img' className='hidden' />}
          </Item>
          <div className='photo-caption'>
            <h1>{photo.label}</h1>
            <IoMdPhotos />
          </div>
        </div>
      </Gallery>
    </>
  )
}
