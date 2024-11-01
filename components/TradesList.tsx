"use client";

import { Phone, Mail, MapPin, Star, Clock, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const trades = [
  {
    id: 1,
    name: "Mike's Plumbing Services",
    category: "Plumber",
    rating: 4.8,
    reviews: 127,
    description: "Emergency plumbing, installations & repairs. Available 24/7.",
    address: "Serving SE1, London",
    distance: "1.2 miles away",
    phone: "020 1234 5678",
    email: "mike@mikesplumbing.co.uk",
    availability: "Available Today",
    image: "https://images.unsplash.com/photo-1638275963711-2740c2c34e98?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    name: "Elite Electrical Solutions",
    category: "Electrician",
    rating: 4.9,
    reviews: 89,
    description: "NICEIC registered electrician. Domestic & commercial work.",
    address: "Serving SE15, London",
    distance: "2.5 miles away",
    phone: "020 2345 6789",
    email: "info@eliteelectrical.co.uk",
    availability: "Next Day Available",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    name: "Smith & Sons Building",
    category: "Builder",
    rating: 4.7,
    reviews: 156,
    description: "Family-run building company. Extensions & renovations.",
    address: "Serving SE8, London",
    distance: "3.1 miles away",
    phone: "020 3456 7890",
    email: "info@smithandsons.co.uk",
    availability: "Book from Monday",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=60"
  }
];

export default function TradesList() {
  return (
    <Tabs defaultValue="all" className="mb-12">
      <TabsList>
        <TabsTrigger value="all">All Trades</TabsTrigger>
        <TabsTrigger value="available">Available Today</TabsTrigger>
        <TabsTrigger value="toprated">Top Rated</TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trades.map((trade) => (
            <Card key={trade.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={trade.image} 
                  alt={trade.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{trade.name}</h3>
                    <Badge variant="outline">{trade.category}</Badge>
                  </div>
                  <Button variant="ghost" size="icon">
                    <ArrowUpRight className="h-5 w-5" />
                  </Button>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{trade.rating}</span>
                  <span className="text-gray-500">({trade.reviews} reviews)</span>
                </div>
                <p className="text-gray-600 mb-4">{trade.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{trade.address}</span>
                    <span className="text-blue-600">({trade.distance})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{trade.availability}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    {trade.phone}
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    {trade.email}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}