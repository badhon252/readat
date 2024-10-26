import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Newspaper, Search, Smartphone, Code, Github } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            About ACONEWS
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Your go-to source for the latest news from around the world,
            aggregated and delivered in a clean, user-friendly interface.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Key Features
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Newspaper,
                title: "Multiple Sources",
                description:
                  "Aggregates news from GNews.io, The New York Times, and The Guardian",
              },
              {
                icon: Search,
                title: "Powerful Search",
                description:
                  "Find specific articles with our advanced search functionality",
              },
              {
                icon: Smartphone,
                title: "Responsive Design",
                description:
                  "Optimized for a seamless experience on both mobile and desktop devices",
              },
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900">
            How It Works
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Explore Categories
              </h3>
              <p className="text-gray-600">
                Browse through various news categories including technology,
                sports, entertainment, and more. Our 'Explore' feature helps you
                discover diverse content tailored to your interests.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-600">
                Our hero section features an interactive carousel showcasing the
                latest breaking news. Navigate through top stories effortlessly
                and stay informed about current events.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Deep Dive
              </h3>
              <p className="text-gray-600">
                Each news item provides a snapshot with an image, title,
                publication time, and source. Click 'Continue Reading' to access
                the full article on the original publisher's site.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Customized Experience
              </h3>
              <p className="text-gray-600">
                Use our powerful search function to find specific news topics or
                articles that interest you. Tailor your news feed to your
                preferences and stay informed on the subjects that matter most
                to you.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Technologies Used
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {[
              "Next.js",
              "React",
              "Tailwind CSS",
              "GNews.io API",
              "NYT API",
              "Guardian API",
            ].map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-foreground text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Team</h2>
          <p className="mt-4 text-lg text-gray-500">
            ACONEWS is developed and maintained by a passionate team of
            developers committed to delivering high-quality, up-to-date news
            content. We believe in the power of information and strive to make
            news accessible to everyone.
          </p>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Ready to Explore?
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild>
              <Link href="/">Start Reading</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                href="https://github.com/badhon252/ACONEWS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
