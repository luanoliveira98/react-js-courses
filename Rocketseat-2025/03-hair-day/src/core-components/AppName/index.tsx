import Logo from "../../assets/images/logo.svg?react";

export default function Header() {
  return (
    <div className="relative">
      <div className="absolute flex items-center rounded-b-lg justify-center -left-4 -top-4 bg-gray-600 w-35 h-14">
        <Logo />
      </div>
    </div>
  );
}
