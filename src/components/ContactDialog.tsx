import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Copy, ExternalLink } from "lucide-react";
import { useState } from "react";

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
  phone: string;
  email: string;
}

const ContactDialog = ({ isOpen, onClose, phone, email }: ContactDialogProps) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const formatPhoneNumber = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  };

  const copyToClipboard = async (text: string, type: 'phone' | 'email') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'phone') {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      } else {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleCall = () => {
    window.location.href = `tel:${phone}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-gradient-card backdrop-blur-xl border border-border-bright shadow-card">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            <span className="bg-gradient-to-r from-primary-bright to-secondary-bright bg-clip-text text-transparent">
              Contact Information
            </span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 p-4">
          {/* Phone Section */}
          <div className="relative overflow-hidden bg-gradient-glass rounded-xl p-6 border border-border-bright">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-green/10 to-primary/10"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-real-estate rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-background" />
                </div>
                <span className="text-lg font-semibold text-foreground">Office Phone</span>
              </div>
              
              <div className="text-2xl font-bold text-primary-bright mb-4">
                {formatPhoneNumber(phone)}
              </div>
              
              <div className="flex gap-2">
                <Button
                  onClick={handleCall}
                  className="flex-1 bg-gradient-real-estate hover:bg-gradient-real-estate text-background"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button
                  onClick={() => copyToClipboard(phone, 'phone')}
                  variant="outline"
                  className="px-3 border-border-bright hover:bg-accent-green/10"
                >
                  {copiedPhone ? (
                    <span className="text-accent-green">✓</span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Email Section */}
          <div className="relative overflow-hidden bg-gradient-glass rounded-xl p-6 border border-border-bright">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-secondary/10"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-horizon rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-background" />
                </div>
                <span className="text-lg font-semibold text-foreground">Email</span>
              </div>
              
              <div className="text-xl font-bold text-primary-bright mb-4 break-all">
                {email}
              </div>
              
              <div className="flex gap-2">
                <Button
                  onClick={handleEmail}
                  className="flex-1 bg-gradient-horizon hover:bg-gradient-horizon text-background"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
                <Button
                  onClick={() => copyToClipboard(email, 'email')}
                  variant="outline"
                  className="px-3 border-border-bright hover:bg-accent-blue/10"
                >
                  {copiedEmail ? (
                    <span className="text-accent-blue">✓</span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;