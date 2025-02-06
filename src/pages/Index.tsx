import { Wand2, Sparkles, LineChart, ShoppingCart } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FeatureCard from "@/components/FeatureCard";
import beforeImage from "../../assets/before-living-space.jpeg";
import afterImage from "../../assets/after-pic-with-product-preview.jpeg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container px-4 py-20 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sage-400 to-sage-600 bg-clip-text text-transparent">
              Transform Your Space with AI-Powered Blind Previews
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Help your customers visualize their perfect blinds with our
              revolutionary Shopify app that uses AI to show real-time previews in
              their own spaces.
            </p>
            <button className="bg-sage-400 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-sage-500 transition-colors">
              Add to Shopify
            </button>
          </div>

          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider
              beforeImage={beforeImage}
              afterImage={afterImage}
              beforeLabel="Original Space"
              afterLabel="With New Blinds"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Merchants Love Our App
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Wand2}
              title="AI-Powered Preview"
              description="Let customers see your blinds in their space instantly with our advanced AI technology."
            />
            <FeatureCard
              icon={Sparkles}
              title="Boost Confidence"
              description="Increase purchase confidence with realistic previews that show exactly how products will look."
            />
            <FeatureCard
              icon={LineChart}
              title="Increase Sales"
              description="See higher conversion rates as customers can visualize products in their space."
            />
            <FeatureCard
              icon={ShoppingCart}
              title="Easy Integration"
              description="Seamlessly integrate with your Shopify store in just a few clicks."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Customer Uploads",
                description:
                  "Customers upload a photo of their space directly from your product page.",
              },
              {
                step: "2",
                title: "AI Magic",
                description:
                  "Our AI technology processes the image and adds your blinds to their space.",
              },
              {
                step: "3",
                title: "Instant Preview",
                description:
                  "Customers see a realistic preview of how your blinds will look in their space.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-sage-400 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sage-50 py-20">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Blind Sales?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the merchants who are already seeing increased sales and customer
            satisfaction with our AI-powered preview technology.
          </p>
          <button className="bg-sage-400 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-sage-500 transition-colors">
            Install App Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;