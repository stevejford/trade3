"use client";

import { Search, MapPin } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

export default function HeroSection() {
  const [postcode, setPostcode] = useState('');
  const [radius, setRadius] = useState('5');

  const handleSearch = () => {
    // TODO: Implement postcode search
    console.log('Searching near:', postcode, 'within', radius, 'miles');
  };

  return (
    <div className="relative bg-gray-900 text-white">
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&auto=format&fit=crop&q=60')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: "0.2"
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Find Local Trades
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mb-8">
          Connect with trusted local tradespeople in your area. Plumbers, electricians, builders, and more - all just a postcode away.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
          <div className="relative flex-grow">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input 
              placeholder="Enter your postcode..." 
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              className="pl-10 py-6 bg-white/10 border-gray-700 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
            className="px-4 py-2 rounded-md bg-white/10 border-gray-700 text-white"
          >
            <option value="5">Within 5 miles</option>
            <option value="10">Within 10 miles</option>
            <option value="20">Within 20 miles</option>
            <option value="50">Within 50 miles</option>
          </select>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={handleSearch}
          >
            Find Trades
          </Button>
        </div>
      </div>
    </div>
  );
}