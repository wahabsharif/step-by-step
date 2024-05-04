const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
  },
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Services",
    link: "/services",
    sub_menus: [
      { link: "/handyman", title: "Handyman" },
      { link: "/carpenter", title: "Carpenter" },
      { link: "/plumber", title: "Plumber" },
      {
        link: "/electrician",
        title: "Electrician",
      },
      { link: "/painter", title: "Painter" },
      {
        link: "/home-appliances",
        title: "Home Appliances",
      },
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Packages",
    link: "/packages",
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
  },
];
export default menu_data;
