"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Mail, AlertCircle } from "lucide-react";

export default function UploadPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/30 py-10 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl mb-4 md:mb-6">
            Upload Your <span className="text-primary">Documents</span>
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-base md:text-lg text-muted-foreground">
            Send your legal documents securely to our team for process serving. All uploads are sent directly to our secure email.
          </p>
        </div>
      </section>

      {/* Upload Form Section */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-border/40">
              <CardHeader className="pb-4 md:pb-6">
                <CardTitle className="text-xl md:text-2xl">Document Upload Form</CardTitle>
                <CardDescription className="text-sm md:text-base">

                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  action="https://formsubmit.co/charlie@wegotchaserved.com"
                  method="POST"
                  encType="multipart/form-data"
                  className="space-y-5 md:space-y-6"
                  onSubmit={() => setIsSubmitting(true)}
                >
                  {/* FormSubmit Configuration */}
                  <input
                    type="hidden"
                    name="_next"
                    value="https://wegotchaserved.com/upload/thank-you.html"
                  />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="New Document Upload" />
                  <input type="text" name="_honey" style={{ display: 'none' }} />

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm md:text-base">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="h-11 md:h-10 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm md:text-base">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="johndoe@example.com"
                        required
                        className="h-11 md:h-10 text-base"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm md:text-base">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      required
                      className="h-11 md:h-10 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm md:text-base">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please provide information about the documents"
                      rows={3}
                      className="min-h-[80px] text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="attachment" className="block text-sm md:text-base">
                      Upload Documents
                    </Label>
                    <div className="mt-1 border border-border p-3 md:p-4 rounded-md">
                      <Input
                        id="attachment"
                        name="attachment"
                        type="file"
                        multiple
                        required
                        className="text-sm md:text-base py-1.5"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        PDF, DOC, DOCX, JPG, PNG up to 10MB
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 text-xs md:text-sm">
                    <AlertCircle className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      By submitting this form, you consent to We Gotcha Served LLC receiving and processing your documents.
                    </p>
                  </div>

                  <div className="mt-6 md:mt-8">
                    <Button
                      type="submit"
                      className="w-full text-base py-6 md:py-5"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Documents"}
                    </Button>
                  </div>

                  <div className="mt-4 text-center text-xs md:text-sm text-muted-foreground">
                    <p>
                      If you experience any issues with this form, please email your documents directly to{" "}
                      <a
                        href="mailto:Charlie@WeGotchaServed.com"
                        className="text-primary font-medium hover:underline"
                      >
                        Charlie@WeGotchaServed.com
                      </a>
                    </p>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex-col space-y-3 md:space-y-4 border-t border-border/20 pt-5 md:pt-6">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  <span className="text-xs md:text-sm text-muted-foreground">
                    You will receive a confirmation email after your submission is processed.
                  </span>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-8 md:mb-12">
            Document Upload FAQ
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2">What types of documents can I upload?</h3>
              <p className="text-muted-foreground">
                You can upload any legal documents that require serving, including summons, complaints, subpoenas, eviction notices, and other court documents.
                We accept PDF, DOC, DOCX, JPG, and PNG file formats.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Is my information secure?</h3>
              <p className="text-muted-foreground">
                Yes, all uploads are sent directly and securely to our email. We handle all documents with strict confidentiality
                and adhere to best practices for information security.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">What happens after I upload my documents?</h3>
              <p className="text-muted-foreground">
                Our team will review your documents and contact you within 1 business day to confirm receipt and discuss next steps
                for serving your documents. You'll receive a confirmation email once your submission is processed.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Is there a file size limit?</h3>
              <p className="text-muted-foreground">
                Yes, the maximum file size for uploads is 10MB per file. If your documents exceed this limit,
                please consider compressing them or sending them in multiple submissions. Alternatively,
                you can email them directly to Charlie@WeGotchaServed.com.
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
            Contact We Gotcha Served LLC today for more information about our document serving process
            in Cortez, Colorado and the surrounding Four Corners region.
          </p>
          <Button asChild size="lg" variant="secondary">
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>
    </>
  );
}
