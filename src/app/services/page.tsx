import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, MapPin, Search, Clock, BarChart, Briefcase } from "lucide-react";

export const metadata = {
  title: "Our Services | We Gotcha Served LLC",
  description: "Professional process serving services including document delivery, court filings, skip tracing, and more.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/30 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Professional process serving solutions for attorneys, law firms, and individuals.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Comprehensive Process Serving Solutions</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We offer a complete range of professional services to meet all your legal document delivery needs
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* Document Delivery */}
            <Card className="border-border/40" id="document-delivery">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 w-12 h-12 rounded-md bg-primary/10">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Document Delivery</CardTitle>
                    <CardDescription>Professional service of legal documents</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Our process servers specialize in the professional delivery of all types of legal documents, including:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Summons and Complaints</li>
                  <li>Subpoenas (Civil and Criminal)</li>
                  <li>Orders to Show Cause</li>
                  <li>Eviction Notices</li>
                  <li>Temporary Restraining Orders</li>
                  <li>Family Court Documents</li>
                  <li>Civil Court Documents</li>
                  <li>Small Claims Documents</li>
                </ul>
                <p className="text-muted-foreground">
                  All services are completed in accordance with state and federal regulations, ensuring legal compliance and admissibility in court. Each serve is documented with a detailed affidavit of service or proof of service as required by the jurisdiction.
                </p>
              </CardContent>
            </Card>

            {/* Court Filings */}
            <Card className="border-border/40" id="court-filings">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 w-12 h-12 rounded-md bg-primary/10">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Court Filings</CardTitle>
                    <CardDescription>Efficient filing of documents with courts</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Save time and ensure proper filing with our court filing services. We handle:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Filing of all types of legal documents with the court</li>
                  <li>E-filing in courts that accept electronic submissions</li>
                  <li>Confirmation of filing and receipt of filed documents</li>
                  <li>Filing of time-sensitive documents</li>
                  <li>Filing across multiple jurisdictions</li>
                </ul>
                <p className="text-muted-foreground">
                  Our team is familiar with the filing requirements of local, state, and federal courts, ensuring your documents are properly submitted and accepted.
                </p>
              </CardContent>
            </Card>

            {/* Skip Tracing */}
            <Card className="border-border/40" id="skip-tracing">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 w-12 h-12 rounded-md bg-primary/10">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Skip Tracing</CardTitle>
                    <CardDescription>Locating hard-to-find individuals</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  When individuals are difficult to locate, our skip tracing services help find them for legal document service:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Comprehensive database searches</li>
                  <li>Public records research</li>
                  <li>Social media investigation</li>
                  <li>Employment verification</li>
                  <li>Address history analysis</li>
                  <li>Asset searches</li>
                </ul>
                <p className="text-muted-foreground">
                  Our skip tracing services have successfully located individuals that other process servers couldn't find, making us the go-to choice for difficult serves.
                </p>
              </CardContent>
            </Card>

            {/* Document Retrieval */}
            <Card className="border-border/40" id="document-retrieval">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 w-12 h-12 rounded-md bg-primary/10">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Document Retrieval</CardTitle>
                    <CardDescription>Obtaining documents from courts and public offices</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We retrieve documents from courts and public offices, saving you time and effort:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Court records and filings</li>
                  <li>Case documents</li>
                  <li>Judgments and liens</li>
                  <li>Property records</li>
                  <li>Business filings</li>
                  <li>Marriage and divorce records</li>
                </ul>
                <p className="text-muted-foreground">
                  Our document retrieval service includes obtaining, organizing, and delivering the documents you need in a timely manner.
                </p>
              </CardContent>
            </Card>

            {/* Rush Service */}
            <Card className="border-border/40" id="rush-service">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 w-12 h-12 rounded-md bg-primary/10">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Rush Service</CardTitle>
                    <CardDescription>Expedited service for time-sensitive documents</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  When time is critical, our rush service ensures your documents are served promptly:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Same-day service (when requested before noon)</li>
                  <li>Next-day service</li>
                  <li>Weekend and holiday service</li>
                  <li>After-hours service</li>
                  <li>Priority handling</li>
                </ul>
                <p className="text-muted-foreground">
                  We understand that legal deadlines can be tight, and our rush service is designed to meet your urgent needs without compromising on quality or compliance.
                </p>
              </CardContent>
            </Card>

            {/* Status Reports */}
            <Card className="border-border/40" id="status-reports">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 w-12 h-12 rounded-md bg-primary/10">
                    <BarChart className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Status Reports & Documentation</CardTitle>
                    <CardDescription>Detailed reporting on service status and completion</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Stay informed with our comprehensive reporting and documentation:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Real-time status updates</li>
                  <li>Detailed service attempts log</li>
                  <li>Legally compliant affidavits of service</li>
                  <li>Photographic evidence (when appropriate)</li>
                  <li>GPS verification of service location</li>
                  <li>Digital and physical copies of all documentation</li>
                </ul>
                <p className="text-muted-foreground">
                  Our thorough documentation ensures you have all the evidence needed for court proceedings, with clear, accurate records of every service attempt and completion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Common questions about our process serving services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What information do I need to provide for document service?</AccordionTrigger>
                <AccordionContent>
                  To effectively serve your documents, we need the following information: the full name of the person to be served, their last known address, physical description, place of employment (if known), and any other information that might help locate them. Additionally, we need the documents to be served and any specific instructions regarding the service.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How quickly can you serve my documents?</AccordionTrigger>
                <AccordionContent>
                  Our standard service typically completes service within 3-5 business days. For time-sensitive situations, we offer rush services that can complete service on the same or next business day, depending on when the request is received and the location of the service.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>What happens if you cannot locate the person to be served?</AccordionTrigger>
                <AccordionContent>
                  If we are unable to locate the person after multiple attempts, we will provide detailed documentation of all attempts made and any information gathered during the process. We can then offer our skip tracing services to help locate the individual, or discuss alternative service methods that may be available in your jurisdiction, such as service by publication or service at place of employment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Are your affidavits of service valid in court?</AccordionTrigger>
                <AccordionContent>
                  Yes, all our affidavits of service are prepared in compliance with state and federal requirements and are valid for court proceedings. Our process servers are trained to properly document all aspects of service to ensure the affidavits will withstand legal scrutiny.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Do you serve documents in other states?</AccordionTrigger>
                <AccordionContent>
                  Yes, through our network of partnered professional process servers, we can coordinate service in all 50 states. We ensure that all services comply with the specific requirements of each state's laws regarding process service.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Need Professional Process Serving?
          </h2>
          <p className="mx-auto max-w-2xl text-lg mb-8">
            Contact We Gotcha Served LLC today to discuss your specific requirements and how
            we can assist with your process serving needs.
          </p>
          <Button asChild size="lg" variant="secondary" className="shadow-lg">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
