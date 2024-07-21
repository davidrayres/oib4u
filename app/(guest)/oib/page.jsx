import Link from 'next/link'

export default function OibPage() {
  const guideData = {
    activities: [
      {
        image: 'https://brunswickvacationrentals.com/wp-content/uploads/2022/06/climb-5485876_1280.jpg',
        name: 'Swamp Park',
        phone: '9105793095',
        slogan: 'Open Year Round',
        Address: '5550 Watts Rd SW, Ocean Isle Beach NC',
        wedsite: 'https://www.shallotteriverswamppark.com/',
      },
      {
        image: 'https://brunswickvacationrentals.com/wp-content/uploads/2022/06/ocean-isle-pier.jpg',
        name: 'Ocean Isle Beach Pier',
        phone: '9105793095',
        slogan: 'Pier Opens at 7:00 am • Grill Opens at 7:00 am',
        address: '1 West 1st Street, Ocean Isle Beach, NC',
        wedsite: 'https://oibpier.com/',
      },
      {
        image: 'https://brunswickvacationrentals.com/wp-content/uploads/2022/06/planetarium-3586121_1280.jpg',
        name: 'Museum of Coastal Carolina',
        phone: '9105791016',
        slogan: 'Museum of Coastal Carolina',
        address: '21 East Second Street Ocean Isle Beach, NC 28469',
        wedsite: 'https://museumplanetarium.org/',
      },
    ],

    dining: [
      {
        image: 'https://brunswickvacationrentals.com/wp-content/uploads/2022/06/salmon-522483_1280.jpg',
        name: "Sharky's Restaurant",
        phone: '9105799177',
        slogan: 'Serving you waterfront for over 30 years',
        address: '61 CAUSEWAY DRIVE, OCEAN ISLE BEACH, NC, 28469',
        wedsite: 'https://www.sharkysoceanisle.com/',
      },
      {
        image: 'https://brunswickvacationrentals.com/wp-content/uploads/2022/06/bar-4656332_1280.jpg',
        name: 'Ocean Isle Fish Company',
        phone: '9105755855',
        slogan: 'Ocean Isle fishing center, restaurant and tiki bar.',
        address: '65 Causeway Dr. Ocean Isle Beach, NC 28469',
        wedsite: 'https://www.oceanislefishco.com/',
      },
      {
        image: 'https://brunswickvacationrentals.com/wp-content/uploads/2022/06/breakfast-3855733_1280.jpg',
        name: "Amelia's Backstreet Grille",
        phone: '9105799200',
        slogan: 'Hours: Open 6 Days a Week. Closed on Tuesdays 8:00 AM - 9:00 PM',
        address: '1564 Market Place Blvd Suite 700 Ocean Isle Beach, NC 28469',
        wedsite: 'http://www.ameliasoib.com/',
      },
    ],
    shopping: [
      {
        image: 'https://brunswickvacationrentals.com/wp-content/uploads/2022/06/ice-cream-1274894_1280.jpg',
        name: 'Ocean Isle Beach Pier Ice Cream Parlor & Gift Shop',
        phone: '9105793095',
        slogan: 'Gifts & Ice Cream on the pier',
        address: '1 W First St. Ocean Isle Beach, NC 28469',
      },
      {
        image: 'https://brunswickvacationrentals.com/wp-content/uploads/2022/06/load-2060616_1280.jpg',
        name: 'Flamingo Row',
        phone: '9105793126',
        slogan: 'Gift Shop',
        address: '13 E 1st St. Ocean Isle Beach, NC 28469',
        wedsite: '#',
      },
      {
        image: 'https://brunswickvacationrentals.com/wp-content/uploads/2022/06/vacations-2965429_1280.jpg',
        name: '',
        phone: 'tel:9105793522',
        slogan: 'Shop all beach gear here',
        address: '15 E 1st St. Ocean Isle Beach, NC 28469',
        wedsite: 'http://beachlifeonline.com/',
      },
    ],
    excursions: [
      {
        image: 'https://brunswickvacationrentals.com/wp-content/uploads/2022/06/surfing-2212948_1280.jpg',
        name: 'Carolina School of Surf',
        phone: '9107139283',
        slogan: '',
        address: '',
        website: 'https://carolinaschoolofsurf.com/',
      },
      {
        image: 'https://brunswickvacationrentals.com/wp-content/uploads/2022/06/canoeing-1521660_1280.jpg',
        name: 'Summertide Adventure Tours',
        phone: '9108332418',
        slogan: 'Kayak and Canoe tour agency',
        address: '59 Causeway Dr B, Ocean Isle Beach, NC 28469',
        wedsite: 'http://www.summertidetours.com/',
      },
      {
        image: 'https://brunswickvacationrentals.com/wp-content/uploads/2022/06/sport-721738_1280.jpg',
        name: "Carolina's Coastal Adventure Tours",
        phone: '9108801943',
        slogan: '2000 Sommersett Rd SW, Ocean Isle Beach, NC 28469',
        wedsite: 'http://www.ccattours.com/',
      },
    ],
  }

  return (
    <>
      <Link href='https://brunswickvacationrentals.com/local-area-guide/' className='text-blue-600 underline'>
        Local Guide
      </Link>

      {/* <!-- ACTIVITIES --> */}
      <section>
        <h2>Activities & Attractions</h2>

        <div class='item'>
          <img src='https://brunswickvacationrentals.com/wp-content/uploads/2022/06/climb-5485876_1280.jpg' alt='' title='' />

          <div class='itemText'>
            <h4>Swamp Park</h4>
            <a href='tel:9105793095' class='activ_phone'>
              <i class='fas fa-phone'></i>XXX-XXX-XXXX
            </a>
            <article>
              Open Year Round
              <br />
              5550 Watts Rd SW, Ocean Isle Beach NC
            </article>
            <a href='https://www.shallotteriverswamppark.com/' class='view'>
              View More Details
            </a>
          </div>
        </div>

        <div class='item'>
          <img src='https://brunswickvacationrentals.com/wp-content/uploads/2022/06/ocean-isle-pier.jpg' alt='' title='' />

          <div class='itemText'>
            <h4>Ocean Isle Beach Pier</h4>
            <a href='tel:9105793095' class='activ_phone'>
              <i class='fas fa-phone'></i>910-579-3095
            </a>
            <article>
              Ocean Isle Beach Pier
              <br />
              1 West 1st Street, Ocean Isle Beach, NC
              <br />
              Pier Opens at 7:00 am • Grill Opens at 7:00 am
            </article>
            <a target='_blank' href='https://oibpier.com/' class='view'>
              View More Details
            </a>
          </div>
        </div>

        <div class='item'>
          <img src='https://brunswickvacationrentals.com/wp-content/uploads/2022/06/planetarium-3586121_1280.jpg' alt='' title='' />

          <div class='itemText'>
            <h4>Museum of Coastal Carolina</h4>
            <a href='tel:9105791016' class='activ_phone'>
              <i class='fas fa-phone'></i>910-579-1016
            </a>
            <article>
              Museum of Coastal Carolina
              <br />
              21 East Second Street
              <br />
              Ocean Isle Beach, NC 28469
              <br />
              Ingram Planetarium
              <br />
              7625 High Market Street
              <br />
              Sunset Beach, NC 28468
            </article>
            <a target='_blank' href='https://museumplanetarium.org/' class='view'>
              View More Details
            </a>
          </div>
        </div>
      </section>

      {/* <!-- DINING --> */}
      <section>
        <h2>Dining</h2>

        <div class='item'>
          <img src='https://brunswickvacationrentals.com/wp-content/uploads/2022/06/salmon-522483_1280.jpg' alt='' title='' />

          <div class='itemText'>
            <h4>Sharky's Restaurant</h4>
            <a href='tel:9105799177' class='activ_phone'>
              <i class='fas fa-phone'></i>9105799177
            </a>
            <article>
              Serving you waterfront for over 30 years
              <br />
              61 CAUSEWAY DRIVE,
              <br />
              OCEAN ISLE BEACH, NC, 28469
            </article>
            <a target='_blank' href='https://www.sharkysoceanisle.com/' class='view'>
              View More Details
            </a>
          </div>
        </div>

        <div class='item'>
          <img src='https://brunswickvacationrentals.com/wp-content/uploads/2022/06/bar-4656332_1280.jpg' alt='' title='' />

          <div class='itemText'>
            <h4>Ocean Isle Fish Company</h4>
            <a href='tel:9105755855' class='activ_phone'>
              <i class='fas fa-phone'></i>(910) 575-5855
            </a>
            <article>
              Ocean Isle fishing center, restaurant and tiki bar.
              <br />
              65 Causeway Dr.
              <br />
              Ocean Isle Beach, NC 28469
            </article>

            <a target='_blank' href='https://www.oceanislefishco.com/' class='view'>
              View More Details
            </a>
          </div>
        </div>

        <div class='item'>
          <img src='https://brunswickvacationrentals.com/wp-content/uploads/2022/06/breakfast-3855733_1280.jpg' alt='' title='' />

          <div class='itemText'>
            <h4>Amelia's Backstreet Grille</h4>
            <a href='tel:9105799200' class='activ_phone'>
              <i class='fas fa-phone'></i>(910) 579-9200
            </a>
            <article>
              American Bistro
              <br />
              1564 Market Place Blvd Suite 700 Ocean Isle Beach, NC 28469
              <br />
              Hours: Open 6 Days a Week. Closed on Tuesdays 8:00 AM - 9:00 PM
            </article>
            <a target='_blank' href='http://www.ameliasoib.com/' class='view'>
              View More Details
            </a>
          </div>
        </div>
      </section>

      {/* <!--SHOPPING--> */}
      <section>
        <h2>Shopping</h2>
        <div class='item'>
          <img src='https://brunswickvacationrentals.com/wp-content/uploads/2022/06/ice-cream-1274894_1280.jpg' alt='' title='' />

          <div class='itemText'>
            <h4>Ocean Isle Beach Pier Ice Cream Parlor & Gift Shop</h4>
            <a href='tel:9105793095' class='activ_phone'>
              <i class='fas fa-phone'></i>(910) 579-3095
            </a>
            <article>
              Gifts & Ice Cream on the pier
              <br />
              1 W First St.
              <br />
              Ocean Isle Beach, NC 28469
            </article>
          </div>
        </div>

        <div class='item'>
          <img src='https://brunswickvacationrentals.com/wp-content/uploads/2022/06/load-2060616_1280.jpg' alt='' title='' />

          <div class='itemText'>
            <h4>Flamingo Row</h4>
            <a href='tel:9105793126' class='activ_phone'>
              <i class='fas fa-phone'></i>(910) 579-3126
            </a>
            <article>
              Gift Shop
              <br />
              13 E 1st St.
              <br />
              Ocean Isle Beach, NC 28469
            </article>
            <a target='_blank' href='#' class='view'>
              View More Details
            </a>
          </div>
        </div>

        <div class='item'>
          <img src='https://brunswickvacationrentals.com/wp-content/uploads/2022/06/vacations-2965429_1280.jpg' alt='' title='' />
          <div class='itemText'>
            <h4>Beach Life</h4>
            <a href='tel:9105793522' class='activ_phone'>
              <i class='fas fa-phone'></i>(910) 579-3522
            </a>
            <article>
              Shop all beach gear here
              <br />
              15 E 1st St.
              <br />
              Ocean Isle Beach, NC 28469
            </article>

            <a target='_blank' href='http://beachlifeonline.com/' class='view'>
              View More Details
            </a>
          </div>
        </div>
      </section>

      {/* <!--EXCURSIONS--> */}
      <section>
        <h2>Day Trips &amp; Excursions</h2>

        <div class='item'>
          <img src='https://brunswickvacationrentals.com/wp-content/uploads/2022/06/surfing-2212948_1280.jpg' alt='' title='' />

          <div class='itemText'>
            <h4>Carolina School of Surf</h4>
            <a href='tel:9107139283' class='activ_phone'>
              <i class='fas fa-phone'></i>(910) 713-9283
            </a>
            <article>44 E 1st St, Ocean Isle Beach, NC 28469</article>
            <a target='_blank' href='https://carolinaschoolofsurf.com/' class='view'>
              View More Details
            </a>
          </div>
        </div>

        <div class='item'>
          <img src='https://brunswickvacationrentals.com/wp-content/uploads/2022/06/canoeing-1521660_1280.jpg' alt='' title='' />

          <div class='itemText'>
            <h4>Summertide Adventure Tours</h4>
            <a href='tel:9108332418' class='activ_phone'>
              <i class='fas fa-phone'></i>(910) 833-2418
            </a>
            <article>
              Kayak and Canoe tour agency
              <br />
              59 Causeway Dr B, Ocean Isle Beach, NC 28469
            </article>
            <a target='_blank' href='http://www.summertidetours.com/' class='view'>
              View More Details
            </a>
          </div>
        </div>

        <div class='item'>
          <img src='https://brunswickvacationrentals.com/wp-content/uploads/2022/06/sport-721738_1280.jpg' alt='' title='' />

          <div class='itemText'>
            <h4>Carolina's Coastal Adventure Tours</h4>
            <a href='tel:9108801943' class='activ_phone'>
              <i class='fas fa-phone'></i>(910) 880-1943
            </a>
            <article>
              2000 Sommersett Rd SW.
              <br />
              Ocean Isle Beach, NC 28469
            </article>
            <a target='_blank' href='http://www.ccattours.com/' class='view'>
              View More Details
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
