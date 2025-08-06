import { Palette, Droplet, Layers, Star, Info, Lightbulb, Sparkles, Eye } from 'lucide-react'

const items = [
  {
    icon: <Palette className="w-7 h-7 text-brand-plum" />, 
    title: 'Color Season Classification',
    description: 'Identification of your specific color season within the 12-season system'
  },
  {
    icon: <Droplet className="w-7 h-7 text-brand-plum" />, 
    title: 'Undertone Analysis',
    description: 'Determination of your warm, cool, or neutral undertone classification'
  },
  {
    icon: <Layers className="w-7 h-7 text-brand-plum" />, 
    title: 'Contrast & Depth Assessment',
    description: 'Analysis of your natural contrast levels and optimal color intensity'
  },
  {
    icon: <Star className="w-7 h-7 text-brand-plum" />, 
    title: 'Optimal Color Palette',
    description: 'Comprehensive selection of colors that enhance your natural features'
  },
  {
    icon: <Info className="w-7 h-7 text-brand-plum" />, 
    title: 'Color Theory Explanation',
    description: 'Scientific rationale behind your personalized color recommendations'
  },
  {
    icon: <Lightbulb className="w-7 h-7 text-brand-plum" />, 
    title: 'Application Guidelines',
    description: 'Professional guidance for implementing your color palette effectively'
  },
  {
    icon: <Sparkles className="w-7 h-7 text-brand-plum" />, 
    title: 'Styling Recommendations',
    description: 'Customized styling suggestions based on your color profile'
  },
  {
    icon: <Eye className="w-7 h-7 text-brand-plum" />, 
    title: 'Virtual Color Preview',
    description: 'Digital visualization of color applications and combinations'
  },
]

const WhatWillYouGetSection = () => (
  <section
    className="py-20"
    style={{
      background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #FFE6D1 0%, #F8F3F9 100%)',
    }}
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Comprehensive Analysis Components
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="mb-4 flex items-center justify-center">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-peachLight">
                {item.icon}
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-brand-plum">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default WhatWillYouGetSection