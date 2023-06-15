import { useTheme } from "next-themes";
import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";

const ResumeCard = () => {
  const { theme } = useTheme();

  const resumeData = [
    {
      title: "Education",
      icon: <MdOutlineBusinessCenter />,
      items: [
        {
          id: 3,
          date: "2011-2015",
          title: "Bachelor of Engineering - BE",
          place: "National University of Singapore",
          bg: "#FFF4F4",
        },
      ],
    },
    {
      title: "Experience",
      icon: <MdOutlineSchool />,
      items: [
        {
          date: "OCT 2020 - Present",
          title: ".NET Full Stack Developer",
          place: "CareStack",
          bg: "#F2F4FF",
        },
        {
          date: "FEB 2018 - SEP 2020",
          title: ".Net Developer",
          place: "RallyPoint",
          bg: "#EEF5FA",
        },
  
        {
          date: "FEB 2016 - JAN 2018",
          title: "Full Stack .NET Developer",
          place: "Pleasant Solutions",
          bg: "#F2F4FF",
        },
      ],
    }
  ];

  return (
    <>
      {resumeData.map((item, key) => (
        <div key={key}>
          <div className="flex items-center space-x-2 mb-4">
            <div className="text-6xl text-[#F95054]">{item.icon}</div>
            <h4 className="text-5xl dark:text-white font-medium">
              {item.title}
            </h4>
          </div>

          {item.items.map((singleItem, singleKey) => (
            <div
              className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-[#212425] dark:border-2"
              style={{
                background: `${
                  theme === "dark" || theme === undefined ? "transparent" : singleItem?.bg
                }`,
              }}
              key={singleKey}
            >
              <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                {singleItem.date}
              </span>
              <h3 className="text-xl dark:text-white"> {singleItem.title} </h3>
              <p className="dark:text-[#b7b7b7]">{singleItem.place}</p>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default ResumeCard;
