//Coranetics Main Page
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import AnimatedHero from "./components/animatedHero"
// import NavBar from "./NavBar"

export default function ProductsPage() {
  const products = [
    { id: 1, name: "Google Reiview Cards", description: "Our google review cards are now in the market under the most affordable price you could imagine , get ready to grow your organic reviews.", price: "$4.99" },
    { id: 2, name: "Full website development (static, dynamic, React/Next.js)", description: "Fast performance, SEO optimized, Fluid Website Development", price: "$9.99" },
    { id: 3, name: "Demo service/Project", description: "Affordable and efficient product C", price: "$9.99" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 ">
<AnimatedHero />
        <section className="w-full py-12 md:py-24 lg:py-32  text-grey-800">
          <div className="container px-4 md:px-6 m-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Our Products and Sercives</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col items-center text-center border-primary shadow-md py-10 px-6 hover:scale-105"
                >
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <span className="text-lg font-semibold">{product.price}</span>
                  <Button className="mt-4">Buy Now</Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

