import { Button } from "@/components/ui/button";
import products from "./products.json"; // Import the products JSON file
import services from "./Services.json"; // Import the services JSON file

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Products Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 text-grey-800">
          <div className="container px-4 md:px-6 m-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
              Our Products
            </h2>
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

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 text-grey-800 bg-gray-100">
          <div className="container px-4 md:px-6 m-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
              Our Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex flex-col items-center text-center border-primary shadow-md py-10 px-6 hover:scale-105"
                >
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <span className="text-lg font-semibold">{service.price}</span>
                  <Button className="mt-4">Learn More</Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}