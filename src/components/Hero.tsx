import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

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
      
      <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Welcome to the Future of Tech
          </div>
          
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
              TechNova
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Exploring the Future of Innovation
            </p>
            <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
              Dive deep into the latest trends in AI, cybersecurity, emerging technologies, and startup innovations. 
              Stay ahead with expert insights and cutting-edge analysis.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
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
              onClick={() => onNavigate('about')}
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Readers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}