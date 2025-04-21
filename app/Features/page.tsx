import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Features() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 m-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Our Features</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  title: "Innovative Design", 
                  description: "Cutting-edge interfaces that set new standards.",
                  icon: "🎨"
                },
                { 
                  title: "Powerful Performance", 
                  description: "Lightning-fast speed for seamless experiences.",
                  icon: "⚡"
                },
                { 
                  title: "Secure & Reliable", 
                  description: "Your data is safe with our advanced security measures.",
                  icon: "🔒"
                },
                { 
                  title: "24/7 Support", 
                  description: "Round-the-clock assistance whenever you need it.",
                  icon: "🛟"
                },
                { 
                  title: "Custom Solutions", 
                  description: "Tailored to meet your specific business needs.",
                  icon: "⚙️"
                },
                { 
                  title: "Easy Integration", 
                  description: "Seamlessly works with your existing systems.",
                  icon: "🔌"
                }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 border rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 m-auto">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Ready to Get Started?</h2>
              <p className="max-w-[600px] text-muted-foreground mb-8">
                Experience the power of our features today. Join thousands of satisfied customers.
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
