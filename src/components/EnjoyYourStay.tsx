
const EnjoyYourStay = () => {
  return (
    <section className="py-20 bg-sand-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Enjoy Your Stay
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in the authentic Greek island experience
          </p>
        </div>

        {/* First Section - Relax by the Aegean */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div 
            className="h-96 bg-cover bg-center rounded-2xl shadow-lg"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
            }}
          ></div>
          <div className="space-y-6">
            <h3 className="font-playfair text-3xl font-bold text-gray-800">
              Relax by the Aegean Breeze
            </h3>
            <p className="font-inter text-lg text-gray-600 leading-relaxed">
              Step onto your private terrace and feel the gentle Mediterranean wind carry the scent of wild herbs and sea salt. Watch the sun paint the sky in shades of gold and rose as fishing boats return to harbor, their lights twinkling like stars on the water.
            </p>
            <p className="font-inter text-lg text-gray-600 leading-relaxed">
              Our infinity pool seems to merge with the horizon, creating the perfect spot for morning swims or evening contemplation. The sound of waves below provides nature's own soundtrack to your island retreat.
            </p>
          </div>
        </div>

        {/* Second Section - Entertain in Style */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:order-2">
            <h3 className="font-playfair text-3xl font-bold text-gray-800">
              Entertain in Style
            </h3>
            <p className="font-inter text-lg text-gray-600 leading-relaxed">
              The villa's open-plan design seamlessly blends indoor and outdoor living, featuring handcrafted furniture, local ceramics, and textiles that celebrate Greek artisanship. Natural stone walls and whitewashed surfaces create the perfect backdrop for memorable gatherings.
            </p>
            <p className="font-inter text-lg text-gray-600 leading-relaxed">
              Host sunset dinners on the spacious terrace, where the outdoor kitchen makes al fresco dining effortless. The gentle evening light filtering through olive branches creates an atmosphere that transforms every meal into a celebration.
            </p>
          </div>
          <div 
            className="h-96 bg-cover bg-center rounded-2xl shadow-lg md:order-1"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default EnjoyYourStay;
