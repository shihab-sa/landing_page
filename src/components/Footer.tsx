import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12">
      <div className="bg-customDarkBlue">
        {/* Top Footer */}
        <div className="px-4 md:px-14 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-2xl font-bold text-white">FKTECH</p>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 mt-4 md:mt-0">
              <b className="text-customTeal">Our Solutions</b>
              <div className="hidden md:block w-[1px] h-[50px] bg-pipes"></div>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Link
                  href="/solutions/anycaas"
                  className="text-customTeal hover:text-white transition"
                >
                  AnyCaaS
                </Link>
                <Link
                  href="/solutions/anybaas"
                  className="text-customTeal hover:text-white transition"
                >
                  AnyBaaS
                </Link>
                <Link
                  href="/solutions/anypaas"
                  className="text-customTeal hover:text-white transition"
                >
                  AnyPaaS
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-[#00152d] py-4">
          <div className="px-4 md:px-14 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-customBlue text-xs">
              <b>©2023 All rights reserved.</b> Any Technology Pte Ltd.
            </p>
            <Link
              href="/privacy-policy"
              className="text-customBlue text-sm hover:text-white transition"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
