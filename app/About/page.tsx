import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 m-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">About Coranetics</h1>
              <p className="max-w-[600px] text-muted-foreground">
                We're on a mission to revolutionize the way businesses operate in the digital age.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2024, Coranetics emerged from a simple idea: to make technology accessible and beneficial for businesses of all sizes. Our journey began with a small team of passionate developers and has grown into a company that serves thousands of customers worldwide.
                </p>
                <p className="text-muted-foreground">
                  Today, we continue to push the boundaries of what's possible, constantly innovating and improving our services to meet the evolving needs of our customers.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  We believe that technology should empower businesses, not complicate them. Our mission is to provide intuitive, powerful solutions that help companies grow and succeed in the digital landscape.
                </p>
                <p className="text-muted-foreground">
                  Through innovation, dedication, and a customer-first approach, we're building the future of business technology.
                </p>
              </div>
            </div>
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Innovation",
                    description: "We constantly push boundaries and explore new possibilities."
                  },
                  {
                    title: "Integrity",
                    description: "We operate with honesty, transparency, and ethical practices."
                  },
                  {
                    title: "Excellence",
                    description: "We strive for the highest quality in everything we do."
                  },
                  {
                    title: "Community",
                    description: "We build strong relationships with our customers and partners."
                  }
                ].map((value, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Meet Our Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "John Doe",
                    role: "CEO & Founder",
                    image: "👨‍💼"
                  },
                  {
                    name: "Jane Smith",
                    role: "CTO",
                    image: "👩‍💻"
                  },
                  {
                    name: "Mike Johnson",
                    role: "Head of Product",
                    image: "👨‍💼"
                  }
                ].map((member, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-6 border rounded-lg">
                    <div className="text-6xl mb-4">{member.image}</div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 m-auto">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Join Our Journey</h2>
              <p className="max-w-[600px] text-muted-foreground mb-8">
                Be part of our mission to transform the future of business technology.
              </p>
              <Button size="lg" className="bg-primary text-background">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
