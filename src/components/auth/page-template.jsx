import Image from "next/image";
import { cn } from "@/lib/utils";
import FleetManagementBg from "@/components/fleet-management-bg";

const AuthPageTemplate = ({
  children,
  title,
  transitioningTo,
  onAnimationEnd,
  footer,
}) => {
  return (
    <div className="min-h-screen">
      <div
        className={cn(
          "duration-1000 img-wrapper overflow-hidden fixed top-0 left-0 bottom-0 right-1/2",
          transitioningTo
            ? "animate-out slide-out-to-left-10 fade-out fill-mode-forwards"
            : "animate-in slide-in-from-left-10 fade-in fill-mode-forwards"
        )}
        onAnimationEnd={onAnimationEnd}
      >
        <FleetManagementBg className={cn("w-full h-full")} />
      </div>
      <main
        className={cn(
          "animate-in slide-in-from-right-10 fade-in duration-1000 p-12 pb-8 flex flex-col items-center gap-4 absolute top-0 left-1/2 right-0 min-h-full",
          transitioningTo
            ? "animate-out slide-out-to-right-10 fade-out fill-mode-forwards"
            : "animate-in slide-in-from-right-10 fade-in fill-mode-forwards"
        )}
        onAnimationEnd={onAnimationEnd}
      >
        <Image
          src="/images/fleet-management-logo.svg"
          width={151.29}
          height={151.29}
          alt="Fleet Management Logo"
          className="w-32 h-32"
        />
        <h2 className="font-bold text-lg">Welcome</h2>
        <h2 className="text-3xl text-center">Fleet Management System</h2>
        <h1 className="text-[#115931] text-2xl font-extrabold self-start">
          {title}
        </h1>
        {children}
        {footer && (
          <div className="footer border rounded p-2 self-stretch text-center text-sm mt-auto">
            {footer}
          </div>
        )}
      </main>
    </div>
  );
};

export default AuthPageTemplate;
