import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function Pricing() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 m-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Simple, Transparent Pricing</h1>
              <p className="max-w-[600px] text-muted-foreground">
                Choose the perfect plan for your needs. All plans include a 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$9",
                  period: "month",
                  description: "Perfect for individuals and small teams",
                  features: [
                    "Up to 5 projects",
                    "Basic analytics",
                    "Email support",
                    "1GB storage",
                    "Basic security"
                  ]
                },
                {
                  name: "Professional",
                  price: "$29",
                  period: "month",
                  description: "Ideal for growing businesses",
                  features: [
                    "Unlimited projects",
                    "Advanced analytics",
                    "Priority support",
                    "10GB storage",
                    "Advanced security",
                    "API access",
                    "Custom branding"
                  ],
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "$99",
                  period: "month",
                  description: "For large organizations",
                  features: [
                    "Unlimited everything",
                    "Custom analytics",
                    "24/7 support",
                    "Unlimited storage",
                    "Enterprise security",
                    "Custom integrations",
                    "Dedicated account manager",
                    "SLA guarantee"
                  ]
                }
              ].map((plan, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col p-6 border rounded-lg shadow-md ${
                    plan.popular ? 'border-primary scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-background px-2 py-1 rounded-tl-lg">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">/{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`mt-auto ${
                      plan.popular ? 'bg-primary text-background' : 'bg-muted'
                    }`}
                  >
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 m-auto">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Need a Custom Solution?</h2>
              <p className="max-w-[600px] text-muted-foreground mb-8">
                Contact our sales team for a tailored plan that fits your specific needs.
              </p>
              <Button size="lg" className="bg-primary text-background">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
