const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8" style={{ gridTemplateColumns: '2fr 1fr 1fr' }}>
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 2a1 1 0 000 2h1.5l.25 1.5H5.5a1 1 0 100 2h1.75l.25 1.5H6.25a1 1 0 100 2h2l.5 3H7.5a1 1 0 100 2h2l.25 1.5a1 1 0 001.75.25L11.25 16h2l.25 1.5a1 1 0 001.75-.25L14.75 16h1.75a1 1 0 100-2h-2l-.5-3h1.25a1 1 0 100-2h-1.75l-.25-1.5h1.25a1 1 0 100-2h-1.75L12.5 4.5a1 1 0 00-1.75-.25L10.5 5.5h-2L8.25 4a1 1 0 00-1.75.25L6.75 5.5H5z"/>
              </svg>
              <h3 className="text-2xl font-semibold">Café Pushkin</h3>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Moscow's premier dining destination since 1999. Experience the perfect blend 
              of Russian tradition and international cuisine in the heart of the city.
            </p>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, index) => (
                <svg key={index} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
              <span className="ml-2 text-sm text-muted-foreground">4.8/5 on Google</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#menu" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Menu</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Reservations</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Private Events</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Tverskoy Boulevard, 26А</li>
              <li>Moscow, 125009</li>
              <li>+7 (495) 739-0033</li>
              <li>info@cafepushkin.ru</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Café Pushkin. All rights reserved. Made with ❤️ in Moscow.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 