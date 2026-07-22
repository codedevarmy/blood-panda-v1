import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import { healthPackages } from '#/constants'
import { cn, formatCurrency } from '#/lib/utils'
import { IconHandClick } from '@tabler/icons-react'
import {
  CheckIcon,
  ChevronRight,
  FlaskConicalIcon,
  StarIcon,
} from 'lucide-react'

import { A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import { Link } from '@tanstack/react-router'
import 'swiper/css'
import 'swiper/css/a11y'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

const isDev = import.meta.env.DEV

export default function PopularPackages() {
  function returnStyles(idx: number, path: 'title' | 'icon') {
    switch (path) {
      case 'title':
        return idx + 1 === 1
          ? 'text-slate-600'
          : idx + 1 === 2
            ? 'text-yellow-600'
            : idx + 1 === 3
              ? 'text-gray-500'
              : idx + 1 === 4
                ? 'text-slate-700'
                : idx + 1 === 5
                  ? 'text-destructive'
                  : ''

      case 'icon':
        return idx + 1 === 1
          ? 'bg-slate-400/50'
          : idx + 1 === 2
            ? 'bg-amber-400/50'
            : idx + 1 === 3
              ? 'bg-blue-400/50'
              : idx + 1 === 4
                ? 'bg-grey-400/50'
                : idx + 1 === 5
                  ? 'bg-destructive/50'
                  : ''

      default:
        break
    }
  }

  const doubleItems = [...healthPackages, ...healthPackages, ...healthPackages]

  // const tripleItemsWithUniqueIds = healthPackages.flatMap((item) => [
  //   { ...item, id: crypto.randomUUID() },
  //   { ...item, id: crypto.randomUUID() },
  //   { ...item, id: crypto.randomUUID() },
  // ])

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
              Popular Health Packages
            </h2>
          </CardTitle>
          <CardDescription className="row-start-2 sm:row-start-auto">
            <p className={'text-xs sm:text-sm md:text-base lg:text-lg'}>
              Preventive health checkups designed for every stage of life
            </p>
          </CardDescription>
          {/* col-start-2 row-span-2 row-start-1 self-start justify-self-end */}
          <CardAction
            className={
              'col-start-1 sm:col-start-2 row-start-3 sm:row-start-1 justify-self-start sm:justify-self-end mt-2 sm:mt-0'
            }
          >
            <Button variant={'link'} asChild>
              <Link
                to={'/packages/$package'}
                params={{ package: 'silver' }}
                viewTransition
              >
                View all Packages
                <ChevronRight className={'size-4'} />
              </Link>
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent
          className={'px-0'}
          // className={
          //   'grid grid-cols-1 gap-4 px-0 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
          // }
        >
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
                slidesPerView: 1.9,
              },
              '576': {
                spaceBetween: 25,
                slidesPerView: 2.1,
              },
              '640': {
                spaceBetween: 25,
                slidesPerView: 2.5,
              },
              '720': {
                spaceBetween: 25,
                slidesPerView: 3.2,
              },
              '1190': {
                spaceBetween: 25,
                slidesPerView: 4.1,
              },
              // '1236': {
              //   spaceBetween: 25,
              //   slidesPerView: 6.1,
              // },
              '1280': {
                spaceBetween: 25,
                slidesPerView: 4.5,
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
            {/* <div
              key={item.id}
              className={cn(
                'relative',
                item.isPopular ? 'rounded-lg ring-4 ring-blue-600' : '',
              )}
            ></div> */}
            {doubleItems.map((item, idx) => {
              return (
                <SwiperSlide
                  key={crypto.randomUUID()}
                  className={'py-4 relative'}
                >
                  <Card>
                    {item.isPopular ? (
                      <Badge
                        className={
                          'absolute -top-5 left-0 z-10 w-full rounded-t-lg rounded-b-none'
                        }
                      >
                        <StarIcon className={'size-3'} />
                        Most Popular
                      </Badge>
                    ) : null}

                    <CardHeader className={'relative'}>
                      <CardAction
                        className={cn(
                          'absolute -top-1 left-0 col-start-1 rounded-lg p-2',
                          returnStyles(idx, 'icon'),
                        )}
                      >
                        <FlaskConicalIcon className={'size-5'} />
                      </CardAction>
                      <CardTitle className={'ml-12 capitalize'}>
                        <h3
                          className={cn(
                            'text-xl font-semibold',
                            returnStyles(idx, 'title'),
                          )}
                        >
                          {item.planName}
                        </h3>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className={'list-inside space-y-2'}>
                        {item.features.map((feat) => {
                          return (
                            <li
                              key={crypto.randomUUID()}
                              className={'flex items-center gap-2'}
                            >
                              <CheckIcon
                                className={'size-4 stroke-destructive'}
                              />
                              {feat}
                            </li>
                          )
                        })}
                      </ul>
                    </CardContent>
                    <CardFooter
                      className={
                        'relative flex items-center justify-between px-2 py-2'
                      }
                    >
                      <Badge
                        variant={'ghost'}
                        className={'absolute top-0 left-0 line-through'}
                      >
                        {formatCurrency(item.originalPrice)}
                      </Badge>
                      <h4 className={'mt-2 text-lg font-semibold'}>
                        {formatCurrency(item.discountedPrice)}
                      </h4>

                      <Button
                        type="button"
                        size={'sm'}
                        variant={item.isPopular ? 'default' : 'outline'}
                      >
                        Book <IconHandClick className={'size-4'} />
                      </Button>
                    </CardFooter>
                  </Card>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </CardContent>
      </Card>
    </section>
  )
}
