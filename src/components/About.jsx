const About = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-10 gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 bg-secondary text-secondary-foreground border border-border">Est. 1999</div>
            <h2 className="text-4xl font-semibold mb-6">시대를 이어온 전주의 품격</h2>
            <p className="text-lg mb-8 leading-relaxed text-muted-foreground">
				전라북도 전주의 풍류 가득한 한옥마을 인근에 자리한 cafe widsoft 는 오랜 시간 전통과 현대가 공존하는 공간으로 사랑받아 왔습니다.
				고즈넉한 한옥의 정취와 세련된 인테리어가 어우러진 이곳은, 전주의 깊은 미감(味感)을 현대적인 감각으로 재해석한 특별한 공간입니다.
				전통 차와 디저트, 로컬 재료를 활용한 브런치와 커피까지— 
            </p>
            <p className="text-lg mb-8 leading-relaxed text-muted-foreground">
            모든 메뉴는 전주가 품고 있는 자연, 예술, 미식의 이야기를 담고 있으며, 방문하시는 모든 분들께 따뜻한 휴식과 기억에 남는 경험을 선사합니다.
            </p>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-lg p-3 border-0 shadow-none">
                <div className="p-3">
                  <svg className="w-6 h-6 text-primary mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 2a1 1 0 000 2h1.5l.25 1.5H5.5a1 1 0 100 2h1.75l.25 1.5H6.25a1 1 0 100 2h2l.5 3H7.5a1 1 0 100 2h2l.25 1.5a1 1 0 001.75.25L11.25 16h2l.25 1.5a1 1 0 001.75-.25L14.75 16h1.75a1 1 0 100-2h-2l-.5-3h1.25a1 1 0 100-2h-1.75l-.25-1.5h1.25a1 1 0 100-2h-1.75L12.5 4.5a1 1 0 00-1.75-.25L10.5 5.5h-2L8.25 4a1 1 0 00-1.75.25L6.75 5.5H5z"/>
                  </svg>
                  <h4 className="text-lg font-medium mb-2">Artisanal Coffee</h4>
                  <p className="text-sm text-muted-foreground">Expertly roasted beans from the finest coffee regions</p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 border-0 shadow-none">
                <div className="p-3">
                  <svg className="w-6 h-6 text-primary mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM9 5a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 11-2 0V5h-1a1 1 0 01-1-1zM7 10a1 1 0 011-1h4a1 1 0 011 1v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1z"/>
                  </svg>
                  <h4 className="text-lg font-medium mb-2">Historic Atmosphere</h4>
                  <p className="text-sm text-muted-foreground">18th-century elegance meets modern comfort</p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 border-0 shadow-none">
                <div className="p-3">
                  <svg className="w-6 h-6 text-primary mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  <h4 className="text-lg font-medium mb-2">Award Winning</h4>
                  <p className="text-sm text-muted-foreground">Recognized as Moscow's finest dining experience</p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 border-0 shadow-none">
                <div className="p-3">
                  <svg className="w-6 h-6 text-primary mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                  </svg>
                  <h4 className="text-lg font-medium mb-2">Made with Love</h4>
                  <p className="text-sm text-muted-foreground">Every dish crafted with passion and tradition</p>
                </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="relative lg:col-span-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=500&fit=crop" 
                     alt="Café Interior" className="w-full h-48 object-cover rounded-lg" />
                <img src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400&h=300&fit=crop" 
                     alt="Coffee Preparation" className="w-full h-48 object-cover rounded-lg" />
              </div>
              <div className="space-y-4 mt-8">
                <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop" 
                     alt="Delicious Food" className="w-full h-48 object-cover rounded-lg" />
                <img src="https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?w=400&h=500&fit=crop" 
                     alt="Cozy Atmosphere" className="w-full h-48 object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 