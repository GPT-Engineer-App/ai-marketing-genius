import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/onboarding");
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-100">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Transform Your Brand with AI-Driven Marketing</h1>
          <p className="text-xl mb-8">Leverage AI to create compelling brand messages and marketing strategies</p>
          <Button variant="primary" size="lg" onClick={handleSignUpClick}>Get Started</Button>
        </div>
      </section>

      {/* Main Tabs */}
      <section className="py-20">
        <div className="container mx-auto">
          <Tabs defaultValue="brand-messages">
            <TabsList className="flex justify-center mb-8">
              <TabsTrigger value="brand-messages" className="px-4 py-2">Brand and Product Messages</TabsTrigger>
              <TabsTrigger value="generate-marketing" className="px-4 py-2">Generate Marketing</TabsTrigger>
              <TabsTrigger value="analytics" className="px-4 py-2">AI-enhanced Data and Customer Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="brand-messages">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-2">Brand and Product Messages</h3>
                <p>Create clear and compelling brand messages tailored to your audience.</p>
              </div>
            </TabsContent>
            <TabsContent value="generate-marketing">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-2">Generate Marketing Content</h3>
                <p>Generate Facebook ads, email marketing copy, and social media content effortlessly.</p>
              </div>
            </TabsContent>
            <TabsContent value="analytics">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-2">AI-enhanced Data and Customer Analytics</h3>
                <p>Gain insights into your customer data to make informed marketing decisions.</p>
              </div>
            </TabsContent>
          </Tabs>
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
          <Button variant="primary" size="lg" onClick={handleSignUpClick}>Sign Up Now</Button>
        </div>
      </section>
    </div>
  );
};

export default Index;