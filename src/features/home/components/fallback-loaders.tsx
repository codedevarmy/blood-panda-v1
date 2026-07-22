import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import { Skeleton } from '#/components/ui/skeleton'

export function BaseLoader() {
  return (
    <CardContent
      className={
        'scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400/50 scrollbar-track-transparent flex gap-4 snap-x snap-mandatory scroll-smooth scroll-fade-x p-4 overflow-x-auto'
      }
    >
      {Array.from({ length: 12 }).map((_, loadingIdx) => (
        <Card className={'w-full min-w-sm snap-start'} key={loadingIdx}>
          <CardHeader>
            <CardTitle>
              <Skeleton className={'h-4 w-32'} />
            </CardTitle>
            <CardDescription>
              <Skeleton className={'h-3 w-24'} />
            </CardDescription>
          </CardHeader>
          <CardContent className={'space-y-2'}>
            <Skeleton className={'h-4 w-16'} />
            <Skeleton className={'h-5 w-20'} />
          </CardContent>
          <CardFooter>
            <Skeleton className={'h-8 w-full'} />
          </CardFooter>
        </Card>
      ))}
    </CardContent>
  )
}

export function FallbackTestimonials() {
  return <BaseLoader />
}
export function FallbackIndividials() {
  return <BaseLoader />
}
export function FallbackHealthCategories() {
  return <BaseLoader />
}
export function FallbackPopularCategory() {
  return <BaseLoader />
}
export function FallbackHealthPackages() {
  return <BaseLoader />
}
