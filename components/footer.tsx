"use client";
import Logo from "./logos";

function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-center bg-repeat-x bg-contain border border-transparent bg-footer-img border-t-yellow-800/20 bg-yellow-500/5 ">
      <div className="flex flex-col items-center justify-between max-w-4xl px-3 mx-auto sm:py-4 sm:flex-row">
        {/* left */}
        <div>
          <Logo />
        </div>
        {/* middle */}
        <div>
          <h4 className="capitalize">
            &copy; {new Date().getFullYear().toString()} Events in kandy
          </h4>
        </div>
        {/* right */}
        <a href="tel:1738" className="font-bold underline">
          tel : 123456789
        </a>
      </div>
    </footer>
  );
}

export default Footer;
