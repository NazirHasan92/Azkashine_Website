import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import services from '@/images/services.png'
import imageProducts from '@/images/products.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { RootLayout } from '@/components/RootLayout'


/*Digital Platforms & Analytics
We architect and develop End-to-End Custom Web and Mobile applications that precisely address unique business requirements. Our tailored digital platforms serve as a pivotal strategic asset, foundational to your enterprise's transformative journey.
 
Our advanced analytics framework transforms raw & complex data into a strategic asset by synthesizing information from diverse sources. We empower enterprises with sophisticated, real-time dashboards and actionable business intelligence, enabling a culture of data-driven decisions that fuel innovation and sustainable growth.

*/

function Section({ title, image, children }) {
  return (
    <Container className="group/section">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Digital Platforms & Analytics" image={{ src: imageProducts }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We architect and develop End-to-End Custom Web and Mobile applications that precisely address unique business requirements.{' '}
          Our tailored digital platforms serve as a pivotal strategic asset, foundational to your enterprise's transformative journey.
 
        </p>
        <p>
          Our advanced analytics framework transforms raw & complex data into a strategic asset by synthesizing information from diverse sources.
        </p>
        <p>
          We empower enterprises with sophisticated, real-time dashboards and actionable business intelligence, enabling a culture of data-driven decisions that fuel innovation and sustainable growth.
        </p>
      </div>

    </Section>
  )
}


export const metadata = {
  title: '',
  description:
    'Our Products',
}

export default function Process() {
  return (
    <RootLayout>
      <PageIntro eyebrow="" title="Our Products">
        <p className='mt-6 max-w-3xl text-neutral-600'>
            At <strong className="font-semibold text-neutral-950"> AzkaShine Software & Services Pvt Ltd </strong>, we are dedicated to setting new benchmarks of efficiency and leading the way in innovation across various industries. Our Products wing, meticulously engineered to enhance business efficiency, scalability, and data-driven decision-making, exemplifies our commitment to technological excellence.
        </p>

        <p className='mt-6 max-w-3xl text-neutral-600'>
            Our comprehensive suite of solutions ensures seamless business operations across a diverse range of sectors.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24  sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
      </div>

      <ContactSection />
    </RootLayout>
  )
}
