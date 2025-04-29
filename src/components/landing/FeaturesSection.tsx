
import { FileText, Box, Users, ChartBar, Settings, Cube } from 'lucide-react';

const features = [
  {
    name: 'Invoice Management',
    description: 'Create, edit, and track invoices. Send professional invoices to your customers.',
    icon: FileText,
  },
  {
    name: 'Lot Management',
    description: 'Group your inventory into lots. Track inventory levels and movements.',
    icon: Box,
  },
  {
    name: 'Customer & Vendor Management',
    description: 'Manage your customer and vendor relationships. Store contact information and track interactions.',
    icon: Users,
  },
  {
    name: 'Payment Tracking',
    description: 'Track installment-based payments. Get notified when payments are due.',
    icon: ChartBar,
  },
  {
    name: 'Customizable Branding',
    description: 'Customize your platform with your branding. Upload logo, choose color scheme, and edit about info.',
    icon: Settings,
  },
  {
    name: '3D Interactive Dashboard',
    description: 'Visualize your data with interactive 3D charts and graphs. Make informed business decisions.',
    icon: Cube,
  }
];

const FeaturesSection = () => {
  return (
    <div className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Powerful Features</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Everything you need to manage your wholesale business efficiently
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="card-3d bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-xl"
            >
              <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{feature.name}</h3>
              <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
