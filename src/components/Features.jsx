const Features = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 bg-secondary text-secondary-foreground border border-border">Premium Amenities</div>
          <h2 className="text-4xl font-semibold mb-6">한옥의 고즈넉한 멋과 현대적인 미감을 담아 전주에서 특별한 휴식을</h2>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            From artisanal coffee to fine dining, we've thoughtfully designed every aspect 
            of your visit to exceed your expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="bg-white border border-gray-300 rounded-lg overflow-hidden transition-shadow hover:shadow-lg text-center p-6">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"/>
              </svg>
            </div>
            <h4 className="text-lg font-medium mb-2">Free WiFi</h4>
            <p className="text-sm text-muted-foreground">High-speed internet throughout the cafe</p>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg overflow-hidden transition-shadow hover:shadow-lg text-center p-6">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z"/>
              </svg>
            </div>
            <h4 className="text-lg font-medium mb-2">Valet Parking</h4>
            <p className="text-sm text-muted-foreground">Complimentary valet service for guests</p>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg overflow-hidden transition-shadow hover:shadow-lg text-center p-6">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12c0-1.636-.494-3.154-1.342-4.414a1 1 0 010-1.414z"/>
              </svg>
            </div>
            <h4 className="text-lg font-medium mb-2">Live Piano</h4>
            <p className="text-sm text-muted-foreground">Evening performances by local musicians</p>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg overflow-hidden transition-shadow hover:shadow-lg text-center p-6">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 2a1 1 0 000 2h1.5l.25 1.5H5.5a1 1 0 100 2h1.75l.25 1.5H6.25a1 1 0 100 2h2l.5 3H7.5a1 1 0 100 2h2l.25 1.5a1 1 0 001.75.25L11.25 16h2l.25 1.5a1 1 0 001.75-.25L14.75 16h1.75a1 1 0 100-2h-2l-.5-3h1.25a1 1 0 100-2h-1.75l-.25-1.5h1.25a1 1 0 100-2h-1.75L12.5 4.5a1 1 0 00-1.75-.25L10.5 5.5h-2L8.25 4a1 1 0 00-1.75.25L6.75 5.5H5z"/>
              </svg>
            </div>
            <h4 className="text-lg font-medium mb-2">Specialty Coffee</h4>
            <p className="text-sm text-muted-foreground">Single-origin beans roasted in-house daily</p>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg overflow-hidden transition-shadow hover:shadow-lg text-center p-6">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"/>
              </svg>
            </div>
            <h4 className="text-lg font-medium mb-2">Fine Dining</h4>
            <p className="text-sm text-muted-foreground">Russian & international cuisine</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features 