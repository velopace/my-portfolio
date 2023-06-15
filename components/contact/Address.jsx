import { useTheme } from "next-themes";
import Image from "next/image";

const Address = () => {
  const { theme } = useTheme();

  const addressData = [
    {
      id: "01",
      icon: "/images/contact/phone-call 1.png",
      title: "Phone ",
      info: (
        <>
          <p>
            <a
              href="tel:+452 666 386"
              className="text-gray-lite text-lg dark:text-[#A6A6A6] "
            >
              518 620 1424
            </a>
          </p>
        </>
      ),
      bg: "#FCF4FF",
    },
    {
      id: "02",
      icon: "/images/contact/email 1.png",
      title: "Email ",
      info: (
        <>
          <p>
            <a
              href="mailto:evansmj76@gmail.com"
              className="text-gray-lite text-lg dark:text-[#A6A6A6] "
            >
              evansmj76@gmail.com
            </a>
          </p>
        </>
      ),
      bg: "#EEFBFF",
    },
    {
      id: "03",
      icon: "/images/contact/map 1.png",
      title: "Address ",
      info: (
        <p className="text-gray-lite text-lg dark:text-[#A6A6A6] ">
          Winnipeg, Manitoba, Canada
        </p>
      ),
      bg: "#F2F4FF",
    },
  ];
  
  return (
    <>
      {addressData.map((item, i) => (
        <div
          key={i}
          style={{
            background: `${theme === "dark" || theme === undefined ? "#212425" : item?.bg}`,
          }}
          className="flex flex-wrap dark:bg-transparent p-[30px]  border-[#A6A6A6] gap-2 rounded-xl "
        >
          <span className="w-8 mt-2">
            <Image
              src={item.icon}
              width={30}
              height={20}
              alt="icon"
              className="text-4xl dark:text-white"
            />
          </span>
          <div className="space-y-2">
            <p className="text-xl font-semibold dark:text-white">
              {item?.title} :
            </p>
            {item?.info}
          </div>
        </div>
      ))}
    </>
  );
};

export default Address;
