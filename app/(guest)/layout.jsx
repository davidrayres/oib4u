import Navbar from '@/app/components/Navbar'

export default async function PublicLayout({children}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
