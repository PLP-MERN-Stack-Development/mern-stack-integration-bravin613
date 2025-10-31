import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col py-12 md:flex-row items-center justify-between">
        {/* About Section */}
        <div className="w-full items-center flex flex-col justify-center px-2 sm:w-1/3 gap-2 text-center sm:text-left">
          <h1 className="text-xl font-bold text-gray-700">About DevTide</h1>
          <p className="text-gray-600">
            DevTide is a space where developers, tech enthusiasts, and digital
            creators ride the wave of innovation. From coding insights to
            productivity tips, we share the latest trends shaping the tech
            world.
          </p>
          <h4 className="text-lg font-normal text-gray-700 mt-2">
            Email: bravinmusali327@gmail.com
          </h4>
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="text-xl font-bold text-gray-700 mb-5">Quick Links</h1>
          <ul className="flex flex-col gap-2">
            <Link className="cursor-pointer hover:text-black text-gray-700" to="/">
              Blogs
            </Link>
            <Link className="cursor-pointer hover:text-black text-gray-700" to="/about">
              About
            </Link>
            <Link className="cursor-pointer hover:text-black text-gray-700" to="/contact">
              Contact
            </Link>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h1 className="text-xl font-bold text-gray-700 mb-5">Categories</h1>
          <ul className="flex flex-col gap-2">
            <Link className="cursor-pointer hover:text-black text-gray-700">
              Programming
            </Link>
            <Link className="cursor-pointer hover:text-black text-gray-700">
              Tech Trends
            </Link>
            <Link className="cursor-pointer hover:text-black text-gray-700">
              Productivity
            </Link>
            <Link className="cursor-pointer hover:text-black text-gray-700">
              Tutorials
            </Link>
          </ul>
        </div>
      </div>

      <hr className="h-0.5 text-gray-600 bg-gray-700 w-full" />

      {/* Footer Bottom */}
      <div className="flex flex-col sm:flex-row justify-between items-center my-6">
        <div className="flex gap-2 items-center justify-center">
          <p className="text-gray-700 text-lg">
            <span className="font-bold text-xl text-blue-700">Dev</span>
            Tide
          </p>
        </div>
        <ul className="flex flex-col sm:flex-row items-center gap-3 text-gray-700 text-sm">
          <li className="cursor-pointer hover:text-black">Privacy Policy</li>
          <li className="cursor-pointer hover:text-black">Terms & Conditions</li>
          <li>© {new Date().getFullYear()} DevTide. All rights reserved.</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
