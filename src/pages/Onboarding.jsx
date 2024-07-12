import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    industry: "",
    problem: "",
    experience: "",
    journey: "",
  });

  const mutation = useMutation({
    mutationFn: async (data) => {
      // Replace with your API endpoint
      const response = await fetch("/api/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to submit onboarding data");
      }
      return response.json();
    },
    onSuccess: () => {
      navigate("/"); // Redirect to home or another page after successful submission
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-8 text-center">Customer Onboarding</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
        <div>
          <label htmlFor="industry" className="block text-lg font-medium mb-2">
            What industry do you work in?
          </label>
          <Input
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="problem" className="block text-lg font-medium mb-2">
            What was the problem you saw in your niche that you realised you had the power to solve?
          </label>
          <Textarea
            id="problem"
            name="problem"
            value={formData.problem}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="experience" className="block text-lg font-medium mb-2">
            How does your experience help your audience solve their present problem?
          </label>
          <Textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="journey" className="block text-lg font-medium mb-2">
            What's one part of your journey your audience can benefit from learning about the most?
          </label>
          <Textarea
            id="journey"
            name="journey"
            value={formData.journey}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" variant="primary" size="lg" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Onboarding;