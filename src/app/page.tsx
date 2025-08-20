import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, MapPin, FileText, Search, Clock, BarChart } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
        <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">

          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            <span className="text-primary">Professional</span> Process Serving <br />in Cortez, Colorado
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            We Gotcha Served LLC delivers legal documents efficiently and reliably throughout Cortez and the Four Corners region,
            with extensive experience serving attorneys, law firms, and individuals.
          </p>
          <div className="mx-auto mt-10 flex max-w-xl flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="shadow-lg">
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>Fast Turnaround</span>
            </div>
            <div className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>Court Compliant</span>
            </div>
            <div className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>24/7 Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive process serving solutions tailored to your legal needs in Cortez and surrounding areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border/40 transition-all hover:shadow-md">
              <CardHeader>
                <div className="p-2 w-12 h-12 rounded-md bg-primary/10 mb-2">
                  <FileText className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <CardTitle>Document Delivery</CardTitle>
                <CardDescription>
                  Professional service of summons, complaints, subpoenas, and other legal documents.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href="/services#document-delivery">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-border/40 transition-all hover:shadow-md">
              <CardHeader>
                <div className="p-2 w-12 h-12 rounded-md bg-primary/10 mb-2">
                  <MapPin className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <CardTitle>Court Filings</CardTitle>
                <CardDescription>
                  We handle the filing of legal documents with courts in multiple jurisdictions.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href="/services#court-filings">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-border/40 transition-all hover:shadow-md">
              <CardHeader>
                <div className="p-2 w-12 h-12 rounded-md bg-primary/10 mb-2">
                  <Search className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <CardTitle>Skip Tracing</CardTitle>
                <CardDescription>
                  We locate hard-to-find individuals for service using advanced search techniques.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href="/services#skip-tracing">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-border/40 transition-all hover:shadow-md">
              <CardHeader>
                <div className="p-2 w-12 h-12 rounded-md bg-primary/10 mb-2">
                  <FileText className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <CardTitle>Document Retrieval</CardTitle>
                <CardDescription>
                  We retrieve court documents, records, and filings on your behalf.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href="/services#document-retrieval">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-border/40 transition-all hover:shadow-md">
              <CardHeader>
                <div className="p-2 w-12 h-12 rounded-md bg-primary/10 mb-2">
                  <Clock className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <CardTitle>Rush Service</CardTitle>
                <CardDescription>
                  Expedited service options for time-sensitive legal documents.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href="/services#rush-service">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-border/40 transition-all hover:shadow-md">
              <CardHeader>
                <div className="p-2 w-12 h-12 rounded-md bg-primary/10 mb-2">
                  <BarChart className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <CardTitle>Status Reports</CardTitle>
                <CardDescription>
                  Detailed service status reports and proof of service documentation.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href="/services#status-reports">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">Why choose We Gotcha Served?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've built our reputation on reliability, professionalism, and outstanding customer service
            </p>
          </div>

          <Tabs defaultValue="experience" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="reliability">Reliability</TabsTrigger>
              <TabsTrigger value="coverage">Local Knowledge</TabsTrigger>
            </TabsList>
            <TabsContent value="experience" className="mt-6 space-y-4">
              <h3 className="text-xl font-bold">Years of Industry Experience</h3>
              <p>
                With years of experience in the process serving industry, our team brings extensive knowledge and professionalism to every assignment. We understand the legal requirements and nuances of proper service in Colorado.
              </p>
              <ul className="grid gap-2 mt-4">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span>Served thousands of legal documents across the Four Corners region</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span>Familiar with Colorado state and local service requirements</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span>Trained in conflict resolution and difficult service situations</span>
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="reliability" className="mt-6 space-y-4">
              <h3 className="text-xl font-bold">Consistent and Dependable Service</h3>
              <p>
                We understand that timely service is critical to your case. Our team is committed to prompt, professional service with clear communication throughout the process.
              </p>
              <ul className="grid gap-2 mt-4">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span>Real-time updates on service attempts and completions</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span>Available 24/7 for urgent service requests</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span>Thorough documentation and legally compliant affidavits</span>
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="coverage" className="mt-6 space-y-4">
              <h3 className="text-xl font-bold">Extensive Local Knowledge</h3>
              <p>
                As Cortez locals, we have in-depth knowledge of the area which allows us to efficiently navigate the region and complete services quickly and effectively.
              </p>
              <ul className="grid gap-2 mt-4">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span>Deep understanding of Cortez neighborhoods and communities</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span>Familiar with the Four Corners region and rural locations</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span>Specialized in serving difficult-to-reach locations in Montezuma County</span>
                </li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Need Professional Process Serving in Cortez?
          </h2>
          <p className="mx-auto max-w-2xl text-lg mb-8">
            Contact We Gotcha Served LLC today for reliable, professional document delivery services in Cortez, CO and the surrounding areas.
            We're ready to assist with all your process serving needs.
          </p>
          <Button asChild size="lg" variant="secondary" className="shadow-lg">
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
