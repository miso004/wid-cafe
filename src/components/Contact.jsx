const Contact = () => {
  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
        </svg>
      ),
      title: "Address",
      details: ["Tverskoy Boulevard, 26А", "Moscow, 125009", "Russia"]
    },
    {
      icon: (
        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 101.415-1.415L11 9.586V6z"/>
        </svg>
      ),
      title: "Phone",
      details: ["+7 (495) 739-0033", "+7 (495) 739-0034"]
    },
    {
      icon: (
        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
        </svg>
      ),
      title: "Email",
      details: ["reservations@cafepushkin.ru", "info@cafepushkin.ru"]
    },
    {
      icon: (
        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
        </svg>
      ),
      title: "Hours",
      details: ["Monday - Sunday", "8:00 AM - 11:00 PM", "Last orders: 10:30 PM"]
    }
  ]

  const transportation = [
    {
      type: "Metro",
      info: "Pushkinskaya Station (5 min walk)"
    },
    {
      type: "Bus",
      info: "Routes 15, 31, 39 (Stop: Tverskoy Blvd)"
    },
    {
      type: "Taxi",
      info: "Uber, Yandex, Gett available"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 bg-secondary text-secondary-foreground border border-border">
            Visit Us
          </div>
          <h2 className="text-4xl font-semibold mb-6">Location & Contact</h2>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            Located in the heart of Moscow's Tverskoy district, we're easily accessible 
            by metro, taxi, or foot. We look forward to welcoming you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-card border border-gray-200 rounded-lg overflow-hidden transition-shadow hover:shadow-lg">
                  <div className="p-6 pb-4">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 bg-primary bg-opacity-10 rounded-lg">
                        {info.icon}
                      </div>
                      <h4 className="text-lg font-medium">{info.title}</h4>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <a href="#" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-primary text-primary-foreground hover:bg-opacity-90 transition-colors duration-200 w-full">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"/>
                  </svg>
                  Make Reservation
                </a>
                <a href="#" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg border border-gray-200 text-foreground hover:bg-accent transition-colors duration-200 w-full">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-card border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-muted h-96 flex items-center justify-center rounded-lg relative">
              <div className="text-center">
                <svg className="w-16 h-16 text-muted-foreground mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                <p className="text-muted-foreground mb-4">Click to view our location on Google Maps</p>
                <a href="#" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-opacity-90 transition-colors duration-200">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
                  </svg>
                  Open in Maps
                </a>
              </div>
              
              {/* Address overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
                  </svg>
                  <div>
                    <p className="font-medium">Café Pushkin</p>
                    <p className="text-sm text-muted-foreground">
                      Tverskoy Boulevard, 26А, Moscow
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metro Information */}
        <div className="bg-card border border-gray-200 rounded-lg mt-12">
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Public Transportation</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {transportation.map((item, index) => (
                <div key={index}>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-2 bg-secondary text-secondary-foreground">
                    {item.type}
                  </div>
                  <p className="text-sm text-muted-foreground">{item.info}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 