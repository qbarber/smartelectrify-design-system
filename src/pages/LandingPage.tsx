import { Button } from '../src/primitives/Button';
import { Card, CardContent } from '../src/primitives/Card';
import { MapPinIcon, HomeIcon, TrendingUpIcon, ZapIcon, CalendarIcon, DollarSignIcon } from 'lucide-react';
import heroImage from '../assets/images/solar-home.jpg';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <section className="px-6 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-6">
                Calculate Your Home Electrification Savings
              </h1>
              <p className="text-xl text-stone-600 mb-8">
                Get personalized ROI, incentives, and carbon impact in 2 minutes
              </p>
              <Button variant="primary" size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Start Free Calculator
              </Button>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Modern home with solar panels" 
                className="aspect-video rounded-xl object-cover shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">Enter Your Address</h3>
              <p className="text-stone-600">
                We use your location to find local utility rates, incentives, and solar potential
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <HomeIcon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">Configure Your Home</h3>
              <p className="text-stone-600">
                Tell us about your current heating system and energy usage
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <TrendingUpIcon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">See Your Savings</h3>
              <p className="text-stone-600">
                Get a personalized report with costs, savings, and environmental impact
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 text-center mb-12">
            Why Choose Our Calculator
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent>
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                  <ZapIcon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">
                  Grid-Aware Optimization
                </h3>
                <p className="text-stone-600">
                  Time your energy usage for maximum savings and minimum carbon impact
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                  <CalendarIcon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">
                  15-Year Projections
                </h3>
                <p className="text-stone-600">
                  See long-term cost comparisons between fossil fuels and electrification
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                  <DollarSignIcon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">
                  Federal + State Incentives
                </h3>
                <p className="text-stone-600">
                  Automatic calculations for all available rebates and tax credits
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 py-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-stone-500">
            Powered by data from <span className="font-semibold">NREL</span> & <span className="font-semibold">Rewiring America</span>
          </p>
        </div>
      </section>

      <section className="px-6 py-16 bg-emerald-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to electrify your home?
          </h2>
          <p className="text-emerald-100 text-lg mb-8">
            Start calculating now and see how much you could save
          </p>
          <Button variant="primary" size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-white">
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
