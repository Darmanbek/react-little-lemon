export const navItems = [
    "Home",
    "About",
    "Services",
    "Menu",
    "Reservations",
    "Order Online",
    "Login"
].map((item, index) => ({
    key: index + 1,
    label: item,
}));