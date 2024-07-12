import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-100">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Transform Your Brand with AI-Driven Marketing</h1>
          <p className="text-xl mb-8">Leverage AI to create compelling brand messages and marketing strategies</p>
          <Button variant="primary" size="lg">Get Started</Button>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-16 h-16 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Brand and Product Messages</h3>
              <p>Create clear and compelling brand messages tailored to your audience.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-16 h-16 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Generate Marketing Content</h3>
              <p>Generate Facebook ads, email marketing copy, and social media content effortlessly.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-16 h-16 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">AI-enhanced Data and Customer Analytics</h3>
              <p>Gain insights into your customer data to make informed marketing decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <p className="text-xl mb-4">We are a team of marketing experts and AI enthusiasts dedicated to helping brands create impactful marketing strategies.</p>
          <p className="text-xl">Our mission is to leverage the power of AI to transform the way brands communicate with their audience.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Marketing?</h2>
          <p className="text-xl mb-8">Sign up now to start creating compelling marketing content with AI.</p>
          <Button variant="primary" size="lg">Sign Up Now</Button>
        </div>
      </section>
    </div>
  );
};

export default Index;