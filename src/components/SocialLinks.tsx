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
  color: string;
}

const SocialLinks = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      url: "https://instagram.com/yourusername",
      color: "hover:text-pink-500"
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: "Facebook", 
      url: "https://facebook.com/yourusername",
      color: "hover:text-blue-600"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      url: "https://twitter.com/yourusername", 
      color: "hover:text-blue-400"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-700"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: "Website",
      url: "https://your-website.com",
      color: "hover:text-primary"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email", 
      url: "mailto:your.email@example.com",
      color: "hover:text-green-600"
    }
  ];

  return (
    <Card className="bg-card-secondary shadow-card border-0 p-6">
      <h3 className="text-lg font-semibold text-center mb-4 text-foreground">
        Connect With Me
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {socialLinks.map((link, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`flex flex-col gap-1 h-auto py-3 px-2 text-muted-foreground transition-all duration-200 hover:bg-primary/5 ${link.color} hover:scale-105`}
            onClick={() => window.open(link.url, "_blank")}
          >
            {link.icon}
            <span className="text-xs">{link.label}</span>
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default SocialLinks;