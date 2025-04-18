const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {/* Brand Section */}
            <div>
              <h1 className="text-2xl font-bold text-white mb-4">LITHO</h1>
              <p>We create digital experiences for brands companies by using creativity.</p>
              <p className="mt-4 text-gray-400">© Copyright 2025 Litho</p>
            </div>
  
            {/* Links Sections */}
            <div>
              <h2 className="text-white text-lg font-semibold mb-4">Company</h2>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About company</a></li>
                <li><a href="#" className="hover:text-white">Company services</a></li>
                <li><a href="#" className="hover:text-white">Job opportunities</a></li>
                <li><a href="#" className="hover:text-white">Contact us</a></li>
              </ul>
            </div>
  
            <div>
              <h2 className="text-white text-lg font-semibold mb-4">Customer</h2>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Client support</a></li>
                <li><a href="#" className="hover:text-white">Pricing packages</a></li>
                <li><a href="#" className="hover:text-white">Company history</a></li>
                <li><a href="#" className="hover:text-white">Our process</a></li>
              </ul>
            </div>
  
            <div>
              <h2 className="text-white text-lg font-semibold mb-4">Additional</h2>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Our story</a></li>
                <li><a href="#" className="hover:text-white">Who we are</a></li>
                <li><a href="#" className="hover:text-white">Our process</a></li>
                <li><a href="#" className="hover:text-white">Latest news</a></li>
              </ul>
            </div>
  
            <div>
              <h2 className="text-white text-lg font-semibold mb-4">Services</h2>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Brand experience</a></li>
                <li><a href="#" className="hover:text-white">e-Commerce website</a></li>
                <li><a href="#" className="hover:text-white">Content writing</a></li>
                <li><a href="#" className="hover:text-white">Marketing strategy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  