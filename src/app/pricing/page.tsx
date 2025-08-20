import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Pricing | We Gotcha Served LLC",
  description: "Transparent pricing for process serving services in Cortez, Colorado and the Four Corners region.",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/30 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Our <span className="text-primary">Pricing</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Transparent, competitive pricing for professional process serving in Cortez, Colorado and surrounding areas.
          </p>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground mb-6">
              We believe in clear, straightforward pricing with no hidden fees. Our rates are competitive and reflect the professional quality of our services.
            </p>
            <p className="text-muted-foreground">
              For the most accurate pricing for your specific requirements, please contact us directly. We're happy to provide a detailed quote based on your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Standard Service Package */}
            <Card className="border-primary/50 shadow-md relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-sm font-medium py-1 px-4 rounded-full">
                Most Popular
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Standard Service</CardTitle>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">$100</span>
                  <span className="text-muted-foreground"> / serve</span>
                </div>
                <CardDescription>For routine document delivery</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Service within Cortez city limits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Up to 3 service attempts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Proof of service documentation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>3-5 business day completion time</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Basic status updates</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Rush Service Package */}
            <Card className="border-border/40">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Rush Service</CardTitle>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">$200</span>
                  <span className="text-muted-foreground"> / serve</span>
                </div>
                <CardDescription>For time-sensitive documents</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Service within Montezuma County</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Priority handling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Same or next business day service</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Detailed proof of service</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Real-time status updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Evening and weekend availability</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Complex Service Package */}
            <Card className="border-border/40">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Advanced Service</CardTitle>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">$300</span>
                  <span className="text-muted-foreground"> / serve</span>
                </div>
                <CardDescription>For difficult-to-serve cases</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Service in the Four Corners region</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Extended service attempts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Basic skip tracing included</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Difficult location service</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Comprehensive documentation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Witness statement (if needed)</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Additional Services */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight mb-8 text-center">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-border/40">
                <CardHeader>
                  <CardTitle>Court Filing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We can file your documents with the court in various jurisdictions, saving you time and ensuring they are filed correctly.
                  </p>
                  <div className="flex justify-between items-center pt-2 border-t border-border">
                    <span className="font-medium">Local Cortez Court Filing</span>
                    <span className="font-bold">$75</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 mt-2 border-t border-border">
                    <span className="font-medium">Regional Court Filing</span>
                    <span className="font-bold">$95+</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/40">
                <CardHeader>
                  <CardTitle>Skip Tracing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    When an individual is difficult to locate, our skip tracing services can help find them for proper service.
                  </p>
                  <div className="flex justify-between items-center pt-2 border-t border-border">
                    <span className="font-medium">Basic Skip Trace</span>
                    <span className="font-bold">$75</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 mt-2 border-t border-border">
                    <span className="font-medium">Advanced Skip Trace</span>
                    <span className="font-bold">$125+</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/40">
                <CardHeader>
                  <CardTitle>Document Retrieval</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We can obtain documents from courts and public offices, saving you time and travel.
                  </p>
                  <div className="flex justify-between items-center pt-2 border-t border-border">
                    <span className="font-medium">Local Document Retrieval</span>
                    <span className="font-bold">$75+</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 mt-2 border-t border-border">
                    <span className="font-medium">Regional Document Retrieval</span>
                    <span className="font-bold">$125+</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/40">
                <CardHeader>
                  <CardTitle>Additional Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Other fees that may apply in certain situations.
                  </p>
                  <div className="flex justify-between items-center pt-2 border-t border-border">
                    <span className="font-medium">Mileage (outside Cortez)</span>
                    <span className="font-bold">$0.75/mile</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 mt-2 border-t border-border">
                    <span className="font-medium">Additional Service Attempts</span>
                    <span className="font-bold">$25 each</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 mt-2 border-t border-border">
                    <span className="font-medium">Notary Service</span>
                    <span className="font-bold">$15 per signature</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Notes Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-6 text-center">Important Notes</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Custom Quotes:</strong> For high-volume clients, specialized services, or services outside our standard coverage area, please contact us for a customized quote.
              </p>
              <p>
                <strong>Payment:</strong> We accept cash, checks, and all major credit cards. Payment is generally required before service is completed, though we offer flexible billing options for attorneys and law firms.
              </p>
              <p>
                <strong>Guarantee:</strong> If we're unable to complete service after multiple attempts, we'll provide detailed documentation of all attempts made. In some cases, a partial refund may be applicable.
              </p>
              <p>
                <strong>Pricing Updates:</strong> Rates are subject to change. The prices listed are current as of 2025. Please contact us for the most up-to-date pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Ready to Get Started?
          </h2>
          <p className="mx-auto max-w-2xl text-lg mb-8">
            Contact We Gotcha Served LLC today for a personalized quote based on your specific process serving needs
            in Cortez, Colorado and the surrounding Four Corners region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-primary/20 border-primary-foreground/20 text-primary-foreground hover:bg-primary/30">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
