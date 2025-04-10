import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { BottomNavigation, Icon, Modal, useSnackbar } from "zmp-ui";
import { openChat, getPhoneNumber, getAccessToken } from "zmp-sdk/apis";
import { useVirtualKeyboardVisible } from "hooks";
import { MenuItem } from "types/menu";
import img from "static/banner-thong-bao.jpg";
import { useRecoilValue } from "recoil";
import { userState } from "state";

const tabs: Record<string, MenuItem> = {
  "/chat": {
    label: "Nhắn tin",
    icon: <Icon icon="zi-chat" />,
  },
  "/nhanThongBao": {
    label: "Nhận thông báo",
    icon: <Icon icon="zi-notif-ring" className="shaking-icon" />,
  },
  "/call": {
    label: "Gọi ngay",
    icon: <Icon icon="zi-call" />,
  },
};

export type TabKeys = keyof typeof tabs;

export const NO_BOTTOM_NAVIGATION_PAGES = ["/search", "/category"];

export const Navigation: FC = () => {
  const [activeTab, setActiveTab] = useState<TabKeys>("/");
  const keyboardVisible = useVirtualKeyboardVisible();
  const navigate = useNavigate();
  const location = useLocation();
  const [modalVisible, setModalVisible] = useState(false);

  const noBottomNav = useMemo(() => {
    return NO_BOTTOM_NAVIGATION_PAGES.includes(location.pathname);
  }, [location]);

  if (noBottomNav || keyboardVisible) {
    return <></>;
  }

  const handleTabClick = (path: string) => {
    if (path === "/nhanThongBao") {
      handleModalConfirm();
    } else if (path === "/call") {
      handleCall();
    } else {
      // Kiểm tra nếu đang ấn vào trang chủ
      const isHomePage = path === "/";
      if (isHomePage) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setActiveTab(path);
      if (!isHomePage) {
        openChat({
          type: "oa",
          id: "3578559673417906455",
          message: "Xin chào",
          success: () => {},
          fail: (err) => {},
        });
      }
    }
  };

  const handleCall = () => {
    const phoneNumber = "0921909192";
    window.open(`tel:${phoneNumber}`);
  };

  const userInfo = useRecoilValue(userState);
  const [access_Token, setAccessToken] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [notificationRequested, setNotificationRequested] = useState(false);

  const handleModalConfirm = () => {
    if (!notificationRequested) {
      getAccessToken({
        success: (accessToken) => {
          setAccessToken(accessToken);
          console.log("accessToken:", accessToken);
        },
        fail: (error) => {
          console.log(error);
        },
      });
      getPhoneNumber().then((res) => {
        if (res) {
          setToken(res.token as string);
        }
      });
      setNotificationRequested(true);
    } else {
      openSnackbar({
        text: "Bạn đã yêu cầu nhận thông báo rồi!",
        type: "warning",
        position: "bottom",
      });
    }
  };

  const { openSnackbar, closeSnackbar } = useSnackbar();
  const timemerId = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      closeSnackbar();
      if (timemerId.current !== null) {
        clearInterval(timemerId.current);
      }
    };
  }, []);

  useEffect(() => {
    const sendToWebhook = async () => {
      if (access_Token && token && userInfo) {
        try {
          const webhookUrl = "https://pro.n8n.vn/webhook/miniapp-lark-user"; // replace with your actual webhook URL
          const data = {
            accessToken: access_Token,
            token: token,
            user: userInfo,
            "app": "NewLAVIDA"
          };

          const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
              // 'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });

          if (!response.ok) {
            throw new Error(`Webhook error! Status: ${response.status}`);
          }
          console.log("Gửi thành công");
          openSnackbar({
            text: "Cảm ơn bạn đã đăng ký! Những thông báo mới nhất sẽ sớm được gửi đến bạn.",
            type: "success",
            position: "bottom",
          });
        } catch (error) {
          console.error("Error sending data to webhook:", error);
        }
      }
    };

    sendToWebhook();
  }, [access_Token, token, userInfo]);

  return (
    <>
      <BottomNavigation
        id="footer"
        activeKey={activeTab}
        onChange={(key: TabKeys) => setActiveTab(key)}
        className="z-50"
      >
        {Object.keys(tabs).map((path: TabKeys) => (
          <BottomNavigation.Item
            key={path}
            label={tabs[path].label}
            icon={tabs[path].icon}
            activeIcon={tabs[path].activeIcon}
            onClick={() => handleTabClick(path)}
          />
        ))}
      </BottomNavigation>
    </>
  );
};
