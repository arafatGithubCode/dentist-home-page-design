import ChatBox from "@/components/ChatBox";
import Footer from "@/components/Footer";
import GetInTouchSide from "@/components/GetInTouchSide";
import Header from "@/components/Header";
import Whatsapp from "@/components/Whatsapp";

type Props = {
  children: React.ReactNode;
};

const Layouts = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header children={Object} />
      <div className="flex-1">{children}</div>
      <ChatBox />
      <Whatsapp />
      <GetInTouchSide />
      <Footer />
    </div>
  );
};

export default Layouts;
