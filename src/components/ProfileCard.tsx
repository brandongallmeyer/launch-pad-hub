import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, ExternalLink } from "lucide-react";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

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
  headshotUrl = profilePlaceholder
}: ProfileCardProps) => {
  const handleContact = () => {
    const contactInfo = `📞 ${phone}\n📧 ${email}`;
    
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(contactInfo);
      alert("Contact information copied to clipboard!");
    } else {
      prompt("Here's my contact information:", contactInfo);
    }
  };

  const handleHorizonApp = () => {
    // Replace with actual Horizon app URL
    window.open("https://your-horizon-app.com", "_blank");
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Hero Section with Profile */}
      <div className="text-center mb-12">
        <div className="relative inline-block mb-6">
          <Avatar className="w-32 h-32 mx-auto shadow-hero border-4 border-primary/20">
            <AvatarImage src={headshotUrl} alt={name} className="object-cover" />
            <AvatarFallback className="text-2xl bg-gradient-hero text-white">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-button">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tight">
          {name}
        </h1>
        <p className="text-xl text-muted-foreground mb-6">{title}</p>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          {bio}
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Real Estate Section */}
        <Card className="group relative overflow-hidden bg-card-secondary shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2 border-0">
          <div className="absolute inset-0 bg-gradient-real-estate opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
          <div className="relative p-8 text-center">
            <div className="w-16 h-16 bg-gradient-real-estate rounded-full mx-auto mb-6 flex items-center justify-center shadow-button">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Real Estate Services</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your trusted partner in finding the perfect home or investment property. 
              Personalized service with deep market knowledge and commitment to your success.
            </p>
            <Button 
              onClick={handleContact}
              className="bg-gradient-real-estate hover:bg-gradient-real-estate/90 text-white shadow-button hover:shadow-hero transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4 mr-2" />
              Get My Contact Info
            </Button>
          </div>
        </Card>

        {/* Horizon App Section */}
        <Card className="group relative overflow-hidden bg-card-secondary shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2 border-0">
          <div className="absolute inset-0 bg-gradient-horizon opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
          <div className="relative p-8 text-center">
            <div className="w-16 h-16 bg-gradient-horizon rounded-full mx-auto mb-6 flex items-center justify-center shadow-button">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Horizon App</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Innovative mobile application designed to enhance your digital experience. 
              Cutting-edge technology meets user-friendly design for seamless interaction.
            </p>
            <Button 
              onClick={handleHorizonApp}
              className="bg-gradient-horizon hover:bg-gradient-horizon/90 text-white shadow-button hover:shadow-hero transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open Horizon App
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfileCard;