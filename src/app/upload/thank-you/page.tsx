"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import ThankYouClient from "./ThankYouClient";

export default function ThankYouPage() {
  return (
    <section className="py-20 md:py-32">
      <ThankYouClient />

      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-8">
          <div className="rounded-full bg-primary/10 p-3">
            <CheckCircle className="h-12 w-12 text-primary" />
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
          Thank You!
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground mb-8">
          Your documents have been successfully submitted to Charlie@WeGotchaServed.com
        </p>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-12">
          Our team will review your submission and contact you within 1 business day.
          You should receive a confirmation email shortly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">Return to Home</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
