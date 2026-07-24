import { Button } from '#/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import { blogs } from '#/constants'
import { formattedDate } from '#/lib/utils'
import { ArrowRightIcon } from 'lucide-react'

export default function Blogs() {
  // const d = new Date();
  // let setNew = d.setDate(10);
  // setNew = d.setMonth(5);
  // setNew = d.setFullYear(2026);
  // console.log('setted', setNew);
  // const formatted = new Intl.DateTimeFormat('en-In', {
  //   dateStyle: 'medium',
  // }).format(setNew);

  return (
    <section>
      <Card
        className={'rounded-none border-0 bg-transparent shadow-none ring-0'}
      >
        <CardHeader className={'px-0'}>
          <CardTitle>
            <h3
              className={
                'text-center text-base md:text-xl lg:text-2xl xl:text-3xl'
              }
            >
              Health Tips & Blogs
            </h3>
          </CardTitle>
          <CardDescription>
            <p className={'text-center'}>
              Stay informed with our latest health articles
            </p>
          </CardDescription>
        </CardHeader>

        <CardContent
          className={'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'}
        >
          {blogs.map((blog) => {
            return (
              <Card key={blog.id} className={'pt-0 pb-2 gap-2'}>
                <CardContent className={'scroll-fade-b px-0'}>
                  <img
                    src={blog.cover}
                    alt={blog.title}
                    width={'100%'}
                    height={'100%'}
                    className={'h-full w-full'}
                  />
                </CardContent>
                <CardHeader>
                  <CardDescription>{formattedDate(blog.date)}</CardDescription>
                  <CardTitle>
                    <h4>{blog.title}</h4>
                  </CardTitle>
                </CardHeader>
                <CardFooter className={'mt-auto'}>
                  <Button type="button" variant={'link'}>
                    Read more <ArrowRightIcon className={'size-4'} />
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </CardContent>
      </Card>
    </section>
  )
}
