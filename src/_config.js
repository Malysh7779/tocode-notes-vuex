export const process = {
  dev: true
}

export const site = {
  home: process.dev ? "http://localhost:8080" : "http://192.168.55.24:8080"
}

export const app = {
  title: 'Notes'
}

export const links = [
  {
    title: "Home",
    alias: "home",
    url: "/"
  }, 
  {
    title: "About",
    alias: "about",
    url: "/about"
  }
];
