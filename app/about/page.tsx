// write code and content for the /about page of 'Aconews'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-4">
      <header className="text-2xl font-bold mb-4">About Aconews</header>
      <Card className="max-w-md rounded-lg shadow-md">
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <article>
            Aconews is a news platform dedicated to providing you with accurate,
            reliable, and engaging news from around the world. Our mission is to
            keep you informed and empowered with the latest developments in a
            variety of fields, including:
          </article>
          <ul className="mt-4 list-disc list-inside">
            <li>Technology</li>
            <li>Business</li>
            <li>Entertainment</li>
            <li>Politics</li>
            <li>Sports</li>
            <li>Health</li>
            <li>Science</li>
            <li>Travel</li>
          </ul>
        </CardContent>
      </Card>

      <div className="mt-8 gap-8 items-center">
        <Image
          src="/aconews-logo.png" // Replace with your actual logo path
          alt="Aconews Logo"
          width={100}
          height={100}
        />
        <div className="flex flex-col">
          <h1 className="text-lg font-bold mb-2">Contact Us</h1>
          <p>
            For any inquiries or feedback, please reach out to us at:{" "}
            <a href="mailto:dev.khalidhossain@gmail.com" className="underline">
              dev.khalidhossain@gmail.com
            </a>
          </p>
          <p>
            Follow us on social media for updates and more:{" "}
            <Link
              href="https://www.facebook.com/badhon252"
              className="underline"
              target="_blank"
            >
              Facebook
            </Link>
            ,{" "}
            <Link
              href="https://www.twitter.com/badhon252"
              className="underline"
              target="_blank"
            >
              Twitter
            </Link>
            ,{" "}
            <Link
              href="https://www.github.com/badhon252/aconews"
              className="underline"
              target="_blank"
            >
              Github
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
