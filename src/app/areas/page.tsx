import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, MapPin } from "lucide-react";

export const metadata = {
  title: "Service Area | We Gotcha Served LLC",
  description: "We Gotcha Served LLC provides professional process serving services in Cortez, Colorado and surrounding areas.",
};

export default function ServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/30 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Service <span className="text-primary">Area</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            We Gotcha Served LLC proudly serves Cortez, Colorado and surrounding communities.
          </p>
        </div>
      </section>

      {/* Primary Service Area */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Serving Cortez, Colorado
              </h2>
              <p className="text-muted-foreground mb-4">
                We Gotcha Served LLC is your trusted local process server in Cortez, Colorado. Conveniently located in downtown Cortez, we provide professional, reliable, and legally compliant process serving services throughout the city and nearby areas.
              </p>
              <p className="text-muted-foreground mb-4">
                Our team has extensive knowledge of the local area, which allows us to efficiently deliver legal documents even in remote or difficult-to-reach locations.
              </p>
              <p className="text-muted-foreground mb-6">
                As a locally owned business, we take pride in serving our community with integrity and professionalism.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Check className="mr-3 h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span>Fast, reliable service throughout Cortez</span>
                </div>
                <div className="flex items-start">
                  <Check className="mr-3 h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span>Familiar with local neighborhoods and businesses</span>
                </div>
                <div className="flex items-start">
                  <Check className="mr-3 h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span>Rapid response times in our primary service area</span>
                </div>
              </div>
            </div>
            <div className="bg-white h-[450px] rounded-lg overflow-hidden relative border border-border/40 shadow-sm">
              <picture>
                <img
                  src="/images/maps/service_area.png"
                  alt="Map of Cortez area including Dolores, Mancos, and Mesa Verde National Park"
                  className="w-full h-full object-cover"
                  width="600"
                  height="450"
                  loading="lazy"
                  decoding="async"
                />
              </picture>

              <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground shadow-sm border border-border/40">
                Service Area: Cortez, Dolores, Mancos and surrounding communities
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Surrounding Areas */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Communities We Serve</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              In addition to Cortez, we also serve these nearby communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border/40">
              <CardHeader>
                <CardTitle>Montezuma County</CardTitle>
                <CardDescription>Areas in and around Montezuma County</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Dolores</li>
                  <li>Mancos</li>
                  <li>Towaoc</li>
                  <li>Mesa Verde National Park</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/40">
              <CardHeader>
                <CardTitle>Dolores County</CardTitle>
                <CardDescription>Service to Dolores County areas</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Dove Creek</li>
                  <li>Rico</li>
                  <li>Surrounding rural areas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/40">
              <CardHeader>
                <CardTitle>La Plata County</CardTitle>
                <CardDescription>Service to La Plata County areas</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Durango</li>
                  <li>Bayfield</li>
                  <li>Ignacio</li>
                  <li>Hesperus</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/40">
              <CardHeader>
                <CardTitle>San Miguel County</CardTitle>
                <CardDescription>Service to San Miguel County areas</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Telluride</li>
                  <li>Norwood</li>
                  <li>Placerville</li>
                  <li>Surrounding communities</li>
                </ul>
              </CardContent>
            </Card>



            <Card className="border-border/40">
              <CardHeader>
                <CardTitle>New Mexico</CardTitle>
                <CardDescription>Service to northwestern New Mexico</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Farmington</li>
                  <li>Aztec</li>
                  <li>Shiprock</li>
                  <li>Surrounding communities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Radius Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Our Service Radius
            </h2>
            <p className="text-muted-foreground mb-6">
              We typically provide service within a 50-mile radius of Cortez, Colorado. However, we understand that sometimes you need service outside of this area. For locations beyond our standard radius, please contact us to discuss your specific needs.
            </p>
            <p className="text-muted-foreground mb-8">
              We're committed to finding solutions for all your process serving needs, whether in our immediate service area or beyond.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us To Discuss Your Needs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Need Process Serving in Cortez or Surrounding Communities?
          </h2>
          <p className="mx-auto max-w-2xl text-lg mb-8">
            Contact We Gotcha Served LLC today for reliable, professional document delivery services in Cortez, Colorado and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get a Quote</Link>
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
