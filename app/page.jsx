
import { FeaturesSectionDemo } from "@/components/FeatureSection";
import HeroSection from "@/components/hero";
// import SpotlightCursor from "@/components/Spotlight";
// import { SpotlightNewDemo } from "@/components/SpotLightt";
import { AnimatedTestimonialsDemo } from "@/components/Testominial";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { faqs } from "@/data/faqs";
import { features } from "@/data/features";
import { howItWorks } from "@/data/howItWorks";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>
      {/* <SpotlightCursor/> */}
      

      <HeroSection />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Important Features for Your Career Growth.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-primary transition-colors duration-300"
                >
                  <CardContent className="pt-6 text-center flex flex-col items-center">
                    <div className="flex flex-col items-center justify-center">
                      {feature.icon}
                      <h3 className="text-xl font-bold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <FeaturesSectionDemo />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4"> How It Works</h2>
            <p className="text-muted-foreground">
              Four simple steps to boost your career with AI-powered tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description} </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            What Our Users Say About Us.
          </h2>

          <AnimatedTestimonialsDemo />
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="bg-background">
              Find answers to common questions about our AI career coaching
              platform.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faqs, index) => {
                return (
                  <AccordionItem key={index}  value={`item-${index}`}>
                    <AccordionTrigger>{faqs.question}</AccordionTrigger>
                    <AccordionContent>{faqs.answer}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>
      
      
      <section className="w-full">
        <div className="mx-auto rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter  sm:text-4xl md:text-5xl">
              Still Have Questions?
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/ md:text-xl">
              Join our community or contact us for more information.
            </p>
          <Link href="/dashboard" passHref>
          <Button 
          size={"lg"}
          variant="secondary"
          className="h-11 mt-5 animate-bounce"
          >
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />


          </Button>
          
          </Link>
          </div>
         
        </div>
      </section>
    </div>
  );
}
