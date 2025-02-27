import * as React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import links from './links';

export default function Footer() {
  return (
    <footer className="bg-primary text-foreground">
      <div className="container max-w-screen-xl w-full mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-sm text-muted-foreground">
              Your go-to platform for discovering, sharing, and saving recipes from all over the
              world.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-sm hover:underline">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-sm text-muted-foreground">
              Brgy.Mambalite Daet, Camarines Norte, Philippines
              <br />
              Email: info@example.com
              <br />
              Phone: +63 945 137 9343
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="flex-grow" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </div>
          <div className="flex space-x-4">
            {[Facebook, Twitter, Instagram, Linkedin, Github].map((Icon, index) => (
              <a key={index} href="#" className="text-muted-foreground hover:text-foreground">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
