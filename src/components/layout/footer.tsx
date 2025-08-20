import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/40">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/images/wgs-logo.png"
                alt="We Gotcha Served LLC Logo"
                className="h-12 w-auto mr-3"
              />
              <h3 className="text-lg font-bold text-primary">We Gotcha Served LLC</h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Professional legal document delivery services you can trust. Serving legal professionals since 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/areas" className="text-muted-foreground hover:text-primary">
                  Service Area
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/upload" className="text-muted-foreground hover:text-primary">
                  Upload
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#document-delivery" className="text-muted-foreground hover:text-primary">
                  Document Delivery
                </Link>
              </li>
              <li>
                <Link href="/services#court-filings" className="text-muted-foreground hover:text-primary">
                  Court Filings
                </Link>
              </li>
              <li>
                <Link href="/services#skip-tracing" className="text-muted-foreground hover:text-primary">
                  Skip Tracing
                </Link>
              </li>
              <li>
                <Link href="/services#document-retrieval" className="text-muted-foreground hover:text-primary">
                  Document Retrieval
                </Link>
              </li>
              <li>
                <Link href="/services#rush-service" className="text-muted-foreground hover:text-primary">
                  Rush Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex">
                <Phone className="mr-2 h-5 w-5 text-primary" />
                <a href="tel:9705160322" className="text-muted-foreground hover:text-primary">
                  (970) 516-0322
                </a>
              </li>
              <li className="flex">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                <a href="mailto:Charlie@WeGotchaServed.com" className="text-muted-foreground hover:text-primary">
                  Charlie@WeGotchaServed.com
                </a>
              </li>
              <li className="flex">
                <MapPin className="mr-2 h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  313 N. Chestnut St.<br />
                  Cortez, CO 81321<br />
                  United States
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} <Link href="/" className="hover:text-primary">We Gotcha Served LLC</Link>.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
