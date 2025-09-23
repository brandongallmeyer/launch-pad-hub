import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Mail, 
  Globe 
} from "lucide-react";

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
      gradient: "from-accent-pink to-accent-orange",
      hoverColor: "hover:shadow-[0_0_20px_hsl(330_81%_60%_/_0.5)]"
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      label: "Facebook", 
      url: "https://www.facebook.com/brandon.gallmeyer/",
      gradient: "from-accent-blue to-primary",
      hoverColor: "hover:shadow-[0_0_20px_hsl(200_98%_39%_/_0.5)]"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: "Twitter",
      url: "https://twitter.com/yourusername", 
      gradient: "from-primary-bright to-accent-blue",
      hoverColor: "hover:shadow-neon-cyan"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      gradient: "from-accent-blue to-secondary",
      hoverColor: "hover:shadow-neon-purple"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Website",
      url: "https://bhgmckenzierealty.com/homes-for-heroes",
      gradient: "from-accent-green to-primary",
      hoverColor: "hover:shadow-[0_0_20px_hsl(142_71%_45%_/_0.5)]"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email", 
      url: "mailto:your.email@example.com",
      gradient: "from-accent-orange to-accent-pink",
      hoverColor: "hover:shadow-neon-orange"
    }
  ];

  return (
    <Card className="relative overflow-hidden bg-gradient-card backdrop-blur-xl border border-border-bright shadow-card p-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glass opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-bright via-accent-pink to-secondary-bright opacity-60"></div>
      
      <div className="relative">
        <h3 className="text-2xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-primary-bright to-secondary-bright bg-clip-text text-transparent">
            Connect With Me
          </span>
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {socialLinks.map((link, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`group relative overflow-hidden flex flex-col gap-3 h-auto py-6 px-4 text-muted-foreground transition-all duration-300 hover:bg-transparent border border-border hover:border-border-bright ${link.hoverColor} hover:scale-110 hover:text-foreground`}
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