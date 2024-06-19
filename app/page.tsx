import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <div className='flex gap-10'>
          <div className='flex-1'>
            <h1 className='text-3xl font-bold'>Trending courses</h1>

            <ul className='mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              <li>
                <Link href='/courses/1'>
                  <Card>
                    <CardHeader>
                      <CardTitle>Course 1</CardTitle>
                      <CardDescription>Course 1 description.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Course 1 content.</p>
                    </CardContent>
                    <CardFooter></CardFooter>
                  </Card>
                </Link>
              </li>
              <li>
                <Link href='/courses/2'>
                  <Card>
                    <CardHeader>
                      <CardTitle>Course 2</CardTitle>
                      <CardDescription>Course 2 description.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Course 2 content.</p>
                    </CardContent>
                    <CardFooter></CardFooter>
                  </Card>
                </Link>
              </li>
            </ul>
          </div>

          <div className='flex flex-col gap-10'>
            <Card className='w-[350px]'>
              <CardHeader>
                <CardTitle>Top Creators</CardTitle>
                <CardDescription>Top creators this month.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul>
                  <li>Creator number 1</li>
                  <li>Creator number 2</li>
                </ul>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>

            <Card className='w-[350px]'>
              <CardHeader>
                <CardTitle>Top Students</CardTitle>
                <CardDescription>Top students this month.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul>
                  <li>Student number 1</li>
                  <li>Student number 2</li>
                </ul>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
