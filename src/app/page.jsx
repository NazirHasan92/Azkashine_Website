import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Button } from '@/components/Button'

import alphaPower from '@/images/clients/alpha_power.png'
import csg from '@/images/clients/csg.png'
import isms from '@/images/clients/isms.png'
import openInsights from '@/images/clients/open_insights.png'
import prowess from '@/images/clients/prowess.png'
import sasken from '@/images/clients/sasken.png'
import unionsys from '@/images/clients/unionsys.png'

import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'


const clients = [
  ['Alpha Power', alphaPower],
  ['CSG', csg],
  ['isms', isms],
  ['Open Insights Technology', openInsights],
  ['Prowess', prowess],
  ['Sasken', sasken],
  ['UNIONSYS TECHNOLOGIES', unionsys],
]

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 6" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 3 18 .5v2H0v1h18v2L24 3Z"
      />
    </svg>
  )
}

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-200 py-20 sm:mt-32 sm:py-32 lg:mt-58">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h1 className="font-display text-xl font-medium tracking-tight text-black text-balance  sm:text-5xl">
            Our Global Partners
          </h1>
          <div className="h-px flex-auto bg-black" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4 rounded-4xl"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized  />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow=""
        title="Our Services"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe in efficiency and maximizing our resources to provide the best value to our clients. 
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Network & Wireless">
              We deliver exceptional services in Network and Wireless Technologies, focusing on cutting-edge design, implementation, and optimization of complex network infrastructures
                <Link
                  href={""}
                  className="mt-6 flex gap-x-3 text-base text-neutral-950 transition hover:text-neutral-700"
                  aria-label={`Read more`}
                >
                  Read more
                  <ArrowIcon className="w-6 flex-none fill-current" />
                  <span className="absolute inset-0" />
                </Link>

            </ListItem>

            <ListItem title="DevOps">
              We excel in delivering state-of-the-art DevOps and Test Automation services designed to enhance agility and streamline software delivery pipelines.
                <Link
                  href={""}
                  className="mt-6 flex gap-x-3 text-base text-neutral-950 transition hover:text-neutral-700"
                  aria-label={`Read more`}
                >
                  Read more
                  <ArrowIcon className="w-6 flex-none fill-current" />
                  <span className="absolute inset-0" />
                </Link>
            </ListItem>

            <ListItem title="Artificial Intelligence">
              We specialize in pioneering AI and ML solutions that revolutionize business intelligence and operational efficiency.
                <Link
                  href={""}
                  className="mt-6 flex gap-x-3 text-base text-neutral-950 transition hover:text-neutral-700"
                  aria-label={`Read more`}
                >
                  Read more
                  <ArrowIcon className="w-6 flex-none fill-current" />
                  <span className="absolute inset-0" />
                </Link>
            </ListItem>

            <ListItem title="SAP & Enterprise">
              We provide cutting-edge SAP and Enterprise Data Management solutions, optimizing business processes and data governance.
                <Link
                  href={""}
                  className="mt-6 flex gap-x-3 text-base text-neutral-950 transition hover:text-neutral-700"
                  aria-label={`Read more`}
                >
                  Read more
                  <ArrowIcon className="w-6 flex-none fill-current" />
                  <span className="absolute inset-0" />
                </Link>
            </ListItem>

             <ListItem title="Placement Services (B2B)">
              We offer premier Placement Services, connecting businesses with top-tier talent through our extensive network and rigorous selection processes.
                <Link
                  href={""}
                  className="mt-6 flex gap-x-3 text-base text-neutral-950 transition hover:text-neutral-700"
                  aria-label={`Read more`}
                >
                  Read more
                  <ArrowIcon className="w-6 flex-none fill-current" />
                  <span className="absolute inset-0" />
                </Link>
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-5xl">
          <h1 className="font-display text-6xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            Transformation Admired 
          </h1>

          <h1 className="mt-6 font-display text-base font-semibold text-neutral-950 text-xl">
            Unlock potential through software and services tailored for your success.
          </h1>

          <p className="mt-6 text-neutral-600">
           We drive technology-led transformation, delivering future-ready solutions that empower enterprises to scale, innovate, and thrive in an evolving digital landscape.
          </p>

          <p>
            <Button
              href={"/about"}
              aria-label={`Read more`}
              className="mt-8"
            >
              Read more
            </Button>
          </p>

        </FadeIn>
      </Container>

        {/* <CaseStudies caseStudies={caseStudies} /> */}



      <Clients />


      <Services />

      <ContactSection />
    </RootLayout>
  )
}
