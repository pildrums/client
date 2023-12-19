import Link from "next/link";
import { RiArrowRightLine as RiArrow } from "react-icons/ri";
import "./GuestButton.scss";

function GuestButton() {
  return (
    <Link href="/match/today" className="guest-button">
      둘러보기
      <RiArrow />
    </Link>
  );
}

export default GuestButton;
