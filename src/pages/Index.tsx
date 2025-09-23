import ProfileCard from "@/components/ProfileCard";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background-secondary to-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f8fafc' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10">
        {/* Main Content */}
        <div className="container mx-auto py-12 md:py-20">
          <ProfileCard 
            name="John Doe"
            title="Real Estate Professional & App Developer"
            bio="Passionate about helping people find their dream homes and creating innovative digital solutions. With years of experience in real estate and a passion for technology, I bridge the gap between traditional service and modern innovation."
            phone="(555) 123-4567"
            email="john.doe@example.com"
          />
          
          {/* Social Links */}
          <div className="max-w-2xl mx-auto px-4">
            <SocialLinks />
          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 py-8 text-center border-t border-border/50 bg-card/50 backdrop-blur-sm">
          <p className="text-sm text-muted-foreground">
            © 2024 John Doe. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;