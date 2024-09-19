
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import NavBar from "./NavBar"
import { get } from "http"
import Video from 'next-video'
import bgVideo_1 from '@/videos/bg-1.mp4'
import bgVideo_2 from '@/videos/bg-2.mp4'
import BackgroundVideo from "next-video/background-video"
export default function Index (){


  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <BackgroundVideo src={bgVideo_2}>
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          <div className="relative z-10 text-center text-background px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-9xl font-extrabold tracking-tight mb-4">
              Welcome to the Future
            </h1>
            <p className="max-w-lg mx-auto text-xl sm:text-2xl mb-8 text-background">
              Experience Web like never before with Coranetics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-background text-foreground hover:bg-foreground hover:text-background">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-foreground border-foreground hover:bg-terciary hover:text-background">
                Learn More
              </Button>
            </div>

          </div>
        </section>
        </BackgroundVideo>
        <section className="w-full py-12 md:py-24 lg:py-32  text-grey-800">
          <div className="container px-4 md:px-6 m-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Our Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Innovative Design", description: "Cutting-edge interfaces that set new standards." },
                { title: "Powerful Performance", description: "Lightning-fast speed for seamless experiences." },
                { title: "Secure & Reliable", description: "Your data is safe with our advanced security measures." },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-4 p-2 bg-primary rounded-full">
                    <svg
                      className=" text-secondary-foreground h-6 w-6"
                      fill="none"
                      height="24"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div>
          <Video src={bgVideo_1} />
        </div>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Join Our Newsletter</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto text-center mb-8">
              Stay up to date with the latest news, announcements, and articles.
            </p>
            <div className="mx-auto max-w-sm space-y-4">
              <form className="flex flex-col sm:flex-row gap-2">
                <Input
                  className="flex-1 email"
                  placeholder="Enter your email"
                  type="email"
                  required
                />
                <Button type="submit" className="w-full sm:w-auto border rounded-l bg-primary text-background">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              <p className="text-xs text-muted-foreground text-center">
                By subscribing, you agree to our{" "}
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-terciary text-white">
        <div className="container px-4 md:px-6 mx-auto w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">Features</Link></li>
                <li><Link href="#" className="hover:underline">Pricing</Link></li>
                <li><Link href="#" className="hover:underline">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">About</Link></li>
                <li><Link href="#" className="hover:underline">Careers</Link></li>
                <li><Link href="#" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">Blog</Link></li>
                <li><Link href="#" className="hover:underline">Documentation</Link></li>
                <li><Link href="#" className="hover:underline">Community</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:underline">Terms of Service</Link></li>
                <li><Link href="#" className="hover:underline">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-sm">© 2024 Coranetics Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

