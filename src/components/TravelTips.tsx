import React from 'react';
import { Compass, Camera, Heart, Shield, Wallet, Users } from 'lucide-react';

const tips = [
  {
    icon: Compass,
    title: 'Plan Ahead',
    description: 'Research your destination, check visa requirements, and book accommodations early for better deals.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Camera,
    title: 'Capture Memories',
    description: 'Document your journey with photos and notes. Create lasting memories of your adventures.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Heart,
    title: 'Embrace Culture',
    description: 'Try local cuisine, learn basic phrases, and respect local customs for authentic experiences.',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Shield,
    title: 'Stay Safe',
    description: 'Get travel insurance, keep copies of important documents, and stay aware of your surroundings.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Wallet,
    title: 'Budget Wisely',
    description: 'Track expenses, use local currency, and look for free activities to make your money last longer.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Users,
    title: 'Connect Locally',
    description: 'Meet locals, join group tours, and use travel apps to enhance your social experience.',
    color: 'from-teal-500 to-teal-600'
  }
];

export const TravelTips: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Travel
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> Smart</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential tips and insights to make your travels more enjoyable, safe, and memorable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => {
            const IconComponent = tip.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${tip.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tip.title}</h3>
                <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of travelers who use TravelMate to plan their perfect trips
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105 shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};