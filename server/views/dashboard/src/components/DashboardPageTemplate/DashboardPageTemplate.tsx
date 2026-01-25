import { Poppins } from "next/font/google";
import BottomNavigation from "../BottomNavigation/BottomNavigation";
import { WikiNavigation } from "../Navigation";
import { PageComponent } from "../PageComponent/PageComponent";
import SideBar from "../Sidebar/Sidebar";
import { TDashboardPageTemplateProps } from "./DashboardPageTemplate.model";
import styles from "./DashboardPageTemplate.module.css";

const geistSans = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const DashboardPageTemplate = (props: TDashboardPageTemplateProps) => {
  return (
    <PageComponent title={`Dashboard - ${props.title}`}>
      <div className={`${styles.page} ${geistSans.variable} `}>
        <main className={styles.main}>
          <WikiNavigation />
          <BottomNavigation />
          <SideBar />
          test this mother
        </main>
      </div>
    </PageComponent>
  );
};
