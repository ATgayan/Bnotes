import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { TextAnimate } from "./ui/text-animate"
import { NumberTicker } from "./ui/number-ticker";

import { Navigation } from 'lucide-react';

interface HeroProps {


 onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {  
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-background/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_50%)] opacity-10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto  lg:px-4 py-14 lg:py-2">
           
          {/* Main Heading */}
          <div className=" flex">
           <div className="mx-auto h-[400px] w-[50%] align-middle align-center flex flex-col justify-center gap-6">
            <TextAnimate animation="blurInUp" by="character" once>Exploring the Future of Innovation</TextAnimate>
            <TextAnimate className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto" animation="blurInUp" by="character" once>
              Dive deep into the latest trends in AI, cybersecurity, emerging technologies, and startup innovations. 
              Stay ahead with expert insights and cutting-edge analysis.
            </TextAnimate>
           </div>
           <div  className='flex justify-center items-center mx-auto h-[30%] w-[30%] '>
            <img src="/src/assets/bg_image.png" alt="TechInsights Logo" className="heroimage-fade-in mx-auto" />

           </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 z-0">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-primary/40 hover:scale-105"
              onClick={() => onNavigate('featured')}
            >
              Explore Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border text-foreground hover:bg-accent px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              onClick={() => onNavigate('about')} >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center">
                              <NumberTicker value={500} className="text-2xl lg:text-3xl font-bold text-primary"/>+
              <div className="text-sm text-muted-foreground">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-primary"> 
                             <NumberTicker value={1000} className="text-2xl lg:text-3xl font-bold text-primary"/>+
                </div>
              <div className="text-sm text-muted-foreground">Readers</div>
            </div>
            <div className="text-center">
                              <NumberTicker value={10} className="text-2xl lg:text-3xl font-bold text-primary"/>+
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
          </div>
        </div>
    </section>
  );
}