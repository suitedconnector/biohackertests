import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Search, Star, ExternalLink, Filter, Heart, Zap, Brain, Activity } from 'lucide-react'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Sample data for biohacker tests and kits
  const tests = [
    {
      id: 1,
      name: "Comprehensive Hormone Panel (DUTCH)",
      provider: "Precision Analytical",
      category: "Hormones",
      price: "$399",
      rating: 4.8,
      description: "Advanced hormone testing using dried urine samples to assess sex hormones, adrenal function, and metabolites.",
      features: ["24-hour hormone profile", "Metabolite analysis", "Easy at-home collection"],
      affiliate: true,
      popular: true
    },
    {
      id: 2,
      name: "Organic Acids Test",
      provider: "Great Plains Laboratory",
      category: "Metabolism",
      price: "$299",
      rating: 4.6,
      description: "Comprehensive metabolic assessment measuring organic acids in urine to evaluate cellular function and nutrient status.",
      features: ["Metabolic efficiency", "Nutrient deficiencies", "Dysbiosis detection"],
      affiliate: true,
      popular: false
    },
    {
      id: 3,
      name: "DNA Health Test Kit",
      provider: "SelfDecode",
      category: "Genetics",
      price: "$418",
      rating: 4.7,
      description: "Advanced DNA analysis with 1250+ health reports and personalized recommendations based on genetic markers.",
      features: ["1250+ health reports", "AI health coach", "Personalized recommendations"],
      affiliate: true,
      popular: true
    },
    {
      id: 4,
      name: "Biological Age Test",
      provider: "GlycanAge",
      category: "Longevity",
      price: "$189",
      rating: 4.5,
      description: "Simple finger-prick test to measure biological age and inflammatory status using glycan analysis.",
      features: ["Biological age assessment", "Inflammation markers", "3-week results"],
      affiliate: true,
      popular: false
    },
    {
      id: 5,
      name: "Comprehensive Biomarker Panel",
      provider: "Biohackr Health",
      category: "General Health",
      price: "$695",
      rating: 4.9,
      description: "Extensive blood panel measuring 80+ biomarkers for longevity, cardiovascular health, and metabolic function.",
      features: ["80+ biomarkers", "Longevity markers", "Telehealth consultation"],
      affiliate: true,
      popular: true
    },
    {
      id: 6,
      name: "Gut Microbiome Test",
      provider: "Viome",
      category: "Gut Health",
      price: "$199",
      rating: 4.4,
      description: "Advanced microbiome analysis with personalized nutrition and supplement recommendations.",
      features: ["Microbiome analysis", "Personalized nutrition", "Supplement recommendations"],
      affiliate: true,
      popular: false
    }
  ]

  const categories = [
    { id: 'all', name: 'All Tests', icon: Activity },
    { id: 'Hormones', name: 'Hormones', icon: Heart },
    { id: 'Genetics', name: 'Genetics', icon: Zap },
    { id: 'Metabolism', name: 'Metabolism', icon: Activity },
    { id: 'Longevity', name: 'Longevity', icon: Brain },
    { id: 'General Health', name: 'General Health', icon: Heart },
    { id: 'Gut Health', name: 'Gut Health', icon: Activity }
  ]

  const filteredTests = tests.filter(test => {
    const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         test.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         test.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || test.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <Zap className="h-8 w-8 text-indigo-600" />
                <h1 className="text-2xl font-bold text-gray-900">BioHacker Tests</h1>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-900">Tests</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Reviews</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Guides</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Discover the Best Biohacking Tests & Kits
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Find comprehensive reviews, comparisons, and recommendations for biohacker tests and test kits. 
            Make data-driven decisions about your health optimization journey.
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for tests, providers, or health categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center space-x-2"
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{category.name}</span>
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Test Cards */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTests.map((test) => (
              <Card key={test.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {test.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600 mt-1">
                        {test.provider}
                      </CardDescription>
                    </div>
                    {test.popular && (
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        Popular
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(test.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({test.rating})</span>
                    <Badge variant="outline">{test.category}</Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{test.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {test.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-indigo-600">{test.price}</span>
                    <Button className="flex items-center space-x-2">
                      <span>Learn More</span>
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredTests.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No tests found matching your criteria.</p>
              <p className="text-gray-400 text-sm mt-2">Try adjusting your search or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="h-6 w-6 text-indigo-400" />
                <span className="text-xl font-bold">BioHacker Tests</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted source for biohacking test reviews and recommendations.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Hormone Tests</a></li>
                <li><a href="#" className="hover:text-white">DNA Testing</a></li>
                <li><a href="#" className="hover:text-white">Metabolic Tests</a></li>
                <li><a href="#" className="hover:text-white">Gut Health</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Test Guides</a></li>
                <li><a href="#" className="hover:text-white">Reviews</a></li>
                <li><a href="#" className="hover:text-white">Comparisons</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 BioHacker Tests Directory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

