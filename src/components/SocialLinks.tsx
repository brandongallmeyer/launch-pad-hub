import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Instagram, 
  Facebook
} from "lucide-react";
const homesForHeroesLogo = "/assets/homes-for-heroes-logo.png";
const firmLogoWhite = "/assets/firm-logo-white.png";

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  url: string;
  gradient: string;
  hoverColor: string;
}

const SocialLinks = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      url: "https://www.instagram.com/brandon_gallmeyer/",
      gradient: "from-accent-green to-secondary-bright",
      hoverColor: "hover:shadow-[0_0_20px_hsl(120_85%_35%_/_0.3)]"
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      label: "Facebook", 
      url: "https://www.facebook.com/brandon.gallmeyer/",
      gradient: "from-secondary-bright to-accent-green",
      hoverColor: "hover:shadow-[0_0_20px_hsl(270_100%_60%_/_0.3)]"
    },
    {
      icon: <img src={firmLogoWhite} alt="Firm Logo" className="w-8 h-8 object-contain brightness-0" />,
      label: "BHG Website",
      url: "https://bhgmckenzierealty.com/directory/agents/brandon-gallmeyer", 
      gradient: "from-accent-green to-secondary-bright",
      hoverColor: "hover:shadow-[0_0_20px_hsl(120_85%_35%_/_0.3)]"
    },
    {
      icon: <img src={homesForHeroesLogo} alt="Homes for Heroes" className="w-6 h-6 object-contain brightness-0" />,
      label: "Homes for Heroes",
      url: "https://bhgmckenzierealty.com/homes-for-heroes",
      gradient: "from-accent-green to-secondary-bright",
      hoverColor: "hover:shadow-[0_0_20px_hsl(270_100%_60%_/_0.3)]"
    }
  ];

  return (
    <Card className="relative overflow-hidden bg-gradient-card backdrop-blur-xl border border-accent-green/30 shadow-card p-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glass opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-green via-secondary-bright to-accent-green opacity-60"></div>
      
      <div className="relative">
        <h3 className="text-2xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-accent-green to-secondary-bright bg-clip-text text-transparent">
            Connect With Me
          </span>
        </h3>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {socialLinks.map((link, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`group relative overflow-hidden flex flex-col gap-3 h-auto py-10 px-4 text-muted-foreground transition-all duration-300 hover:bg-transparent border border-border hover:border-accent-green/40 ${link.hoverColor} hover:scale-110 hover:text-foreground`}
              onClick={() => window.open(link.url, "_blank")}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Icon Container */}
              <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center text-background shadow-button group-hover:shadow-lg transition-all duration-300`}>
                {link.icon}
              </div>
              
              <span className="text-sm font-medium">{link.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default SocialLinks;