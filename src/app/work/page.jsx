import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'


import { formatDate } from '@/lib/formatDate'
import { loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

function CaseStudies({ caseStudies }) {
  console.log(caseStudies)
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Services
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy.client}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <Link href={caseStudy.href}>{caseStudy.title}</Link>
                  </p>
                  <div className="mt-8 flex">
                    <Button
                      href={caseStudy.href}
                      aria-label={`Read more: ${caseStudy.client}`}
                    >
                      Read more
                    </Button>
                  </div>
                  {caseStudy.testimonial && (
                    <Blockquote
                      author={caseStudy.testimonial.author}
                      className="mt-12"
                    >
                      {caseStudy.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}




export const metadata = {
  title: '',
  description:
    'Our Services',
}

export default async function Work() {
  let caseStudies = await loadCaseStudies()

  return (
    <RootLayout>
      <PageIntro
        eyebrow=""
        title="Our Services"
      >
        <p>
          <em><b> AzkaShine Software & Services Pvt Ltd </b></em> epitomizes technological excellence with a comprehensive suite of services. We excel in Network & Wireless Technologies, ensuring seamless connectivity and robust security. Our DevOps & Test Automation services streamline software development, enhancing speed and reliability. Through AI & ML solutions, we convert data into actionable insights, driving innovation. We optimize business processes with cutting-edge SAP & Enterprise Data Management solutions, and offer sophisticated VLSI & Embedded Systems design for high-efficiency hardware and software. Our Placement Services connect businesses with top-tier talent, and our Licensed Software Vending & IP Registrations safeguard intellectual property while enhancing usability. Together, these services empower clients to thrive in the digital age.
        </p>
      </PageIntro>

      <CaseStudies caseStudies={caseStudies} />

      <ContactSection />
    </RootLayout>
  )
}
