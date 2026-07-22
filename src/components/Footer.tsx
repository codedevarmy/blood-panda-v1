import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandYoutube,
} from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'
import {
  ChevronRightCircleIcon,
  ChevronRightIcon,
  Globe2Icon,
  MailPlusIcon,
  PhoneCallIcon,
} from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardAction, CardContent, CardDescription } from './ui/card'

export default function Footer() {
  return (
    <footer
      className={
        'mx-auto max-w-(--breakpoint-xl) space-y-8 rounded-tl-lg rounded-tr-lg bg-blue-800 px-4 py-8'
      }
    >
      <div className={'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'}>
        <div className={'space-y-2'}>
          <div className={'flex flex-col items-start justify-center'}>
            <img src="/logo-idol.png" alt="logo" width={70} height={49} />
            <img src="/logo-txt.png" alt="logo" width={196} height={34} />
          </div>

          <p className={'text-background'}>
            <span className={'inline-block'}>Your Health, Our Priority</span>
            <span className={'inline-block'}>
              Smart diagnostics, delivered home.
            </span>
          </p>

          <Button type="button" className={'rounded-full'} asChild>
            <a
              href="https://wa.link/fvmq1j"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandWhatsapp className={'size-4'} />
              Chat on Whatsapp
            </a>
          </Button>

          <div className={'flex items-center gap-3'}>
            <IconBrandFacebook className={'size-5 stroke-accent'} />
            <IconBrandLinkedin className={'size-5 stroke-accent'} />
            <IconBrandYoutube className={'size-5 stroke-accent'} />
            <IconBrandInstagram className={'size-5 stroke-accent'} />
          </div>
        </div>
        <div className={'space-y-2'}>
          <h5 className={'font-semibold text-background'}>Quick Links</h5>
          <ul>
            <li>
              <Button
                variant={'link'}
                asChild
                size={'sm'}
                className={'px-0 text-background'}
              >
                <Link
                  to="/packages/$package"
                  params={{ package: 'diamond' }}
                  viewTransition
                >
                  <ChevronRightIcon className={'size-4'} />
                  Health Packages
                </Link>
              </Button>
            </li>
            <li>
              <Button
                variant={'link'}
                asChild
                size={'sm'}
                className={'px-0 text-background'}
              >
                <Link to="/tests" viewTransition>
                  <ChevronRightIcon className={'size-4'} />
                  Popular Tests
                </Link>
              </Button>
            </li>
            <li>
              <Button
                variant={'link'}
                asChild
                size={'sm'}
                className={'px-0 text-background'}
              >
                <Link to="/tests" viewTransition>
                  <ChevronRightIcon className={'size-4'} />
                  Health by Category
                </Link>
              </Button>
            </li>
            <li>
              <Button
                variant={'link'}
                asChild
                size={'sm'}
                className={'px-0 text-background'}
              >
                <Link to="/blogs" viewTransition>
                  <ChevronRightIcon className={'size-4'} />
                  Blogs
                </Link>
              </Button>
            </li>
            <li>
              <Button
                variant={'link'}
                asChild
                size={'sm'}
                className={'px-0 text-background'}
              >
                <Link to="/booking" viewTransition>
                  <ChevronRightIcon className={'size-4'} />
                  Book Home Collection
                </Link>
              </Button>
            </li>
          </ul>
        </div>
        <div className={'space-y-2'}>
          <h5 className={'font-semibold text-background'}>Contact</h5>
          <ul>
            <li>
              <Button
                variant={'link'}
                asChild
                size={'sm'}
                className={'px-0 text-background'}
              >
                <a href="tel:+918277842200">
                  <PhoneCallIcon className={'size-4'} />
                  +91 82778 42200
                </a>
              </Button>
            </li>
            {/* <li>
              <Button
                variant={'link'}
                asChild
                size={'sm'}
                className={'px-0 text-background'}
              >
                <a href="tel:+919999911111">
                  <PhoneCallIcon className={'size-4'} />
                  +91 99999 11111
                </a>
              </Button>
            </li> */}
            <li>
              <Button
                variant={'link'}
                asChild
                size={'sm'}
                className={'px-0 text-background'}
              >
                <a href="mailto:support@bloodpanda.com">
                  <MailPlusIcon className={'size-4'} />
                  support@bloodpanda.com
                </a>
              </Button>
            </li>
            <li>
              <Button
                variant={'link'}
                asChild
                size={'sm'}
                className={'px-0 text-background'}
              >
                <a href="mailto:info@bloodpanda.com">
                  <MailPlusIcon className={'size-4'} />
                  info@bloodpanda.com
                </a>
              </Button>
            </li>
            <li>
              <Button
                variant={'link'}
                asChild
                size={'sm'}
                className={'px-0 text-background'}
              >
                <a href="https://www.bloodpanda.com">
                  <Globe2Icon className={'size-4'} />
                  www.bloodpanda.com
                </a>
              </Button>
            </li>
          </ul>
        </div>
        <div className={'space-y-2'}>
          <h5 className={'font-semibold text-background'}>Book now</h5>
          <Card className={''}>
            <CardContent className={'space-y-2'}>
              <CardDescription className={'text-backgroundd'}>
                Book your home collection in 60 seconds on Whatsapp.
              </CardDescription>
              <CardAction>
                <Button type="button" className={'w-full'} asChild>
                  <a
                    href="https://wa.link/fvmq1j"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat Now <ChevronRightCircleIcon className={'size-4'} />
                  </a>
                </Button>
              </CardAction>
            </CardContent>
          </Card>
        </div>
      </div>
    </footer>
  )
}
