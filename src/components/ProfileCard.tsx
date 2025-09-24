import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, ExternalLink, Zap, Building2, Play } from "lucide-react";
import { useState, useEffect } from "react";
import brandonHeadshot from "@/assets/brandon-headshot.jpg";
import firmLogoWhite from "@/assets/firm-logo-white.png";
import ContactDialog from "./ContactDialog";

interface ProfileCardProps {
  name?: string;
  title?: string;
  bio?: string;
  phone?: string;
  email?: string;
  headshotUrl?: string;
}

const ProfileCard = ({ 
  name = "Your Name", 
  title = "Real Estate Professional & App Developer",
  bio = "Passionate about helping people find their dream homes and creating innovative digital solutions. With years of experience in real estate and a passion for technology, I bridge the gap between traditional service and modern innovation.",
  phone = "(555) 123-4567",
  email = "your.email@example.com",
  headshotUrl = brandonHeadshot
}: ProfileCardProps) => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [realEstateFlipped, setRealEstateFlipped] = useState(false);
  const [horizonFlipped, setHorizonFlipped] = useState(false);
  const [showBio, setShowBio] = useState(false);
  const [displayedBio, setDisplayedBio] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleContact = () => {
    setIsContactDialogOpen(true);
  };

  const handleHorizonApp = () => {
    // Replace with actual Horizon app URL
    window.open("https://your-horizon-app.com", "_blank");
  };

  const startTypingAnimation = () => {
    if (isTyping || showBio) return;
    
    setShowBio(true);
    setIsTyping(true);
    setDisplayedBio("");
    
    const fullBio = "I'm dedicated to helping people turn their dreams of homeownership into reality while empowering real estate professionals to step into the future with confidence. Through my work in real estate, I guide clients with honesty, care, and innovation—making the process of buying or selling a home as smooth as possible. Alongside this, I created the Horizon App, a platform designed to help agents save valuable time and unlock new levels of productivity using AI. By blending technology with real-world expertise, Horizon is more than just a tool—it's a step into the future of real estate. At the heart of everything I do is one mission: to bring people closer to their goals and to lead the industry forward through innovation, efficiency, and vision.";
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullBio.length) {
        setDisplayedBio(fullBio.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 15);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section with Profile */}
      <div className="relative z-10 text-center mb-16">
        <div className="relative inline-block mb-8">
          {/* Glowing Ring */}
          <div className="absolute -inset-2 bg-gradient-to-r from-accent-green to-secondary-bright rounded-full blur-md opacity-50 animate-pulse"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-green to-secondary-bright rounded-full opacity-20"></div>
          
          {/* Flip Container */}
          <div className="flip-container group relative w-48 h-48 mx-auto cursor-pointer">
            <div className="flip-inner relative w-full h-full">
              {/* Front Side - Headshot */}
              <div className="flip-front absolute inset-0 w-full h-full">
                <Avatar className="w-full h-full shadow-hero border-4 border-primary-bright/30 transition-all duration-500">
                  <AvatarImage src={headshotUrl} alt={name} className="object-cover w-full h-full" />
                  <AvatarFallback className="text-4xl bg-gradient-hero text-primary-foreground w-full h-full">
                    {name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </div>
              
              {/* Back Side - Logo */}
              <div className="flip-back absolute inset-0 w-full h-full">
                <div className="w-full h-full rounded-full bg-accent-green shadow-hero border-4 border-primary-bright/30 flex items-center justify-center p-8">
                  <img 
                    src={firmLogoWhite} 
                    alt="Better Homes and Gardens McKenzie Realty" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-accent-green to-secondary-bright bg-clip-text text-transparent">
            {name}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-accent-green mb-8 font-medium">{title}</p>
        
        {/* About Me Button */}
        {!showBio && (
          <Button 
            onClick={startTypingAnimation}
            className="relative overflow-hidden bg-gradient-real-estate hover:bg-gradient-real-estate text-background shadow-button hover:shadow-neon-green transition-all duration-300 hover:scale-105 border border-accent-green/30 px-6 py-3 mb-8 text-lg font-semibold"
          >
            <Play className="w-5 h-5 mr-2" />
            About Me
          </Button>
        )}
        
        {/* Animated Bio */}
        {showBio && (
          <div className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            <p>{displayedBio}</p>
            {isTyping && <span className="animate-pulse">|</span>}
          </div>
        )}
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-8 mb-16">
        {/* Real Estate Section - Flip Card */}
        <div 
          className="flip-container group cursor-pointer h-80 md:h-96"
          onMouseEnter={() => window.innerWidth >= 768 && setRealEstateFlipped(true)}
          onMouseLeave={() => window.innerWidth >= 768 && setRealEstateFlipped(false)}
          onClick={() => setRealEstateFlipped(!realEstateFlipped)}
        >
          <div 
            className={`flip-inner h-full transition-transform duration-600`} 
            style={{ 
              transformStyle: 'preserve-3d',
              transform: realEstateFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}
          >
            {/* Front Side - Real Estate Info */}
            <Card className="flip-front absolute inset-0 w-full h-full overflow-hidden bg-gradient-card backdrop-blur-xl border border-border-bright shadow-card hover:shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]" style={{ backfaceVisibility: 'hidden' }}>
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-real-estate opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-glass group-hover:bg-gradient-real-estate/10 transition-all duration-500"></div>
              
              {/* Content */}
              <div className="relative p-6 md:p-8 text-center h-full flex flex-col justify-center">
                <div className="relative mb-6 md:mb-8">
                  <div className="absolute inset-0 bg-gradient-real-estate rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-real-estate rounded-2xl mx-auto flex items-center justify-center shadow-button border border-border-bright">
                    <img 
                      src={firmLogoWhite} 
                      alt="Better Homes and Gardens McKenzie Realty" 
                      className="w-10 h-10 md:w-12 md:h-12 object-contain"
                    />
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-foreground">
                  <span className="bg-gradient-to-r from-accent-green to-accent-green bg-clip-text text-transparent">
                    Real Estate
                  </span>
                </h2>
                
                <p className="text-muted-foreground mb-6 md:mb-8 leading-relaxed text-base md:text-lg">
                  Your trusted partner in finding the perfect home or investment property. 
                  Personalized service with deep market knowledge and commitment to your success.
                </p>
                
                <p className="text-xs md:text-sm text-accent-green font-medium">
                  Hover or tap to see contact info
                </p>
              </div>
            </Card>

            {/* Back Side - Contact Information */}
            <Card className="flip-back absolute inset-0 w-full h-full overflow-hidden bg-gradient-card backdrop-blur-xl border border-border-bright shadow-card" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-real-estate opacity-5"></div>
              <div className="absolute inset-0 bg-gradient-glass"></div>
              
              {/* Content */}
              <div className="relative p-6 md:p-8 text-center h-full flex flex-col justify-center">
                <div className="relative mb-6 md:mb-8">
                  <div className="absolute inset-0 bg-gradient-real-estate rounded-2xl blur-xl opacity-60"></div>
                  <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-real-estate rounded-2xl mx-auto flex items-center justify-center shadow-button border border-border-bright">
                    <Building2 className="w-8 h-8 md:w-10 md:h-10 text-background" />
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-foreground">
                  <span className="bg-gradient-to-r from-accent-green to-accent-green bg-clip-text text-transparent">
                    Ready to Find Your Dream Home?
                  </span>
                </h3>
                
                <p className="text-muted-foreground mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                  Don't forget to check out Homes for Heroes(link on botton of page) to see if you qualify to get 25% of my commision back to you! We have given over $2.4 million back to the heros in the comunity, and who wouldnt want to be a part of that!
                </p>
                
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleContact();
                  }}
                  className="relative overflow-hidden bg-gradient-real-estate hover:bg-gradient-real-estate text-background shadow-button hover:shadow-neon-green transition-all duration-300 hover:scale-110 border border-accent-green/30 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-green/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <Phone className="w-5 h-5 mr-3" />
                  Get Full Contact Info
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Horizon App Section - Flip Card */}
        <div 
          className="flip-container group cursor-pointer h-80 md:h-96"
          onMouseEnter={() => window.innerWidth >= 768 && setHorizonFlipped(true)}
          onMouseLeave={() => window.innerWidth >= 768 && setHorizonFlipped(false)}
          onClick={() => setHorizonFlipped(!horizonFlipped)}
        >
          <div 
            className={`flip-inner h-full transition-transform duration-600`} 
            style={{ 
              transformStyle: 'preserve-3d',
              transform: horizonFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}
          >
            {/* Front Side - Horizon App Info */}
            <Card className="flip-front absolute inset-0 w-full h-full overflow-hidden bg-gradient-card backdrop-blur-xl border border-border-bright shadow-card hover:shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]" style={{ backfaceVisibility: 'hidden' }}>
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-horizon opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-glass group-hover:bg-gradient-horizon/10 transition-all duration-500"></div>
              
              {/* Content */}
              <div className="relative p-6 md:p-8 text-center h-full flex flex-col justify-center">
                <div className="relative mb-6 md:mb-8">
                  <div className="absolute inset-0 bg-gradient-horizon rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-horizon rounded-2xl mx-auto flex items-center justify-center shadow-button border border-border-bright">
                    <Building2 className="w-8 h-8 md:w-10 md:h-10 text-background" />
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-foreground">
                  <span className="bg-gradient-to-r from-secondary-bright to-secondary-bright bg-clip-text text-transparent">
                    Horizon App
                  </span>
                </h2>
                
                <p className="text-muted-foreground mb-6 md:mb-8 leading-relaxed text-base md:text-lg">
                  Innovative mobile application designed to enhance your digital experience. 
                  Cutting-edge technology meets user-friendly design for seamless interaction.
                </p>
                
                <p className="text-xs md:text-sm text-secondary-bright font-medium">
                  Hover or tap to access the app
                </p>
              </div>
            </Card>

            {/* Back Side - App Access */}
            <Card className="flip-back absolute inset-0 w-full h-full overflow-hidden bg-gradient-card backdrop-blur-xl border border-border-bright shadow-card" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-horizon opacity-5"></div>
              <div className="absolute inset-0 bg-gradient-glass"></div>
              
              {/* Content */}
              <div className="relative p-6 md:p-8 text-center h-full flex flex-col justify-center">
                <div className="relative mb-6 md:mb-8">
                  <div className="absolute inset-0 bg-gradient-horizon rounded-2xl blur-xl opacity-60"></div>
                  <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-horizon rounded-2xl mx-auto flex items-center justify-center shadow-button border border-border-bright">
                    <Building2 className="w-8 h-8 md:w-10 md:h-10 text-background" />
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-foreground">
                  <span className="bg-gradient-to-r from-secondary-bright to-secondary-bright bg-clip-text text-transparent">
                    Ready to Experience Horizon?
                  </span>
                </h3>
                
                <p className="text-muted-foreground mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                  Transform your workflow with AI-powered tools designed for the future of real estate.
                </p>
                
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleHorizonApp();
                  }}
                  className="relative overflow-hidden bg-gradient-horizon hover:bg-gradient-horizon text-background shadow-button hover:shadow-neon-purple transition-all duration-300 hover:scale-110 border border-secondary/30 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <ExternalLink className="w-5 h-5 mr-3" />
                  Launch Horizon App
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <ContactDialog
        isOpen={isContactDialogOpen}
        onClose={() => setIsContactDialogOpen(false)}
        phone={phone}
        email={email}
      />
    </div>
  );
};

export default ProfileCard;