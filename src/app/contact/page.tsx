"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setIsSubmitting(true);
    // We just need to set the submitting state - the actual form will be handled by FormSubmit.co
    // The thank you message is shown after the user returns from FormSubmit.co
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/30 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Get in touch with We Gotcha Served LLC for all your process serving needs.
          </p>
        </div>
      </section>

      {/* Contact Info and Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Get In Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                Our team is here to answer any questions you have about our process serving services.
                Fill out the form or contact us directly using the information below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-2 rounded-md bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:9705160322" className="hover:text-primary">(970) 516-0322</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-2 rounded-md bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:Charlie@WeGotchaServed.com" className="hover:text-primary">Charlie@WeGotchaServed.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-2 rounded-md bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-muted-foreground">
                      313 N. Chestnut St.<br />
                      Cortez, CO 81321<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-2 rounded-md bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                    <p className="text-sm mt-1 text-muted-foreground">
                      *24/7 service available for urgent matters
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="mb-4 p-3 rounded-full bg-primary/10 inline-flex">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">
                      Your message has been sent successfully. <br />
                      We'll get back to you as soon as possible.
                    </p>
                    <Button
                      className="mt-6"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form
                    action="https://formsubmit.co/charlie@wegotchaserved.com"
                    method="POST"
                    encType="multipart/form-data"
                    className="space-y-4"
                    onSubmit={handleFormSubmit}
                  >
                    {/* FormSubmit Configuration */}
                    <input
                      type="hidden"
                      name="_next"
                      value="https://wegotchaserved.com/contact.html"
                    />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_subject" value="New Contact Form Message" />
                    <input type="text" name="_honey" style={{ display: 'none' }} />

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Your phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="How can we help you?"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your requirements..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
