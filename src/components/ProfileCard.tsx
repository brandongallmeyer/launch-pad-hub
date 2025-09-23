import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, ExternalLink, Zap, Building2 } from "lucide-react";
import { useState } from "react";
import brandonHeadshot from "@/assets/brandon-headshot.jpg";
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

  const handleContact = () => {
    setIsContactDialogOpen(true);
  };

  const handleHorizonApp = () => {
    // Replace with actual Horizon app URL
    window.open("https://your-horizon-app.com", "_blank");
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
          <div className="absolute -inset-2 bg-gradient-hero rounded-full blur-md opacity-50 animate-pulse"></div>
          <div className="absolute -inset-1 bg-gradient-hero rounded-full opacity-20"></div>
          
          <Avatar className="relative w-48 h-48 mx-auto shadow-hero border-4 border-primary-bright/30 transition-all duration-500 hover:scale-105 hover:shadow-neon-cyan">
            <AvatarImage src={headshotUrl} alt={name} className="object-cover w-full h-full" />
            <AvatarFallback className="text-4xl bg-gradient-hero text-primary-foreground w-full h-full">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          {/* Status Indicator */}
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-accent-green rounded-full flex items-center justify-center shadow-neon-cyan border-2 border-background">
            <div className="w-4 h-4 bg-background rounded-full"></div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-accent-green to-secondary-bright bg-clip-text text-transparent">
            {name}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-bright mb-8 font-medium">{title}</p>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {bio}
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-8 mb-16">
        {/* Real Estate Section */}
        <Card className="group relative overflow-hidden bg-gradient-card backdrop-blur-xl border border-border-bright shadow-card hover:shadow-neon-green transition-all duration-500 hover:-translate-y-4 hover:scale-105">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-real-estate opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-gradient-glass group-hover:bg-gradient-real-estate transition-all duration-500"></div>
          
          {/* Content */}
          <div className="relative p-8 text-center">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-real-estate rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative w-20 h-20 bg-gradient-real-estate rounded-2xl mx-auto flex items-center justify-center shadow-button border border-border-bright">
                <Building2 className="w-10 h-10 text-background" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              <span className="bg-gradient-to-r from-accent-green to-accent-green bg-clip-text text-transparent">
                Real Estate
              </span>
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Your trusted partner in finding the perfect home or investment property. 
              Personalized service with deep market knowledge and commitment to your success.
            </p>
            
            <Button 
              onClick={handleContact}
              className="relative overflow-hidden bg-gradient-real-estate hover:bg-gradient-real-estate text-background shadow-button hover:shadow-neon-green transition-all duration-300 hover:scale-110 border border-accent-green/30 px-8 py-6 text-lg font-semibold"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-green/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <Phone className="w-5 h-5 mr-3" />
              Get My Contact Info
            </Button>
          </div>
        </Card>

        {/* Horizon App Section */}
        <Card className="group relative overflow-hidden bg-gradient-card backdrop-blur-xl border border-border-bright shadow-card hover:shadow-neon-purple transition-all duration-500 hover:-translate-y-4 hover:scale-105">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-horizon opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-gradient-glass group-hover:bg-gradient-horizon transition-all duration-500"></div>
          
          {/* Content */}
          <div className="relative p-8 text-center">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-horizon rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative w-20 h-20 bg-gradient-horizon rounded-2xl mx-auto flex items-center justify-center shadow-button border border-border-bright">
                <Zap className="w-10 h-10 text-background" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              <span className="bg-gradient-to-r from-secondary-bright to-secondary-bright bg-clip-text text-transparent">
                Horizon App
              </span>
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Innovative mobile application designed to enhance your digital experience. 
              Cutting-edge technology meets user-friendly design for seamless interaction.
            </p>
            
            <Button 
              onClick={handleHorizonApp}
              className="relative overflow-hidden bg-gradient-horizon hover:bg-gradient-horizon text-background shadow-button hover:shadow-neon-purple transition-all duration-300 hover:scale-110 border border-secondary/30 px-8 py-6 text-lg font-semibold"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <ExternalLink className="w-5 h-5 mr-3" />
              Open Horizon App
            </Button>
          </div>
        </Card>
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