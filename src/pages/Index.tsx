import ProfileCard from "@/components/ProfileCard";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background relative overflow-hidden">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-pulse"></div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary-bright/20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-20 h-20 bg-secondary/10 rounded-lg rotate-45 animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-accent-pink/20 rotate-12 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary/10 rounded-full animate-bounce delay-1000"></div>
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(180 100% 50% / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(180 100% 50% / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      <div className="relative z-10">
        {/* Main Content */}
        <div className="container mx-auto py-16 md:py-24">
          <ProfileCard 
            name="Brandon Gallmeyer"
            title="Real Estate Professional & App Developer"
            bio="Passionate about helping people find their dream homes and creating innovative digital solutions. With years of experience in real estate and a passion for technology, I bridge the gap between traditional service and modern innovation."
            phone="3603648703"
            email="brandon@mckenziebhg.com"
          />
          
          {/* Social Links */}
          <div className="max-w-4xl mx-auto px-4">
            <SocialLinks />
          </div>
        </div>

        {/* Futuristic Footer */}
        <footer className="relative z-10 py-12 text-center border-t border-border-bright/30 bg-gradient-card backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-glass opacity-30"></div>
          <div className="relative">
            <p className="text-muted-foreground mb-2">
              © 2024 Brandon Gallmeyer. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Designed for the future • Built with passion
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;