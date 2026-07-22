import { Button } from '#/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import { healthCategories } from '#/constants'
import { IconHandClick } from '@tabler/icons-react'
import { ScrollTextIcon } from 'lucide-react'

import { A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import { Link } from '@tanstack/react-router'
import 'swiper/css'
import 'swiper/css/a11y'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

const isDev = import.meta.env.DEV

export default function HealthCategory() {
  const doubleItems = [
    ...healthCategories,
    ...healthCategories,
    ...healthCategories,
  ]

  return (
    <section>
      <Card
        className={'rounded-none border-0 bg-transparent shadow-none ring-0'}
      >
        <CardHeader className={'px-0'}>
          <CardTitle>
            <h2
              className={
                'text:xl md:text-2xl lg:text-3xl xl:text-4xl font-medium lg:font-semibold'
              }
            >
              Browse Tests by Health Category
            </h2>
          </CardTitle>
          <CardDescription className="row-start-2 sm:row-start-auto">
            <p className={'text-xs sm:text-sm md:text-base lg:text-lg'}>
              Find the right diagnostic tests based on your health concern.
            </p>
          </CardDescription>
          <CardAction
            className={
              'col-start-1 sm:col-start-2 row-start-3 sm:row-start-1 justify-self-start sm:justify-self-end mt-2 sm:mt-0 space-x-2'
            }
          >
            <Button variant={'default'} asChild>
              <Link to="/booking" viewTransition>
                Book Now
                <IconHandClick className={'size-4'} />
              </Link>
            </Button>
            <Button variant={'outline'} asChild>
              <Link
                to="/packages/mini-packages/$miniPackage"
                params={{ miniPackage: 'renal-pack' }}
                viewTransition
              >
                View All
                <ScrollTextIcon className={'size-4'} />
              </Link>
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent className={'px-0'}>
          <Swiper
            modules={[A11y, Autoplay]}
            grabCursor={true}
            navigation={true}
            a11y={{ enabled: true }}
            loop={true}
            rewind={true}
            autoplay={
              isDev ? undefined : { delay: 3000, pauseOnMouseEnter: true }
            }
            spaceBetween={20}
            slidesPerView={1.3}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              '320': {
                spaceBetween: 25,
                slidesPerView: 1.5,
              },
              '480': {
                spaceBetween: 25,
                slidesPerView: 2.1,
              },
              '576': {
                spaceBetween: 25,
                slidesPerView: 2.8,
              },
              '640': {
                spaceBetween: 25,
                slidesPerView: 3.1,
              },
              '720': {
                spaceBetween: 25,
                slidesPerView: 3.5,
              },
              '1190': {
                spaceBetween: 25,
                slidesPerView: 5.1,
              },
              // '1236': {
              //   spaceBetween: 25,
              //   slidesPerView: 6.1,
              // },
              '1280': {
                spaceBetween: 25,
                slidesPerView: 6.2,
              },
              // '1366': {
              //   spaceBetween: 25,
              //   slidesPerView: 6.5,
              // },
              // '1440': {
              //   spaceBetween: 25,
              //   slidesPerView: 6.5,
              // },
              // '1536': {
              //   spaceBetween: 25,
              //   slidesPerView: 6.5,
              // },
            }}
          >
            {doubleItems.map((item) => {
              return (
                <SwiperSlide key={crypto.randomUUID()} className={''}>
                  <div className={'space-y-2 text-center pt-4'}>
                    <Card
                      className={
                        'border-0 bg-destructive/10 shadow-md ring-2 ring-transparent hover:ring-destructive/50 rounded-full size-48 mx-auto'
                      }
                    >
                      <CardContent className={'px-0 w-full h-full'}>
                        <img
                          src={item.img}
                          alt={item.title}
                          width={'100%'}
                          height={'100%'}
                          className={
                            'aspect-square h-full w-full object-contain p-2'
                          }
                        />
                      </CardContent>
                    </Card>
                    <CardDescription>
                      <p className={'text-base font-semibold capitalize'}>
                        {item.title}
                      </p>
                    </CardDescription>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </CardContent>
      </Card>
    </section>
  )
}
