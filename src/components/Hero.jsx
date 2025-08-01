const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center" 
             style={{ backgroundImage: 'url("/cafe-bg.jpg")' }}>
              <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 bg-white/20 text-white border border-white/30 slide-up">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          4.8 Rating • Premium Experience
        </div>
        
        <h1 className="text-7xl font-semibold mb-6 text-white md:text-8xl slide-up-delay-1">
          Cafe WIDSoft
        </h1>
        
        <p className="text-2xl mb-8 text-white text-opacity-90 max-w-2xl mx-auto slide-up-delay-2">
        Enjoy a historic and delicious coffee experience in Jeonju, a city steeped in tradition. Join the best baristas.
        </p>

        <div className="flex flex-col items-center gap-4 mb-8 slide-up-delay-3">
          <div className="flex items-center gap-2 text-white text-opacity-90">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            <span>전북특별자치도 전주시 완산구 효동2길 32</span>
          </div>
          <div className="flex items-center gap-2 text-white text-opacity-90">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            <span>Open Daily 8:00 - 23:00</span>
          </div>
        </div>

        <div className="flex flex-row gap-4 items-center justify-center slide-up-delay-4">
          <a href="#menu" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-white text-black hover:bg-gray-100 transition-colors duration-200">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 2a1 1 0 000 2h1.5l.25 1.5H5.5a1 1 0 100 2h1.75l.25 1.5H6.25a1 1 0 100 2h2l.5 3H7.5a1 1 0 100 2h2l.25 1.5a1 1 0 001.75.25L11.25 16h2l.25 1.5a1 1 0 001.75-.25L14.75 16h1.75a1 1 0 100-2h-2l-.5-3h1.25a1 1 0 100-2h-1.75l-.25-1.5h1.25a1 1 0 100-2h-1.75L12.5 4.5a1 1 0 00-1.75-.25L10.5 5.5h-2L8.25 4a1 1 0 00-1.75.25L6.75 5.5H5zM9.5 7.5h2l.5 3h-3l.5-3z"/>
            </svg>
            Reserve a Table
          </a>
          <a href="#menu" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg border border-white text-white hover:bg-white hover:text-black transition-colors duration-200">
            View Menu
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-opacity-70 animate-bounce">
        <div className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white bg-opacity-70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero 