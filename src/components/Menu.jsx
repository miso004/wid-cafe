const Menu = () => {
  const menuCategories = [
    {
      title: "Breakfast & Brunch",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop",
      time: "8:00 - 12:00",
      items: [
        {
          name: "Russian Blini Stack",
          price: "₽850",
          description: "Traditional blini with caviar, sour cream, and fresh herbs"
        },
        {
          name: "Moscow Benedict",
          price: "₽950",
          description: "Poached eggs on toast with smoked salmon and hollandaise"
        },
        {
          name: "Pushkin Pancakes",
          price: "₽750",
          description: "Fluffy pancakes with honey, berries, and whipped cream"
        }
      ]
    },
    {
      title: "Signature Coffee",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
      time: "All Day",
      items: [
        {
          name: "Pushkin Espresso",
          price: "₽450",
          description: "Our signature single-origin blend with notes of chocolate and caramel"
        },
        {
          name: "Imperial Latte",
          price: "₽550",
          description: "Smooth espresso with steamed milk and a touch of vanilla"
        },
        {
          name: "Moscow Mocha",
          price: "₽650",
          description: "Rich chocolate and coffee blend topped with whipped cream"
        }
      ]
    },
    {
      title: "Dinner Specialties",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      time: "18:00 - 23:00",
      items: [
        {
          name: "Beef Stroganoff",
          price: "₽1,850",
          description: "Classic Russian dish with tender beef in rich cream sauce"
        },
        {
          name: "Siberian Salmon",
          price: "₽2,150",
          description: "Pan-seared salmon with caviar cream and seasonal vegetables"
        },
        {
          name: "Duck à l'Orange",
          price: "₽2,450",
          description: "French-inspired roasted duck with orange glaze and potato gratin"
        }
      ]
    }
  ]

  return (
    <section id="menu" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 bg-secondary text-secondary-foreground border border-border">
            Culinary Excellence
          </div>
          <h2 className="text-4xl font-semibold mb-6">Menu Highlights</h2>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            Discover our carefully curated selection of traditional Russian dishes 
            and international favorites, all prepared with the finest ingredients.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <div key={index} className="bg-card border border-border rounded-radius overflow-hidden transition-shadow hover:shadow-lg">
              <div className="relative">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-black bg-opacity-70 text-white">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
                  </svg>
                  {category.time}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-border pb-4 mb-4 last:border-b-0 last:mb-0 last:pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-medium">{item.name}</h4>
                        <span className="font-medium text-primary">{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-radius bg-primary text-primary-foreground hover:bg-opacity-90 transition-colors duration-200 mr-4">
            View Full Menu
          </a>
          <a href="#" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-radius border border-border text-foreground hover:bg-accent transition-colors duration-200">
            Wine List
          </a>
        </div>
      </div>
    </section>
  )
}

export default Menu 