import { usePathname } from "next/navigation";

export default function usePath() {
  const pathname = usePathname();

  const PATH = {
    today: "/match/today",
    month: "/match/month",
    previous: "/match/previous",
    community: "/community",
    login: "/login",
  };

  const ACTIVE_PAGE = "active-page";

  const UNDER_BAR = "underbar";

  const ACTIVE_MATCH_CLASSNAME = `${
    pathname === PATH.today ? ACTIVE_PAGE : ""
  } ${pathname === PATH.month ? ACTIVE_PAGE : ""} ${
    pathname === PATH.previous ? ACTIVE_PAGE : ""
  }`;

  const ACTIVE_COMMUNITY_CLASSNAME = `${
    pathname === PATH.community ? ACTIVE_PAGE : ""
  }`;

  const UNDERBAR_MATCH_CLASSNAME = `${
    pathname === PATH.today ? UNDER_BAR : ""
  } ${pathname === PATH.month ? UNDER_BAR : ""} ${
    pathname === PATH.previous ? UNDER_BAR : ""
  }`;

  const UNDERBAR_COMMUNITY_CLASSNAME = `${
    pathname === PATH.community ? ACTIVE_PAGE : ""
  }`;

  return {
    ACTIVE_MATCH_CLASSNAME,
    ACTIVE_COMMUNITY_CLASSNAME,
    UNDERBAR_COMMUNITY_CLASSNAME,
    UNDERBAR_MATCH_CLASSNAME,
    PATH,
  };
}
