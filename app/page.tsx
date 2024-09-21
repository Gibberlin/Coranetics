import Image from "next/image"
import imageAdd from "./Images/background.jpg"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
// import NavBar from "./NavBar"


export default function Index (){


  return (
    <div className="flex flex-col min-h-screen">
      {/* <NavBar /> */}
      <main className="flex-1 ">

        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <Image src={imageAdd} alt="alt" fill={true} className="h-full w-full transition duration-700 ease-linear hover:scale-110 overflow-hidden"/>
          <div className="relative z-10 text-center text-background px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-9xl font-extrabold tracking-tight mb-4 transition-transform duration-1000 hover:scale-105 ">
              Welcome to the Future
            </h1>
            <p className="max-w-lg mx-auto text-xl sm:text-2xl mb-8 text-background">
              Experience Web like never before with Coranetics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="transition-colors duration-500 ease-in bg-background text-foreground hover:bg-primary hover:text-background hover:scale-125">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="transition-colors duration-200 ease-in text-background bg-terciary border-background hover:bg-terciary hover:text-background hover:scale-110">
                Learn More
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32  text-grey-800">
          <div className="container px-4 md:px-6 m-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Our Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Innovative Design", description: "Cutting-edge interfaces that set new standards." },
                { title: "Powerful Performance", description: "Lightning-fast speed for seamless experiences." },
                { title: "Secure & Reliable", description: "Your data is safe with our advanced security measures." },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center border-primary shadow-md py-20 hover:scale-105">
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
    
    </div>
  )
}

